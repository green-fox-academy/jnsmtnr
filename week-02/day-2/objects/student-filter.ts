'use strict';
export{}

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

function moreThan4 (theArray) {
    let moreThan4Array: string[] = [];
    theArray.forEach(function (elem){
        if (elem["candies"] > 4) {
            moreThan4Array.push(elem["name"])
        }
    });
    console.log(moreThan4Array);
}

function averageCandy(theArray) {
    let sum: number = 0;
    theArray.forEach(function (elem){
        sum += elem["candies"];
    });
    console.log(sum / theArray.length);
}

moreThan4(students);
averageCandy(students);

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
// create a function that takes a list of students and logs: 
//  - how many candies they have on average