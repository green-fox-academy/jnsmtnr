'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.moveTo(50,50);
ctx.strokeStyle = "red";
ctx.lineTo(canvas.width-50, 50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(canvas.width-50, 50);
ctx.lineTo(canvas.width-50, canvas.height-50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(canvas.width-50, canvas.height-50);
ctx.lineTo(50, canvas.height-50);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.moveTo(50, canvas.height-50);
ctx.lineTo(50, 50);
ctx.stroke();