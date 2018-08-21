export class Flower {
  color: string;
  currentWaterAmount: number;

  constructor(color: string) {
    this.color = color;
    this.currentWaterAmount = 0;
  }

  water(waterAmount) {
    this.currentWaterAmount += waterAmount*0.75;
  }

  needWater() {
    if (this.currentWaterAmount < 5) {
      console.log(`This ${this.color} Flower needs water`); 
    } else {
      console.log(`This ${this.color} Flower doesnt need water`); 
    }
  }
}