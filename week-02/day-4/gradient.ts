const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function leftToRightGradient(leftColor: number[], rightColor: number[], numberOfGradients: number): void {
    let redValueStep: number = (rightColor[0] - leftColor[0]) / numberOfGradients;
    let greenValueStep: number = (rightColor[1] - leftColor[1]) / numberOfGradients;
    let blueValueStep: number = (rightColor[2] - leftColor[2]) / numberOfGradients;
 

    for (let i: number = 0; i < numberOfGradients; i++) {
        ctx.fillStyle = 'rgb(' + (leftColor[0] + redValueStep * i) + ',' + (leftColor[1] + greenValueStep * i) + ',' + (leftColor[2] + blueValueStep * i) + ')';
        ctx.fillRect(i * (canvas.width / numberOfGradients), 0, (canvas.width / numberOfGradients), canvas.height);
    }
}

let leftSideColorInRGB: number[] = [255,100,0];
let rightSideColorInRGB: number[] = [0,100,255];
let numberOfSteps: number = 10;

leftToRightGradient(leftSideColorInRGB,rightSideColorInRGB,numberOfSteps);