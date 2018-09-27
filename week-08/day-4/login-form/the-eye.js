const theEye = document.querySelector('#the-eye');
const passwordField = document.querySelector('#password');
const haha = document.querySelector('#haha');

theEye.addEventListener('click', () => {
  if (theEye.className == "fas fa-eye") {
    theEye.className = "fas fa-eye-slash";
    passwordField.type ="text";
  } else if (theEye.className == "fas fa-eye-slash") {
    theEye.className = "fas fa-eye";
    passwordField.type ="password";
  }
});

haha.addEventListener('click', () => {
  alert('Haha, you are screwed!');
})