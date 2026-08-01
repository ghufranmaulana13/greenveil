const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

const targetClasses = [
  "x-login-panel",
  "x-login-button",
  "x-login-crest",
  "x-login-divider",
  "x-login-button-frame",
  "crest-leaf",
  "crest-arrow"
];

targetClasses.forEach(cls => {
  const regex = new RegExp(`\\.${cls}[^\\{]*\\{[^\\}]+\\}`, 'g');
  const matches = css.match(regex) || [];
  console.log(`\n=== .${cls} === (${matches.length} rules)`);
  console.log(matches.slice(0, 3).join('\n'));
});
