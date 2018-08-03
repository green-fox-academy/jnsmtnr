export {}
'use strict';

let lineCount: number = 6;
let horizontalLine: string = "";
let verticalLine: string = "";

//vízszintes vonal meghatározó
for (let i: number = 0; i < lineCount; i++) {
    horizontalLine += "%";
}
//függőleges vonal meghatározó
verticalLine += "%";
for (let i: number = 0; i < lineCount - 2; i++) {
    verticalLine += " ";
}
verticalLine += "%";

//négyzet felső oldalának kirajzolása
console.log(horizontalLine);

//négyzet szélső oldalainak kirajzolása
for (let i: number = 0; i < lineCount - 2; i++) {
    console.log(verticalLine);
}


//négyzet alsó oldalának kirajzolása
console.log(horizontalLine);


// Write a program that draws a square like this:
// 
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is