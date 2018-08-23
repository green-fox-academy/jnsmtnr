function anagramChecker (string1: string, string2: string): boolean {
  let sortedString1: string = string1.toLowerCase().split('').sort().filter( (letter) => letter != ' ' && letter != ',' && letter != '.'&& letter != '!'&& letter != '?' && letter != "'"&& letter != '"').join();
  let sortedString2: string = string2.toLowerCase().split('').sort().filter( (letter) => letter != ' ' && letter != ',' && letter != '.'&& letter != '!'&& letter != '?' && letter != "'"&& letter != '"').join();
  return sortedString1 === sortedString2;
}

export {anagramChecker};