'use strict';
let API = document.querySelector('title').innerHTML;

fetch(`http://localhost:5000/api/${API}/`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let myBody = document.querySelector('body');
    res.row.forEach(book => {
      let testDiv = document.createElement('div');
      testDiv.innerHTML = book.book_name;
      myBody.appendChild(testDiv);
    });
  })