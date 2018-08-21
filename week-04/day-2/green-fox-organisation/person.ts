export class Person {
  protected name: string;
  protected age: number;
  protected gender: string;

  constructor (name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} years old ${this.gender}.`)
  }
}

let person1: Person = new Person('brian', 33, 'male');

person1.introduce();