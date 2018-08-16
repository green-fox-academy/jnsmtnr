// Given a string, compute recursively (no loops) a new string where all the
// lowercase 'x' chars have been changed to 'y' chars.

function lowerCaseXToY(myString: string, n: number): string {
  if (myString.charAt(n) == '') {
    return '';
  } else if (myString.charAt(n) == 'x'){
    return 'y' + lowerCaseXToY(myString, n+1);
  }
  else  {
    return myString.charAt(n) + lowerCaseXToY(myString, n+1);
  }
}

//console.log('xfgwgxyq'.charAt(10));
console.log(lowerCaseXToY('xfgwgxyq',0));