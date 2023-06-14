const fs = require('fs');

fs.writeFileSync('./fsSincrono.txt', `Some random words for the file\n`);

if (fs.existsSync('./fsSincrono.txt')) {
    let content = fs.readFileSync('./fsSincrono.txt', 'utf-8');
    console.log(`- 1st log: \n${content}`);
    fs.appendFileSync('./fsSincrono.txt', `\nNew line for the file\n`);
    content = fs.readFileSync('./fsSincrono.txt', 'utf-8');
    console.log(`- 2nd log: \n${content}`);
    fs.unlinkSync('./fsSincrono.txt');
};



