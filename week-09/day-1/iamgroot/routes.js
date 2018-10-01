'use strict'

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  res.send(req.query.message);
});

module.exports = app;
