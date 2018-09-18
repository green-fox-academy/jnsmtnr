'use strict';

let apple = console.log('apple');
let pear = setTimeout(() => {console.log('pear')}, 1000);
let melon = setTimeout(() => {console.log('melon')}, 3000);
let grapes = setTimeout(() => {console.log('grapes')}, 5000);

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds