let buttonRight = document.getElementById('right');
let buttonLeft = document.getElementById('left');
let image = document.getElementById('main-image');

let imageID = 100;

ButtonRight.addEventListener("click", function() {
  imageID++;
  image.style = `background: url('images/test${(imageID%3+1)}.jpg')`
});

buttonLeft.addEventListener("click", function() {
  imageID--;
  image.style = `background: url('images/test${(imageID%3+1)}.jpg')`
});