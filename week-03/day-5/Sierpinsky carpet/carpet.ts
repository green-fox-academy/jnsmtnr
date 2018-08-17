'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

class Drawing {
  centerPointSquare(x, y, size) {
    ctx.fillStyle = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    let randomSizeMul: number = Math.random() * 0.2 + 0.9;
    ctx.fillRect(x - size * randomSizeMul / 2, y - size * randomSizeMul / 2, size * randomSizeMul, size * randomSizeMul);
  }
  nineSquares(x, y, size, i) {
    if (i < 5) {
      this.centerPointSquare(x, y, size / 3);
      for (let row = -1; row <= 1; row++) {
        for (let col = -1; col <= 1; col++) {
          if (!(col == 0 && row == 0)) {
            this.nineSquares(x - col * (size / 3), y - row * (size / 3), size / 3, i + 1);
          }

        }
      }
    }
  }
  goaPartyOn() {
    setTimeout(function () {
      this.nineSquares(canvas.width / 2, canvas.height / 2, canvas.width, 0);
      this.goaPartyOn();
    }, 1);
  }
}

let drawing: Drawing = new Drawing();

//drawing.goaPartyOn();

function goaPartyOn() {
  setTimeout(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawing.nineSquares(canvas.width / 2, canvas.height / 2, canvas.width, 0);
    goaPartyOn();
  }, 50);
}
goaPartyOn();