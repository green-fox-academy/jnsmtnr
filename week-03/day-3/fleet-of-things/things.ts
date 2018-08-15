class Thing {
  private name: string;
  private completed: boolean;
  private static NUMBER: number = 0;
  private number: number;
  constructor(name: string){
      this.name = name;
      Thing.NUMBER++;
      this.number = Thing.NUMBER;
  }

  public complete() {
      this.completed = true;
  }
  public getName() {
    return this.name;
  }
  public getCompleted() {
    return this.completed;
  }
  public getNumber() {
    return this.number;
  }
}

export { Thing };