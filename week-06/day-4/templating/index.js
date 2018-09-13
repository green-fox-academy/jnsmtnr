'use strict';

const express = require ('express');
const path = require ('path');
const app = express();
const PORT = 3001;

app.get('/', (req,res) => {
  res.send('hello there');
});

app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});