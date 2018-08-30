export const matrix: number[][] = [
  [1, 3, 4],
  [5, 5, 7]
];

export const matrix2: number[][] = [
  [1, 3, 4, 6],
  [5, 5, 7, 6],
  [1, 1, 1, 6]
];


function matrixSum(inputMatrix: number[][]): number {
  let sum: number = 0;
  for (let j: number = 0; j < inputMatrix.length; j++) {
    for (let i: number = 0; i < inputMatrix[j].length; i++) {
      sum += inputMatrix[j][i];
    }
  }
  return sum
}

//console.log(matrixSum(matrix));
//console.log(matrixSum(matrix2));