// 1. Create a new txt file using the same fs module method we have
// learned before.
const fs = require('fs');
fs.writeFileSync('text.txt', 'first text file');

// 2. Create a copy of the newly created txt file using a method from
// the fs module.
fs.copyFileSync('text.txt', 'copied_file.txt', fs.constants.COPYFILE_FICLONE, (err) => {
    console.log('my error: ', err);
})

//3. Rename one of the files using a method from the fs module.
fs.rename('copied_file.txt', 'new_name.txt', (err) => {
    if (err) throw err;
    console.log("\nFile Renamed!\n");
});

// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
filenames = fs.readdirSync(__dirname);

console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
    console.log(file);
})

/*
5. Find out and implement another method for the fs module.

Node.js fs.existsSync() Method

The fs.existsSync() method is used to synchronously check if a file already exists in the given path or not. It returns a boolean value which indicates the presence of a file.

Syntax:
fs.existsSync( path )

Parameters: This method accepts a single parameter as mentioned above and described below:

path: It holds the path of the file that has to be checked. It can be a String, Buffer or URL.

Return Value: It returns a boolean value i.e true if the file exists otherwise returns false.
*/
let fileExists = fs.existsSync('text.txt');
console.log("text.txt exists: ", fileExists);