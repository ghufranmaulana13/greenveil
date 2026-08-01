const fs = require('fs');

let css = fs.readFileSync('style.css', 'utf8');

// Replace relative ../ui/ and ../fonts/ with ui/ and fonts/
css = css.replace(/url\(['"]?\.\.\/ui\//g, "url('ui/");
css = css.replace(/url\(['"]?\.\.\/fonts\//g, "url('fonts/");
css = css.replace(/url\(['"]?\.\/ui\//g, "url('ui/");
css = css.replace(/url\(['"]?\.\/fonts\//g, "url('fonts/");

fs.writeFileSync('style.css', css, 'utf8');
console.log('Updated style.css asset URL paths to local directories.');
