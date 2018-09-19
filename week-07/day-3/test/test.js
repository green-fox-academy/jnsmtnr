const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'asdflkjh',
  database: 'bookstore',
  insecureAuth : true,
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});