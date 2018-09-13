const imgURL = document.getElementsByTagName('img')[0].getAttribute('src');
console.log(imgURL);

document.getElementsByTagName('img')[0].setAttribute('src','https://pbs.twimg.com/profile_images/735141315847979009/wRSudPRg_400x400.jpg');

document.getElementsByTagName('a')[0].setAttribute('href','https://www.greenfoxacademy.com');

document.getElementsByClassName('this-one')[0].innerHTML = "Don't click me!";
