'use strict'

const express = require('express');
const app = express();

let caliber25 = 0;
let caliber30 = 0;
let caliber50 = 0;
let shipstatus = "empty"
let ready = false;

app.get('/groot', (req, res) => {
  if (req.query.message) {
    res.status(200).json({
      received: req.query.message,
      translated: 'I am Groot!',
    });
  } else {
    res.status(400).json({
      error: 'I am Groot!',
    })
  }
});

app.get('/yondu', (req, res) => {
  if (req.query.distance && req.query.time == 0) {
    res.status(400).json({
      error: 'Cannot divide by zero'
    });
  } else if (req.query.distance && req.query.time) {
    res.status(200).json({
      distance: req.query.distance,
      time: req.query.time,
      speed: (req.query.distance / req.query.time).toString(),
    });
  } else {
    res.status(400).json({
      error: 'No or wrong parameters',
    });
  };
});

app.get('/rocket', (req, res) => {
  if (req.query.caliber && req.query.amount) {
    let received = req.query.caliber;
    let amount = Number(req.query.amount);
    switch (received) {
      case '.50':
        caliber50 += amount;
        break;
      case '.30':
        caliber50 += amount;
        break;
      case '.25':
        caliber50 += amount;
        break;
    };
    let shipstatusNumber = (caliber25 + caliber30 + caliber50) / 125;
    if (shipstatusNumber < 100) {
      shipstatus = `${shipstatusNumber}%`;
    } else if (shipstatusNumber === 100) {
      shipstatus = 'full';
    } else if (shipstatusNumber > 100) {
      shipstatus = 'overloaded';
    }
    if (shipstatus == 'full') {
      ready = true;
    } else {
      ready = false;
    }
    res.status(200).json({
      "received": received,
      "amount": amount,
      "shipstatus": shipstatus,
      "ready": ready
    })
  } else {
    res.status(400).json({
      "caliber25": caliber25,
      "caliber30": caliber30,
      "caliber50": caliber50,
      "shipstatus": shipstatus,
      "ready": ready,
    })
  };
});

module.exports = app;
