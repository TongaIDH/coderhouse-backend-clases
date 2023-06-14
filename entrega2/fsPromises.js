const fs = require('fs');

const asyncOperations = async () => {
    try {
        await fs.promises.writeFile('./fsPromises.txt', `Some random words for the file\n`);

        let content = await fs.promises.readFile('./fsPromises.txt');
        console.log(`- 1st log: \n${content}`);

        await fs.promises.appendFile('./fsPromises.txt', `\nNew line for the file\n`);

        content = await fs.promises.readFile('./fsPromises.txt');
        console.log(`- 2nd log: \n${content}`);
        
        await fs.promises.unlink('./fsPromises.txt');
    } catch (error) {
        console.log(error);
    };
};

asyncOperations();