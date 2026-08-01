const fs = require('fs');

const cssPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\187\\content.md';
const jsPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\188\\content.md';

const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

console.log('--- CSS matching x-login ---');
const cssMatches = css.match(/\.[a-zA-Z0-9_-]*x-login[a-zA-Z0-9_-]*\{[^\}]+\}/g) || [];
console.log(cssMatches.slice(0, 15).join('\n'));

console.log('\n--- CSS matching fox-dialogue ---');
const foxCssMatches = css.match(/\.[a-zA-Z0-9_-]*fox[a-zA-Z0-9_-]*\{[^\}]+\}/g) || [];
console.log(foxCssMatches.slice(0, 15).join('\n'));
