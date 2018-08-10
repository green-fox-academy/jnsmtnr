const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

for (let i: number = 0; i < canvas.width; i += 10) {
    ctx.strokeStyle = "purple";
    ctx.beginPath();
    ctx.moveTo(i,0);
    ctx.lineTo(canvas.width,i+10);
    ctx.stroke();
}

for (let j: number = 0; j < canvas.width; j +=10) {
    ctx.strokeStyle = "cyan";
    ctx.beginPath();
    ctx.moveTo(10+j,canvas.height);
    ctx.lineTo(0,j);
    ctx.stroke();
}