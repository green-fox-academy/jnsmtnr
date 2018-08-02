'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

let tempNumber: number;

tempNumber = a;
a = b;
b = tempNumber;

console.log(a);
console.log(b);