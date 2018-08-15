class Counter {
  value: number;
  defaultValue: number;

  constructor(value: number = 0) {
    this.value = value;
    this.defaultValue = value;
  }

  add(number?: number) {
    if (number == undefined) {
      this.value++;
    } else {
      this.value += number;
    }
  }
  get() {
    return String(this.value);
  }
  reset() {
    this.value = this.defaultValue;
  }
}

let counter: Counter = new Counter(10);
console.log(counter.get());
counter.add();
console.log(counter.get());
counter.add(10);
console.log(counter.get());
counter.reset();
console.log(counter.get());
