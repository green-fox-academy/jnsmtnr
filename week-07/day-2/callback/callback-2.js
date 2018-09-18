'use strict';

const mapWith = (array, callback) => {
  let output = [];
  output = array.map(a => callback(a));
  return output;
}

const removeSecondLetter = (word) => {
  let result = '';
  let wordArray = word.split('');
  for (let i=1;i<word.length;i++) {
    wordArray.splice(i,1);
  };
  result = wordArray.join('');
  return result;
}

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']