const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'))

app.get('/ping',(req, res) => {
  // res.send('pong');
  res.json({
    message: 'pong',
    message2: 'pongopongo'
  });
});

app.get('/',(req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});