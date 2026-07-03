# Live Loop Habits data — setup

Three pieces. None of them run inside the design tool — the design tool only
*consumes* the result.

## 1. Drive → GitHub (the daily cron)

`tools/drive-to-github-sync.gs` is a Google Apps Script. It finds the newest
file matching `Loop Habits Backup YYYY-MM-DD HHMMSS.db` in a Drive folder and
pushes it to `data/latest.db` in a GitHub repo, overwriting the previous copy.

Setup steps are written as comments at the top of the file. Summary:
1. Paste the script into script.google.com as a new project.
2. Create a GitHub fine-grained PAT scoped to just this repo, "Contents: Read
   and write" permission. Store it as a Script Property `GITHUB_TOKEN`.
3. Fill in `FOLDER_ID` (the Drive folder's ID from its URL) and confirm
   `GITHUB_REPO`.
4. Run once manually to authorize Drive + external requests.
5. Add a daily time-driven trigger.

Because Drive access runs as you (no separate OAuth flow needed), Apps Script
is simpler here than a GitHub Action reaching into Drive.

## 2. Repo visibility

`Digital-Habit-Organism` is currently private. Two options:
- **Keep it private** and fetch via the GitHub Contents API with a
  *read-only* token — but that token would need to live somewhere the browser
  can read it, which isn't safe to bake into a shared HTML file.
- **Simplest: make `data/latest.db` reachable via a public raw URL.** Either
  flip the whole repo public, or push the `.db` to a small dedicated public
  repo/gist just for this one file (keeping any other code private). Then
  `https://raw.githubusercontent.com/<owner>/<repo>/main/data/latest.db` is
  fetchable with no auth, from anywhere, including this design's preview.

Recommend the dedicated small public repo/gist — isolates exposure to just
the habit-tracking numbers, nothing else.

## 3. GitHub → the design

Once a public raw URL serves the current `.db`:
- I can pull it in on request via `github_import_files`, or
- The design itself can `fetch()` the raw URL at runtime, load it with
  **sql.js** (SQLite compiled to WASM), and query it directly in the browser
  — genuinely live, no manual re-import needed.

I haven't wired step 3 into the Design Component yet — I don't have a sample
`.db` to confirm the exact table/column names Loop Habits' current version
uses. Once (a) the sync above is live and (b) `data/latest.db` is reachable,
tell me the raw URL and I'll build the loader (it'll introspect the schema
at runtime rather than hardcode column names, so it's resilient to Loop
Habits' own version changes).
