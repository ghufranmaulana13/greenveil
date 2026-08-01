const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

const matches = css.match(/\.x-login-fox-dialogue[^\{]*\{[^\}]+\}/g) || [];
console.log('--- .x-login-fox-dialogue CSS rules ---');
console.log(matches.join('\n\n'));
