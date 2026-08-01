const fs = require('fs');
const http = require('https');
const path = require('path');

const css = fs.readFileSync('style.css', 'utf8');

// Find all url(...) strings
const matches = css.match(/url\(['"]?([^'"\)]+)['"]?\)/g) || [];
const urls = [...new Set(matches.map(m => {
  let u = m.replace(/url\(['"]?/, '').replace(/['"]?\)/, '').trim();
  if (u.startsWith('../')) u = u.slice(3);
  if (u.startsWith('./')) u = u.slice(2);
  return u;
}))].filter(u => !u.startsWith('http') && !u.startsWith('data:'));

console.log(`Found ${urls.length} relative asset URLs in CSS:`);
console.log(urls.join('\n'));

fs.writeFileSync('css_urls.txt', urls.join('\n'), 'utf8');
