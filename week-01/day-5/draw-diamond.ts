export {}
'use strict';

let lineCount: number = 9;
let spaces: string = "";
let stars: string = "*";

//a trapéz felső része

//a sornak a for ciklusa
for (let i: number = 0; i < lineCount / 2; i++) {
    //a 'spaces' for ciklusa
    for (let j: number = 1; j < lineCount / 2 - i; j++) {
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

//a trapéz alsó része

//a sornak a for ciklusa
for (let i: number = Math.floor(lineCount / 2 - 1); i >= 0; i--) {
    //a 'spaces' for ciklusa
    for (let j: number = 1; j < lineCount / 2 - i; j++) {
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
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is