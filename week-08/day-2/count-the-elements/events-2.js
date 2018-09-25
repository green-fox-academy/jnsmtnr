'use strict';

const result = document.querySelector('.result');
const listItems = document.querySelectorAll('li');

const button = document.querySelector('button');

button.addEventListener('click', () => {
  result.innerHTML = `There are ${listItems.length} items`;
});