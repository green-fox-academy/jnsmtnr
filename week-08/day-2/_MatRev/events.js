const click = document.querySelector('.click');
const hover = document.querySelector('.hover');
const leave = document.querySelector('.leave');
const key = document.querySelector('.key');
const bubbling = document.querySelector('.bubbling');

const blur = document.querySelector('.blur');
const change = document.querySelector('.change');
const focus = document.querySelector('.focus');
const select = document.querySelector('.select');

const form = document.querySelector('.form');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
};

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const callback = (event) =>{
  event.target.style.backgroundColor = getRandomColor();
};

click.addEventListener('click', callback);
// click.onclick = callback;

hover.addEventListener('mouseenter', callback);

leave.addEventListener('mouseleave', callback);

document.addEventListener('keydown', (event) => {
  key.innerHTML = `<b>Keycode:</b> ${event.keyCode}`;
});

bubbling.addEventListener('click', (e) => {
  if (e.target.dataset.event == 'one') {
    console.log((e.target.innerHTML));
  } else if (e.target.dataset.event == 'two') {
    console.log((e.target.innerHTML));
  };
});

blur.addEventListener('blur', callback);
change.addEventListener('change', callback);
focus.addEventListener('focus', callback);
select.addEventListener('select', callback);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
})