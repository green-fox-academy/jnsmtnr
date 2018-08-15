class Sharpie {
  color: string;
  width: number;
  inkAmount: number;

  constructor(color: string, width: number, inkAmount: number = 100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
  }
  use() {
    this.inkAmount--;
  }

}

let pinkSharpie: Sharpie = new Sharpie('pink',20);
pinkSharpie.use();
console.log(pinkSharpie);