'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches (array1, array2) {
    
    let matchesArray: string [] = [];
    
    for (let i: number = 0; i < Math.min(array1.length, array2.length); i++) {
        
        matchesArray.push(array1[i], array2[i]);
    
    }
    
    return matchesArray;
}

console.log(makingMatches(girls, boys));

export = makingMatches;