const express = require('express');
const app = express();

const PORT = 7000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`server is running, port ${PORT}`);
});