let scrollThreshold = 1500;

const random255 = () => {
  return Math.floor(Math.random() * 255);
}

const randomDivNumber = () => {
  return Math.floor(Math.random() * 10 + 10);
}

const randomColor = () => {
  return `rgb(${random255()},${random255()},${random255()})`;
}

const divInserter = (numberOfDivs) => {
  for (i = 0; i < numberOfDivs; i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = randomColor();
    document.body.appendChild(div);
  };
};

divInserter(randomDivNumber());

window.addEventListener('scroll', (event) => {
  console.log(event.srcElement.scrollingElement.scrollTop);
  if (event.srcElement.scrollingElement.scrollTop > scrollThreshold) {
    divInserter(10);
    scrollThreshold += 1500;
  }

})