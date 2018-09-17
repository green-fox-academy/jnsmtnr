const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling/', (req, res) => {
  if (req.query.input) {
    res.json({
      received: req.query.input,
      result: req.query.input * 2,
    });
  } else {
    res.json({
      error: "Please provide an input!"
    });
  };
});

app.get('/greeter/', (req, res) => {
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`,
    });
  } else if (!req.query.name) {
    res.json({
      error: "Please provide a name!",
    });
  } else if (!req.query.title) {
    res.json({
      error: "Please provide a title!",
    });
  };
});

app.get('/appenda/:id', (req, res) => {
  res.json({
    appended: req.params.id + 'a',
  });
});

app.post('/dountil/:action', jsonParser, (req, res) => {
  if (req.params.action === 'sum') {
    let result = 0;
    for (let i = 1; i <= req.body.until; i++) {
      result += i;
    };
    res.json({
      result: result,
    });
  } else if (req.params.action === 'factor') {
    let result = 1;
    for (let i = 1; i <= req.body.until; i++) {
      result *= i;
    };
    res.json({
      result: result,
    });
  };
})

app.post('/arrays/', jsonParser, (req, res) => {
  if (!req.body.what || !req.body.numbers) {
    res.json({
      error: "Please provide what to do with the numbers!"
    });
  } else {
  let result;
  if (req.body.what === 'sum') {
    result = 0;
    req.body.numbers.forEach(number => {
      result += number;
    });
  } else if (req.body.what === 'multiply') {
    result = 1;
    req.body.numbers.forEach(number => {
      result *= number;
    });
  } else if (req.body.what === 'double') {
    result = req.body.numbers.map(number => number * 2);
  };
  res.json({
    result: result,
  });
}});

app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});