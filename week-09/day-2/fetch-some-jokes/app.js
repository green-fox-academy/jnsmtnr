const div = document.querySelector('div');
const button = document.querySelector('button');

button.addEventListener('click', (event)=> {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(chuck => console.log(chuck.value.joke));
})