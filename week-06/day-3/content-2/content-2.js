const list = ['apple', 'banana', 'cat', 'dog'];

const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
  li[i].innerHTML = list[i];
}

document.querySelector('ul').setAttribute('class', 'limegreen');