const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = fs.readFileSync('css_urls.txt', 'utf8').split('\n').filter(u => u.trim() && !u.startsWith('#'));

async function downloadFile(relPath) {
  const targetPath = path.join(__dirname, relPath);
  const targetDir = path.dirname(targetPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const url = `https://greenveil.xyz/${relPath}`;
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(targetPath);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`[OK] Downloaded: ${relPath}`);
          resolve(true);
        });
      } else {
        console.log(`[SKIP ${res.statusCode}]: ${relPath}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log(`[ERR]: ${relPath} - ${err.message}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Downloading ${urls.length} assets from greenveil.xyz...`);
  for (const u of urls) {
    await downloadFile(u.trim());
  }
  console.log('Finished asset downloads!');
}

run();
