const fs = require('fs');

const jsPath = 'C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\188\\content.md';
const js = fs.readFileSync(jsPath, 'utf8');

// Find arrays of quotes or sentences
const quotes = [
  "I've seen rugs with stronger communities.",
  "Robinhood Chain is loading...",
  "Vault timber, switch lanes.",
  "Beware of goblins at the roots.",
  "Founders Round is now active."
];

// Search JS for any other dialogue quotes
const matches = js.match(/["']([^"'\\]{10,80}\.(|\!|\?))["']/g) || [];
const cleanQuotes = [...new Set(matches.map(m => m.slice(1, -1)))].filter(q => {
  return !q.includes('http') && !q.includes('function') && !q.includes('Error') && !q.includes('{');
});

console.log('Sample quotes found in JS bundle:');
console.log(cleanQuotes.slice(0, 30).join('\n'));
