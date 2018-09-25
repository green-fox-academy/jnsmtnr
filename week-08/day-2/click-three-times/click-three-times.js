const button = document.querySelector('button');
const delayed = document.querySelector('#delayed-text');

setTimeout( () => {
  let timesClicked = 0;
  button.addEventListener('click', () => {
    timesClicked++;
    if (timesClicked == 3) {
      delayed.innerHTML = '5 seconds elapsed and clicked 3 times';
    };
  });
}, 5000);