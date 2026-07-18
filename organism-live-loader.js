// Live loader: fetches the daily-synced Loop Habits backup from GitHub and
// reproduces the same window.__ORGANISM_DATA / window.__ORGANISM_DAILY shape
// the static organism-data.js / organism-daily-data.js files used to provide,
// so the Digital Organism component needs no other changes.
//
// Methodology note: Loop's db backup stores raw daily completions only (no
// precomputed scores in this export). "h" scores here are a trailing
// 61-day (±30) moving average of daily completion, matching the same
// smoothing window the Epoch/Focus charts already apply client-side.

(function () {
  const RAW_DB_URL = 'https://raw.githubusercontent.com/Gordon-Hack/Digital-Habit-Organism/main/data/latest.db';
  const SQLJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/';

  // canonical label -> {full text, exact Loop habit name to match (null = no live source, stays 0)}
  const HABIT_MAP = [
    { label: 'CREATE',     full: '1 Creative Action',               dbName: '1 creative action' },
    { label: 'EXERCISE',   full: 'Exercise',                         dbName: 'Exercise' },
    { label: 'FAITH',      full: 'Keep the Faith',                   dbName: '💥💥Keep the faith💥💥' },
    { label: 'GREAT DAY',  full: 'Great Day',                        dbName: '☯️☯️Great Day☯️☯️' },
    { label: 'TIDINESS',   full: 'Tidiness',                         dbName: 'Tidiness' },
    { label: 'READING',    full: '30 Min Reading',                   dbName: '30 min reading' },
    { label: 'SLEEP',      full: 'Reasonable Bed Time',               dbName: 'Reasonable bed time' },
    { label: 'PSC',        full: 'Power. Strength. Consciousness',    dbName: '🌌 Power. Strength. Conscness Universe 🌌' },
    { label: 'CBT',        full: 'CBT',                               dbName: 'CBT' },
    { label: 'REFLECT',    full: 'Reflecting',                        dbName: null },
    { label: 'RDH',        full: 'Morning RDH',                       dbName: 'Morning RDH' },
    { label: 'SOCIAL',     full: 'Social Expansion',                  dbName: 'Social expansion action' },
    { label: 'MEDI',       full: 'Meditation',                        dbName: 'Medi' },
    { label: '9.30',       full: 'In Bed by 9.30',                    dbName: '9.30' },
    { label: '1 PFS',      full: '1 PFS (Verbalise)',                 dbName: '1 PFS (Verbalise)' },
    { label: 'PLAN DAY',   full: 'Plan the Day',                      dbName: 'Plan the day' },
    { label: 'DILIGENCIA', full: 'Diligencia',                        dbName: 'Diligencia' },
    { label: 'PUP',        full: 'Pup Walk',                          dbName: 'Pup' },
    { label: 'YOGA',       full: 'Yoga',                              dbName: 'Yoga' },
    { label: 'ABS',        full: 'Abs',                               dbName: 'Abs' },
    { label: 'F TASCHEN',  full: 'F Taschen',                         dbName: 'F Taschen' },
    { label: '2 COFFEES',  full: '2 Coffees',                         dbName: '2 coffees' },
    { label: '1 3 OR FEW', full: '1 3 or Few',                        dbName: '1 c or few' },
    { label: 'DRINKING',   full: 'Drinking',                          dbName: 'Drinking' },
    { label: '2 3',        full: '2 3',                               dbName: 'W' },
    { label: 'VALE',       full: 'Vale',                              dbName: 'Vale' },
  ];
  const N = HABIT_MAP.length;
  const WIN = 30; // ±30 day moving-average window, matches app's own Epoch smoothing

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src; s.onload = resolve; s.onerror = () => reject(new Error('failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  function dayStr(ms) { return new Date(ms).toISOString().slice(0, 10); }
  function addDays(dateStr, n) {
    const d = new Date(dateStr + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }

  async function run() {
    await loadScript(SQLJS_CDN + 'sql-wasm.js');
    const SQL = await window.initSqlJs({ locateFile: f => SQLJS_CDN + f });
    const resp = await fetch(RAW_DB_URL, { cache: 'no-store' });
    if (!resp.ok) throw new Error('db fetch failed: ' + resp.status);
    const buf = await resp.arrayBuffer();
    const db = new SQL.Database(new Uint8Array(buf));

    const habitsRes = db.exec("SELECT id,name FROM Habits WHERE archived=0")[0];
    const idByName = new Map();
    if (habitsRes) habitsRes.values.forEach(([id, name]) => idByName.set(name, id));

    // canonical index -> Loop habit id (or -1 if unmapped/not found)
    const idxToHabitId = HABIT_MAP.map(h => (h.dbName && idByName.has(h.dbName)) ? idByName.get(h.dbName) : -1);
    const habitIdToIdx = new Map();
    idxToHabitId.forEach((id, idx) => { if (id !== -1) habitIdToIdx.set(id, idx); });

    const repsRes = db.exec("SELECT habit, timestamp, value FROM Repetitions");
    const dayMap = new Map(); // dateStr -> Float array[N] raw 0/1 (default 0)
    let minDate = null, maxDate = null;
    if (repsRes && repsRes[0]) {
      repsRes[0].values.forEach(([habitId, ts, value]) => {
        const idx = habitIdToIdx.get(habitId);
        if (idx === undefined) return;
        const d = dayStr(ts);
        if (!dayMap.has(d)) dayMap.set(d, new Float64Array(N));
        if (value >= 2) dayMap.get(d)[idx] = 1;
        if (!minDate || d < minDate) minDate = d;
        if (!maxDate || d > maxDate) maxDate = d;
      });
    }
    if (!minDate) throw new Error('no repetitions found for mapped habits');

    // dense daily raw array across the whole range
    const dates = [];
    for (let d = minDate; d <= maxDate; d = addDays(d, 1)) dates.push(d);
    const raw = dates.map(d => dayMap.get(d) || new Float64Array(N));

    // trailing ±WIN moving average per day per habit
    const mavg = raw.map((_, i) => {
      const out = new Float64Array(N);
      const lo = Math.max(0, i - WIN), hi = Math.min(raw.length - 1, i + WIN);
      const cnt = hi - lo + 1;
      for (let j = lo; j <= hi; j++) for (let k = 0; k < N; k++) out[k] += raw[j][k];
      for (let k = 0; k < N; k++) out[k] /= cnt;
      return out;
    });

    // daily payload: last ~200 days (covers Focus view's 30-day lookback with margin)
    const dailyCount = Math.min(dates.length, 200);
    const days = dates.slice(-dailyCount).map((d, i) => ({
      date: d,
      h: Array.from(mavg[mavg.length - dailyCount + i]).map(v => Math.round(v * 1000) / 1000)
    }));

    // weekly payload: resample every 7 days across full history
    const weeks = [];
    for (let i = 0; i < dates.length; i += 7) {
      const h = Array.from(mavg[i]).map(v => Math.round(v * 1000) / 1000);
      const w = Math.round((h.reduce((a, b) => a + b, 0) / N) * 1000) / 1000;
      weeks.push({ date: dates[i], h, w });
    }
    // ensure the final week reflects the latest available day
    const lastH = Array.from(mavg[mavg.length - 1]).map(v => Math.round(v * 1000) / 1000);
    const lastW = Math.round((lastH.reduce((a, b) => a + b, 0) / N) * 1000) / 1000;
    if (weeks[weeks.length - 1].date !== dates[dates.length - 1]) {
      weeks.push({ date: dates[dates.length - 1], h: lastH, w: lastW });
    }

    window.__ORGANISM_DATA = {
      habits: HABIT_MAP.map(h => ({ label: h.label, full: h.full })),
      weeks
    };
    window.__ORGANISM_DAILY = {
      habitNames: HABIT_MAP.map(h => h.label),
      days
    };
  }

  run().catch(err => console.error('[organism-live-loader]', err));
})();
