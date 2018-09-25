const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed');
const createCandiesButton = document.querySelector('.create-candies');
const buyLollypopsButton = document.querySelector('.buy-lollypops');
const makeItRainButton = document.querySelector('.candy-machine');
const winner = document.querySelector('#winner');

let numberOfCandies = 0;
let numberOfLollypops = 3;
let candiesPerSecond = 0;
let doesItRainCandy = false;

const createCandies = () => {
  numberOfCandies++;
  candies.innerHTML = numberOfCandies;
};

const buyLollypops = () => {
  if (numberOfCandies >= 100) {
    numberOfLollypops++;
    numberOfCandies -= 100;
    candies.innerHTML = numberOfCandies;
    lollypops.innerHTML += '🍭';
    candiesPerSecond = candiesPerSecondCalculator();
    speed.innerHTML = candiesPerSecond;
  };
};

const autoCreateCandies = () => {
  numberOfCandies += candiesPerSecond;
  candies.innerHTML = numberOfCandies;

};

const didIWin = () => {
  if (numberOfCandies >= 10000) {
    winner.innerHTML = 'You won!';
    createCandiesButton.removeEventListener('click', createCandies);
    buyLollypopsButton.removeEventListener('click', buyLollypops);
    makeItRainButton.removeEventListener('click', makeItRain);
    clearInterval(ACC);
    clearInterval(DIV);
  }
}

const candiesPerSecondCalculator = () => {
  if (doesItRainCandy) {
    return (Math.floor(numberOfLollypops / 10)) * 10;
  } else {
    return Math.floor(numberOfLollypops / 10);
  }
};

const makeItRain = () => {
  doesItRainCandy = !doesItRainCandy;
  candiesPerSecond = candiesPerSecondCalculator();
  speed.innerHTML = candiesPerSecond;
}

createCandiesButton.addEventListener('click', createCandies);
buyLollypopsButton.addEventListener('click', buyLollypops);
makeItRainButton.addEventListener('click', makeItRain);

let ACC = setInterval(autoCreateCandies, 1000);
let DIV = setInterval(didIWin, 10);
