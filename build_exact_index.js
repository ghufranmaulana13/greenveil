const fs = require('fs');

const rawHtml = fs.readFileSync('C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\6e1bc7c3-a103-4412-81fa-f2ee2dcf4e62\\.system_generated\\steps\\182\\content.md', 'utf8');

// Extract clean HTML starting from <!DOCTYPE html>
const htmlStart = rawHtml.indexOf('<!DOCTYPE html>');
let cleanHtml = rawHtml.slice(htmlStart).trim();

// Replace stylesheet & JS script hrefs to point to style.css and app.js
cleanHtml = cleanHtml.replace(/href="\.\/assets\/main-[A-Za-z0-9_-]+\.css"/, 'href="style.css"');
cleanHtml = cleanHtml.replace(/src="\.\/assets\/main-[A-Za-z0-9_-]+\.js"/, 'src="app.js"');

fs.writeFileSync('index.html', cleanHtml, 'utf8');
console.log('Saved 100% exact original index.html (Length: ' + cleanHtml.length + ')');
