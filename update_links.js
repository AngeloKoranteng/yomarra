const fs = require('fs');

const files = [
    'src/app/page.js',
    'src/app/contact/page.js',
    'src/app/content/page.js',
    'src/app/promotie/page.js',
    'src/app/strategie/page.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\/Yomarra_Offerte\.pptx/g, '/yomarra-offerte-sectie.pdf');
    content = content.replace(/PPTX Document/g, 'PDF Document');
    content = content.replace(/PDF \/ PPTX/g, 'PDF');
    fs.writeFileSync(file, content);
});

console.log('Updated links in all files.');
