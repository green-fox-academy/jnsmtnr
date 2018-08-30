import { matrix } from "./matrix-sum";
import { matrix2 } from "./matrix-sum";

function matrixMax(inputMatrix): number {
  let biggestNumber: number = null;
  for (let j: number = 0; j < inputMatrix.length; j++) {
    for (let i: number = 0; i < inputMatrix[j].length; i++) {
      if (inputMatrix[j][i] > biggestNumber) {
        biggestNumber = inputMatrix[j][i];
      }
    }
  }
  return biggestNumber
}
console.log(matrixMax(matrix));
console.log(matrixMax(matrix2));