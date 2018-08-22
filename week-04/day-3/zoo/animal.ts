export abstract class Animal {
  protected name: string;
  protected age: number;
  protected isHungry: boolean;
  protected isThirsty: boolean;
  protected isTired: boolean;

  getName() {
    return this.name;
  }
  eat() {
    this.isHungry = false;
  }
  drink () {
    this.isThirsty = false;
  }
  sleep () {
    this.isTired = false;
  }

  abstract breed(): string;

  constructor(name:string) {
    this.name = name;
  }
}