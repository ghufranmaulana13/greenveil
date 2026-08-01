const fs = require('fs');

const jsPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\188\\content.md';
const js = fs.readFileSync(jsPath, 'utf8');

const targetStrings = [
  "LOGIN WITH X",
  "FOX.EXE",
  "GREENVEIL",
  "stronger communities",
  "rugs",
  "is-x-login-preview-boot"
];

targetStrings.forEach(str => {
  const matches = (js.match(new RegExp(str, 'gi')) || []).length;
  console.log(`"${str}": ${matches} matches`);
});

const index = js.indexOf("LOGIN WITH X");
if (index !== -1) {
  console.log("\n--- Snippet around 'LOGIN WITH X' ---");
  console.log(js.slice(Math.max(0, index - 400), index + 600));
}

const foxIdx = js.indexOf("FOX.EXE");
if (foxIdx !== -1) {
  console.log("\n--- Snippet around 'FOX.EXE' ---");
  console.log(js.slice(Math.max(0, foxIdx - 200), foxIdx + 500));
}
