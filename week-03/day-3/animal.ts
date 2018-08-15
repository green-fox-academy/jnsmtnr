class Animal {
  hunger: number;
  thirst: number;

  constructor(hunger:number=50, thirst:number=50) {
    this.hunger = hunger;
    this.thirst = thirst;
  }

  eat() {
    this.hunger--;
  }
  drink() {
    this.thirst--;
  }
  play() {
    this.hunger++;
    this.thirst++;
  }
}

let monkey: Animal = new Animal();

console.log(monkey);
monkey.eat();
monkey.eat();
monkey.eat();
console.log(monkey);
monkey.drink();
monkey.drink();
console.log(monkey);
monkey.play();
console.log(monkey);