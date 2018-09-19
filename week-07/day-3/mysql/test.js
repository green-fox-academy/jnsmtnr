const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdflkjh',
  database: 'bookstore',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('show tables;', (err, row) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(row);
  }
})

connection.end();
