export {}
'use strict';

let lineCount: number = 4;

let line: string = "";

for (let i: number = 0; i < lineCount; i++) {
    line += "*"
    console.log(line);
}

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is