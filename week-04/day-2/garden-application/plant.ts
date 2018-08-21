export class Plant {
  color: string;
  currentWaterAmount: number;
  waterAbsorb: number;
  waterNeeded: number;

  constructor(color: string, waterAbsorb: number, waterNeeded: number) {
    this.color = color;
    this.currentWaterAmount = 0;
    this.waterAbsorb = waterAbsorb;
    this.waterNeeded = waterNeeded;
  }

  water(waterAmount) {
    this.currentWaterAmount += waterAmount*this.waterAbsorb;
  }
  
  needWater() {
    if (this.currentWaterAmount < this.waterNeeded) {
      console.log(`The ${this.color} ${this.constructor['name']} needs water`); 
    } else {
      console.log(`The ${this.color} ${this.constructor['name']} doesnt need water`); 
    }
  }
}