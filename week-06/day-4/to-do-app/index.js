'use strict';

const express = require ('express');
const path = require ('path');
const app = express();
const PORT = 3002;

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.render('home', {
    todoarray: todos
  });
});

app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});