'use strict';

const mapWith = (array, callback) => {
  let output = [];
  output = array.map(a => callback(a));
  return output;
}

const addOne = (number) => {
  return number + 1;
}

console.log(mapWith([1, 2, 3], addOne));

//expected result: [2, 3, 4]
