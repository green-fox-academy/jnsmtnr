'use strict'
const mysql = require('mysql');
const express = require ('express');
const path = require ('path');
const app = express();
const PORT = 5000;

app.set('view engine', 'ejs');

app.use('/static', express.static('static'));

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/static/index.html');
})

app.get('/bookz', (req,res) => {
  res.render('index', {
    searching: 'bookz',
  });
});

app.get('/api/bookz/', (req,res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'asdflkjh',
    database: 'bookstore',
  });
  
  connection.connect((err) => {
    if (err) {
      console.log(err.message);
    };
  });
  
  connection.query('SELECT book_name FROM bookstore.book_mast;', (err, row) => {
    if (err) {
      console.log(err.message);
    } else {
      res.json({
        row
      })
    }
  })
  
  connection.end();
});

app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});