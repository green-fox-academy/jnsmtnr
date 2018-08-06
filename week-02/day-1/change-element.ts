export{}
'use strict';
let numList = [1, 2, 3, 8, 5, 6];
console.log(numList);
numList = numList.map(function(elem) {
    if (elem == 8) {
        elem = 4;
    }    
    return elem
    }
);
console.log(numList);

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test