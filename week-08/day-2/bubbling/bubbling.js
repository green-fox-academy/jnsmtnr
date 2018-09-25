const nav = document.querySelector('nav');
const image = document.querySelector('.img-inspector');

let imageProp = {
  xCoord: 0,
  yCoord: 0,
  size: 200,
};

const redrawImage = () => {
  image.style.backgroundPosition = `${imageProp.xCoord}px ${imageProp.yCoord}px`;
  image.style.backgroundSize = `${imageProp.size}%`;
};

nav.addEventListener('click', (e) => {
  if (e.target.dataset.action == 'move') {
    switch (e.target.dataset.direction) {
      case 'up':
        imageProp.yCoord -= 10;
        break;
      case 'down':
        imageProp.yCoord += 10;
        break;
      case 'left':
        imageProp.xCoord -= 10;
        break;
      case 'right':
        imageProp.xCoord += 10;
        break;
    }
  } else if (e.target.dataset.action == 'zoom') {
    switch (e.target.dataset.direction) {
      case 'in':
        imageProp.size += 20;
        break;
      case 'out':
        imageProp.size -= 20;
        break;
    }
  }
  redrawImage();
});