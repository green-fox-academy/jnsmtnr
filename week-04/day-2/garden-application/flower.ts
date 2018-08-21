import { Plant } from "./plant";

export class Flower extends Plant {

  constructor(color: string) {
    super(color, 0.75, 5);
  }
}