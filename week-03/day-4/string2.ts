// Given a string, compute recursively a new string where all the 'x' chars have been removed.

function lowerCaseXRemover(myString: string, n: number): string {
  if (myString.charAt(n) == '') {
    return '';
  } else if (myString.charAt(n) == 'x'){
    return '' + lowerCaseXRemover(myString, n+1);
  }
  else  {
    return myString.charAt(n) + lowerCaseXRemover(myString, n+1);
  }
}

console.log(lowerCaseXRemover('xfgwgxyq',0));