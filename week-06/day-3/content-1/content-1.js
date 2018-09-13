const lastParagraph = document.getElementsByClassName('animals')[0].innerHTML;
console.log(lastParagraph);

document.querySelectorAll('p').forEach(p => {
  p.innerHTML = lastParagraph;
});