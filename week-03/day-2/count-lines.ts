'use strict';

declare function require(path: string): any;
const fs = require('fs');

function countLines (filename: string) {
  try {
    return fs.readFileSync(filename, 'utf-8').split('\r\n').length;
  }
  catch(error) {
    return 0;
  }
}

console.log('Count of lines: ' + countLines('../../../text.txt'));


// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.