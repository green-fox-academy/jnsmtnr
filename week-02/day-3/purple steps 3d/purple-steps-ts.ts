'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]

let squareSize: number = 10;
let startPoint: number = 10;
for (let i:number = 1; i<7; i++) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(startPoint,startPoint,squareSize,squareSize);
    startPoint += squareSize;
    squareSize += 10;
    
}