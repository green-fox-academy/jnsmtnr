'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function fourSquares(x,y, size, i) {
  if (i != 5) {
  ctx.strokeRect(x + size / 3, y, size / 3, size / 3);
  ctx.strokeRect(x, y + size / 3, size / 3, size / 3);
  ctx.strokeRect(x + size / 3 * 2, y + size / 3, size / 3, size / 3);
  ctx.strokeRect(x + size / 3, y + size / 3 * 2, size / 3, size / 3);
  fourSquares(x + size/3, y, size /3, i+1);
  fourSquares(x, y + size/3, size /3, i+1);
  fourSquares(x + size/3*2, y + size/3, size /3, i+1);
  fourSquares(x + size/3, y + size/3*2, size /3, i+1);
  }
}
ctx.fillStyle= 'blue';
ctx.fillRect(0,0,canvas.width,canvas.height);
fourSquares(0,0,canvas.height,0);