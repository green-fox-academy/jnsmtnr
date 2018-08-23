function makeComperable (input: string): string {
  let doNotCountString: string = ' \'"\|+!%/=()[]$ß¤<>#&@{},?;.:-_*0123456789';
  let output: string = input.toLowerCase().split('').sort().filter( (letter) => doNotCountString.indexOf(letter) == -1 ).join('');
return output;
}

function anagramChecker (string1: string, string2: string): boolean {
   return makeComperable(string1) === makeComperable (string2);
}

export {anagramChecker};