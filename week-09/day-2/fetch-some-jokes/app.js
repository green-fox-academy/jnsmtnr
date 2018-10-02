const div = document.querySelector('div');
const button1 = document.querySelector('#joke');
const button2 = document.querySelector('#clear');

button1.addEventListener('click', () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json(), error => {throw new Error(error)})
    .then(chuck => {
      let p = document.createElement('p');
      p.innerHTML = chuck.value.joke;
      div.appendChild(p);
    })
    .catch(error => console.log(error.message));
});

button2.addEventListener('click', () => {
  div.innerHTML = '';
});
