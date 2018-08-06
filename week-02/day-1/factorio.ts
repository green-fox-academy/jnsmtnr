export {}

function factorio (numberOfNumbers: number): number {
    let fact : number = 1;
    for (let i: number = 1; i <= numberOfNumbers; i++) {
        fact *= i;
    }
    return fact
}

for (let i: number = 1; i <= 10; i++) {
    console.log(factorio(i));
}


// -  Create a function called `factorio`
//    that returns it's input's factorial