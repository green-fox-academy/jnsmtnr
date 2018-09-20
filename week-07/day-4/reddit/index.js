'use strict'
const mysql = require('mysql');
const express = require ('express');
const path = require ('path');
const app = express();
const PORT = 6000;

app.listen(PORT, () => {
  console.log(`the new reddit is ready to take his rightful position, port ${PORT}`);
});