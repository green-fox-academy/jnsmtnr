let a: number[] = [5, 5, 6, 7, 3, 3, 3];

let result = {};

for (let i: number = 0; i < a.length; i++) {
  if (!result[(a[i])]) {
    result[(a[i])] = 0;
  }
  result[(a[i])]++;
}

let highestCount: number = 0;

for (let key in result) {
  if (result[key] > highestCount)
    highestCount = result[key]
}

let highestCountNumbers = [];

for (let key in result) {
  if (result[key] == highestCount) {
    highestCountNumbers.push(result[key]);
  }
}

console.log(highestCountNumbers);