//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

const numberSorter = (a, b) => a - b;

function sorter (arrayToSort: number[], descend: boolean = false): number[] {
    let newArray: number[] = arrayToSort.sort(numberSorter);
    if (descend) {
        newArray.reverse();
    }
    return newArray;
}

console.log(sorter([34, 12, 24, 9, 5]));
console.log(sorter([34, 12, 24, 9, 5],true));

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]