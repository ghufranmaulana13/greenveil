const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');

const matches = css.match(/[^\{\}]*is-x-login-preview-boot[^\{\}]*\{[^\}]+\}/g) || [];
console.log('--- .is-x-login-preview-boot rules ---');
console.log(matches.join('\n\n'));

const matches2 = css.match(/[^\{\}]*x-login-preview[^\{\}]*\{[^\}]+\}/g) || [];
console.log('\n--- .x-login-preview rules ---');
console.log(matches2.slice(0, 15).join('\n\n'));
