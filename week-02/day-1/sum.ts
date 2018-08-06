export {}

function sum (numberOfNumbers: number): number {
    let sumOf : number = 0;
    for (let i: number = 1; i <= numberOfNumbers; i++) {
        sumOf += i;
    }
    return sumOf
}

for (let i: number = 1; i <= 100; i++) {
    console.log(sum(i));
}


// -  Write a function called `sum` that sum all the numbers until the given parameter
// -  The function should return the result