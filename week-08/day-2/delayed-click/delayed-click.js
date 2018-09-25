const button = document.querySelector('button');
const delayed = document.querySelector('#delayed-text');

button.addEventListener('click', () => {
  delayed.innerHTML = '';
  setTimeout( () => {
    delayed.innerHTML = '2 seconds ellapsed';
  }, 2000);
});