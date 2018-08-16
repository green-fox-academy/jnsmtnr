// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

function asterixAdder(myString: string, n: number): string {
  if (n == myString.length -1) {
    return myString.charAt(n);
  } else  {
    return myString.charAt(n) + '*' + asterixAdder(myString, n+1);
  }
}

console.log(asterixAdder('xfgwgxyq',0));