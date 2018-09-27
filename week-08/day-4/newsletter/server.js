const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const PORT = 9001;

server.use(bodyParser.urlencoded({extended: false}));

server.post('/signup', (req, res) => {
  res.send(`<h1>Thanks ${req.body.username}, we will send updates to ${req.body.email}</h1>`);
})

server.listen(PORT, () => console.log(`server running, port ${PORT} open`));