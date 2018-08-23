function countLetters (data: string): string {
  let doNotCountString: string = ' \'"\|+!%/=()[]$ß¤<>#&@{},?;.:-_*0123456789';
  let arrayToCount: string[] = data.toLowerCase().split('').sort().filter( (letter) => doNotCountString.indexOf(letter) == -1 );
  let returnString: string = '';
  let numberOfLetters: number = 1;
  for (let i:number=0;i<arrayToCount.length;i++) {
    if (arrayToCount[i] == arrayToCount[i+1]) {
      numberOfLetters++
    } else {
      returnString += arrayToCount[i]+String(numberOfLetters)+' ';
      numberOfLetters = 1;
    }
  }
  return returnString;
}

console.log(countLetters('Harsh, bitter, wet heritage.'));