const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

const matches = css.match(/\.fox-dialogue[^\x7B]*\x7B[^\x7D]+\x7D/g) || [];
console.log('--- .fox-dialogue CSS rules ---');
console.log(matches.join('\n\n'));
