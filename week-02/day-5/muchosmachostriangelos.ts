const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function drawTriangle(topX,topY, size) {
    ctx.beginPath();
    ctx.moveTo(topX,topY);
    ctx.lineTo(topX+size/2,topY+size*(Math.sqrt(3)/2));
    ctx.lineTo(topX-size/2,topY+size*(Math.sqrt(3)/2));
    ctx.closePath();
    ctx.stroke();
}

const triangleSize: number = 20;
const numberOfRows: number = 21;

for (let i: number = 0; i < numberOfRows; i++) {
    for (let j: number = 0; j <= i; j++) {
        drawTriangle (canvas.width/2-i*triangleSize/2+j*triangleSize,100+i*(Math.sqrt(3)/2)*triangleSize,triangleSize);
    }
    
}
