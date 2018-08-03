export {}
'use strict';

let lineCount: number = 6;
let horizontalLine: string = "";
let verticalLine: string = "";

//vízszintes vonal meghatározó
for (let i: number = 0; i < lineCount; i++) {
    horizontalLine += "%";
}

//négyzet felső oldalának kirajzolása
console.log(horizontalLine);

//négyzet szélső oldalainak meghatározás és kirajzolása
for (let i: number = 0; i < lineCount - 2; i++) {
//bal széle
    verticalLine += "%";

//közepe
    //bal oldali spacek
    for (let j: number = 0; j < i; j++) {
        verticalLine += " ";
    }
    //középső % elem
    verticalLine += "%";
    //jobb oldali spacek
    for (let k: number = 0; k < lineCount -i - 3; k++) {
        verticalLine += " ";
    }
//jobb széle
    verticalLine += "%";
//kirajzolás
    console.log (verticalLine);
    verticalLine = "";
}

//négyzet alsó oldalának kirajzolása
console.log(horizontalLine);

// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is