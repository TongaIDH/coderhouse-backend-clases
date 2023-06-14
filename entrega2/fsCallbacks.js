const fs = require('fs');

fs.writeFile('./fsCallbacks.txt', `Some random words for the file\n`, (error) => {
    if (error) return console.log("There was an error writing the file");
    fs.readFile('./fsCallbacks.txt', (error, content) => {
        if (error) return console.log("There was an error reading the file");
        console.log(`- 1st log: \n${content}`);
        fs.appendFile('./fsCallbacks.txt', `\nNew line for the file\n`, (error) => {
            if (error) return console.log("There was an error writing the file");
            fs.readFile('./fsCallbacks.txt', (error, content) => {
                if (error) return console.log("There was an error reading the file");
                console.log(`- 2nd log: \n${content}`);
                fs.unlink('./fsCallbacks.txt', (error) => {
                    if (error) return console.log("There was an error deleting the file");
                });
            });
        });
    });
});
