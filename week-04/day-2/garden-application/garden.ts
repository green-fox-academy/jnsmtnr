import { Flower } from "./flower";
import { Tree } from "./tree";

class Garden {
  flowers: Flower[];
  trees: Tree[];

  constructor() {
    this.flowers = [];
    this.trees = [];
  }

  addFlower(flower: Flower) {
    this.flowers.push(flower);
  }

  addTree(tree: Tree) {
    this.trees.push(tree);
  }

  myGarden() {
    this.flowers.forEach(function(flower) {
      flower.needWater();
    });
    this.trees.forEach(function(tree) {
      tree.needWater();
    })
  }
  waterAll(water: number) {
    let needWater: any[] = [];
    this.flowers.forEach(function(flower) {
      if (flower.currentWaterAmount < flower.waterNeeded) {
        needWater.push(flower);
      }
    })
    this.trees.forEach(function(tree) {
      if (tree.currentWaterAmount < tree.waterNeeded) {
        needWater.push(tree);
      }
    })
    needWater.forEach(function(plant) {
      plant.water(water/needWater.length);
    })
    console.log('Watering with ' + water);
    this.myGarden();
  }
  
}

let flower1: Flower = new Flower('yellow');
let flower2: Flower = new Flower('blue');
let tree1: Tree = new Tree ('purple');
let tree2: Tree = new Tree ('orange');

let garden: Garden = new Garden();

garden.addFlower(flower1);
garden.addFlower(flower2);
garden.addTree(tree1);
garden.addTree(tree2);

garden.myGarden();
console.log('');
garden.waterAll(40);
console.log('');
garden.waterAll(70);