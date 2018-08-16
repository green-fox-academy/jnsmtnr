// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function lowerCaseXToY(myString: string, n: number): string {
  if (myString.charAt(n) == '') {
    return '';
  } else if (myString.charAt(n) == 'x'){
    return '' + lowerCaseXToY(myString, n+1);
  }
  else  {
    return myString.charAt(n) + lowerCaseXToY(myString, n+1);
  }
}

console.log(lowerCaseXToY('xfgwgxyq',0));