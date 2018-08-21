export class Plant {
  protected color: string;
  protected currentWaterAmount: number;
  protected waterAbsorb: number;
  protected waterNeeded: number;

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
      console.log(`This ${this.color} ${this.constructor['name']} needs water`); 
    } else {
      console.log(`This ${this.color} ${this.constructor['name']} doesnt need water`); 
    }
  }
}