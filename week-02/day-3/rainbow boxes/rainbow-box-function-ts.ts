'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.
let rainbowColors: string[] = ['red', 'orange', 'yellow', 'lawngreen', 'dodgerblue', 'mediumblue', 'darkviolet'];

function drawSquare(size: number, color: string) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
}

function rainbowBox(size, lineWidth) {
    for (let i: number = size; i > 0; i -= lineWidth) {
        drawSquare(i, rainbowColors[i / lineWidth % rainbowColors.length]);
    }
}

let rainbowBoxSize = 400;
let rainbowBoxLineWidth = 10;

rainbowBox(rainbowBoxSize, rainbowBoxLineWidth);