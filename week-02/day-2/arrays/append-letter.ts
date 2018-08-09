'use strict';
// Create a function called "appendA()" that adds "a" to every string in the far list.
// The parameter should be a list.
let far: string[] = ['bo', 'anacond', 'koal', 'pand', 'zebr'];

function appendA(giveMeAnArray) {
    let newArray: string [] = [];
    giveMeAnArray.forEach (function (elem) {
        elem = elem + "a";
        newArray.push(elem);
    });
    return newArray;
}

console.log(appendA(far));

// The output should be: 'boa', 'anaconda', 'koala', 'panda', 'zebra'
export = appendA;