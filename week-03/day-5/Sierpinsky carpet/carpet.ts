'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class Drawing {
  centerPointSquare(x,y,size) {
    ctx.fillRect(x-size/2, y-size/2, size,size);
  }
}

let drawing: Drawing = new Drawing();

drawing.centerPointSquare(canvas.width/2,canvas.height/2,100);