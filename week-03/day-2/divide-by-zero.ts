export { };
'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divideTenByNumber(divider: any): any {
  try {
    if (divider === 0) {
      throw new Error("Can't divide by 0, kocsog");
    }
    if (typeof divider != "number") {
      throw new Error("Give me a number, kocsog");
    }
    let result: number = 10 / divider;
    return result;
  } catch (err) {
    console.log(err.message);
    return 'fail';
  }

}

console.log(divideTenByNumber(0));