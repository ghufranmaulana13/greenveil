const fs = require('fs');

const jsPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\188\\content.md';
const js = fs.readFileSync(jsPath, 'utf8');

const idx = js.indexOf("x-login-preview");
if (idx !== -1) {
  console.log("\n--- xLoginPreview HTML Template ---");
  console.log(js.slice(Math.max(0, idx - 100), idx + 2500));
}
