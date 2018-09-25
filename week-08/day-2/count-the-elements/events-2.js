'use strict';

const result = document.querySelector('.result');
const listItems = document.querySelectorAll('li');
const button = document.querySelector('button');

const listItemCounter = () => {
  result.innerHTML = `There are ${listItems.length} items`;
};

button.addEventListener('click', listItemCounter);