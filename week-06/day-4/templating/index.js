'use strict';

const express = require ('express');
const path = require ('path');
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  res.render('home', {
    title: 'Home page',
    header: 'GreenFoxAcademy',
  });
});

app.get('/products/:id', (req,res) => {
  res.render('home', {
    title: 'Product',
    header: req.params.id,
    withGoodbye: req.query.withGoodbye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});