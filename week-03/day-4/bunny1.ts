// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).

function sumOfFloppyEars(bunnies: number): number {
  if (bunnies == 1) {
    return 2;
  } else {
    return 2 + sumOfFloppyEars(bunnies - 1);
  }
}

console.log(sumOfFloppyEars(5));