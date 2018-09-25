'use strict';

const h1 = document.querySelector('h1');

const lastKey = (event) => {
  h1.innerHTML = `Last pressed key code is: ${event.keyCode}`;
};

document.onkeyup = lastKey;