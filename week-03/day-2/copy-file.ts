'use strict';
export { }

declare function require(path: string): any;
const fs = require('fs');

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

function copyFile (file1: string, file2: string): void {
  let happy: boolean = true;
  try {
    fs.writeFileSync(file2,fs.readFileSync(file1,'utf-8'));
  } catch (err) {
    happy = false;
  } finally {
    console.log(happy);
  }
}

copyFile('copyfrom.txt','copyto.txt');