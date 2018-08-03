'use strict';

let lineCount: number = 4;
let spaces: string = "";
let stars: string = "*";

//a sornak a for ciklusa
for (let i: number = 0; i <lineCount; i++) {
    //a 'spaces' for ciklusa
    for (let j: number = 1; j < lineCount - i; j++) {
        spaces += " ";
    }
    //a 'stars' for ciklusa
    for (let k: number = 0; k < i; k++) {
        stars += "**";
    }
    console.log(spaces + stars);  
    spaces = "";
    stars = "*";  
}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is