'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

//i: vízszintes sorszám

for (let i: number = 0; i < 8; i++) {
    if (i % 2 !== 0) {
        for (let j:number = 0; j <4; j++) {
            ctx.fillRect(j*60,i*30,30,30);
        }}
    else {
        for (let j:number = 0; j <4; j++) {
        ctx.fillRect(j*60+30,i*30,30,30);
        }
    }
}