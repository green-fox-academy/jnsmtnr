const button1 = document.querySelectorAll('button')[0];
const button2 = document.querySelectorAll('button')[1];

const logTime = (e) => {
  console.log(e.timeStamp);
};

let button1NotClicked = true;
button1.addEventListener('click', (event) => {
  if (button1NotClicked) {
    logTime(event);
    button1NotClicked = false;
    button1.innerHTML = 'I\'m clicked';
  }
});

const button2function = (event) => {
  logTime(event);
  button2.innerHTML = 'I\'m clicked too';
  button2.removeEventListener('click', button2function);
}

button2.addEventListener('click', button2function);