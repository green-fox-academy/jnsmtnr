let king = document.querySelector('#b325');
console.log(king);

let businessLamp = document.querySelectorAll('.big');
console.log(businessLamp[0]);
console.log(businessLamp[1]);

let conceitedKing = document.querySelector('.container').querySelectorAll('div');
conceitedKing.forEach(elem => {
  console.log(elem);
});

let noBusiness = document.querySelectorAll('div');
noBusiness.forEach(elem => {
  console.log(elem);
});