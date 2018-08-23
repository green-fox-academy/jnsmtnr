export class MyClass {
  sum(list: number[]) {
    let sum: number = 0;
    list.forEach( number => {
      sum += number;
    })
    return sum;
  }
}