const fs = require('fs').promises;
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const CHANGELOG_PATH = path.join(BASE_DIR, 'CHANGELOG.md');
const RELEASE_BODY_PATH = path.join(BASE_DIR, 'RELEASE_BODY.md');

(async () => {
  try {
    const file = await fs.readFile(CHANGELOG_PATH, 'utf8');
    let updated = /(#+ \[\d+\.\d+\.\d+].*?)#+ \[?\d+\.\d+\.\d+]?/s.exec(file);
    if (!updated) {
      updated = /(#+ \[?\d+\.\d+\.\d+]?.*)/s.exec(file);
    }
    await fs.writeFile(RELEASE_BODY_PATH, updated[1]);
  } catch (error) {
    console.error(error);
  }
})();
