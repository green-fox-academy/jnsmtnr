'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"
let quote: string = 'Hofstadter\'s Law: It you expect, even when you take into account Hofstadter\'s Law.'
let toInsert: string = 'always takes longer than'

let indexOfYou: number = quote.search('you');
let firstString: string = quote.slice(0,indexOfYou);
let secondString: string = quote.slice(indexOfYou);
quote = firstString + toInsert + ' ' + secondString;

console.log(quote);