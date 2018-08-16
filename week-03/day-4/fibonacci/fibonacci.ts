'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

/*
function quarterCircle(radius: number, startAngle, endAngle): void {
  if (radius < canvas.height) {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, startAngle, endAngle);
    ctx.stroke();
    quarterCircle(radius*1.5, startAngle + Math.PI / 2, endAngle + Math.PI /2);
  }
}

quarterCircle(10, 0, Math.PI/2);*/

ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0*(-Math.PI/2), 1*(-Math.PI/2), true);
ctx.stroke();

ctx.beginPath(); //y+25
ctx.arc(canvas.width / 2, canvas.height / 2 + 25, 75, 1*(-Math.PI/2), 2*(-Math.PI/2), true);
ctx.stroke();

ctx.beginPath(); //x+25
ctx.arc(canvas.width / 2 + 25, canvas.height / 2 + 25, 100, 2*(-Math.PI/2), 3*(-Math.PI/2), true);
ctx.stroke();

ctx.beginPath(); //y-25
ctx.arc(canvas.width / 2 + 25, canvas.height / 2, 125, 3*(-Math.PI/2), 4*(-Math.PI/2), true);
ctx.stroke();

ctx.beginPath(); //x-25
ctx.arc(canvas.width / 2, canvas.height / 2, 150, 4*(-Math.PI/2), 5*(-Math.PI/2), true);
ctx.stroke();
