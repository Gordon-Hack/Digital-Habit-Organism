/**
 * Google Apps Script: syncs the newest "Loop Habits Backup *.db" file from a
 * Google Drive folder to a GitHub repo, on a daily timer.
 *
 * SETUP
 * 1. Go to https://script.google.com -> New project. Paste this whole file in.
 * 2. Project Settings (gear icon) -> Script Properties -> add:
 *      GITHUB_TOKEN = a GitHub fine-grained Personal Access Token
 *        (Settings > Developer settings > Fine-grained tokens > generate one
 *         scoped ONLY to the Digital-Habit-Organism repo, permission:
 *         "Contents: Read and write")
 * 3. Edit FOLDER_ID and GITHUB_REPO below.
 * 4. Run `syncLoopHabitsToGithub` once manually to grant Drive/URL Fetch
 *    permissions when prompted.
 * 5. Triggers (clock icon, left sidebar) -> Add Trigger ->
 *      function: syncLoopHabitsToGithub, event source: Time-driven,
 *      type: Day timer, pick an hour after your phone's nightly backup runs.
 *
 * The file lands in the repo at DATA_PATH (default data/latest.db), so
 * https://raw.githubusercontent.com/<owner>/<repo>/<branch>/data/latest.db
 * always serves the newest backup (if the repo is public) or can be fetched
 * with a token via the GitHub Contents API (if private).
 */

var FOLDER_ID = 'PASTE_YOUR_DRIVE_FOLDER_ID_HERE';
var GITHUB_REPO = 'Gordon-Hack/Digital-Habit-Organism'; // owner/repo
var GITHUB_BRANCH = 'main';
var DATA_PATH = 'data/latest.db';

function syncLoopHabitsToGithub() {
  var token = PropertiesService.getScriptProperties().getProperty('GITHUB_TOKEN');
  if (!token) throw new Error('Set GITHUB_TOKEN in Script Properties first.');

  var folder = DriveApp.getFolderById(FOLDER_ID);
  var re = /^Loop Habits Backup (\d{4}-\d{2}-\d{2}) (\d{6})\.db$/;
  var newestFile = null;
  var newestKey = '';

  var it = folder.getFiles();
  while (it.hasNext()) {
    var f = it.next();
    var m = f.getName().match(re);
    if (m) {
      var key = m[1] + m[2]; // sortable: YYYY-MM-DDHHMMSS
      if (key > newestKey) {
        newestKey = key;
        newestFile = f;
      }
    }
  }

  if (!newestFile) {
    Logger.log('No file matching "Loop Habits Backup YYYY-MM-DD HHMMSS.db" found in folder.');
    return;
  }

  Logger.log('Newest backup: ' + newestFile.getName());

  var base64 = Utilities.base64Encode(newestFile.getBlob().getBytes());

  // Look up current file SHA (required by GitHub API to update an existing file)
  var getUrl = 'https://api.github.com/repos/' + GITHUB_REPO + '/contents/' + DATA_PATH + '?ref=' + GITHUB_BRANCH;
  var sha = null;
  var getResp = UrlFetchApp.fetch(getUrl, {
    headers: { Authorization: 'token ' + token },
    muteHttpExceptions: true
  });
  if (getResp.getResponseCode() === 200) {
    sha = JSON.parse(getResp.getContentText()).sha;
  }

  var payload = {
    message: 'Sync ' + newestFile.getName(),
    content: base64,
    branch: GITHUB_BRANCH
  };
  if (sha) payload.sha = sha;

  var putResp = UrlFetchApp.fetch(
    'https://api.github.com/repos/' + GITHUB_REPO + '/contents/' + DATA_PATH,
    {
      method: 'put',
      contentType: 'application/json',
      headers: { Authorization: 'token ' + token },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    }
  );

  var code = putResp.getResponseCode();
  if (code >= 200 && code < 300) {
    Logger.log('Synced OK: ' + newestFile.getName() + ' -> ' + GITHUB_REPO + '/' + DATA_PATH);
  } else {
    Logger.log('GitHub push failed (' + code + '): ' + putResp.getContentText());
  }
}
