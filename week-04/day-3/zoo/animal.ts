export abstract class Animal {
  protected name: string;
  protected age: number;

  getName() {
    return this.name;
  }

  abstract breed(): string;

  constructor(name:string) {
    this.name = name;
  }
}