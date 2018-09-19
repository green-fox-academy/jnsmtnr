const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdflkjh',
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('show databases;', (err,row) => {
  if (err) {console.log(err);}
  console.log(row);
})

connection.end();
