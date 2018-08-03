'use strict';

let size: number = 8;
let oddLine: string = "";
let evenLine: string = "";

//páratlan sor meghatározása
while (oddLine.length < size) {
    oddLine += "% ";
}

//páros sor meghatározása
while (evenLine.length < size) {
    evenLine += " %";
}

//kirajzolás
for (let i: number = 0; i < size; i++) {
    if (i % 2 == 0) {
        console.log (oddLine);
    }
    if (i % 2 != 0) {
        console.log (evenLine);
    }
}

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//