'use strict'
const mysql = require('mysql');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asdflkjh',
  database: 'reddit',
});

app.get('/hello/', (req, res) => {
  res.status(418).send('hello world');
});

app.get('/posts/', (req, res) => {
  connection.query('SELECT id,title,url,unix_timestamp(timestamp) as timestamp,score FROM posts;', (err, posts) => {
    if (err) {
      console.log(err.message);
    } else {
      res.status(200).json({
        posts
      });
    };
  });
});

app.post('/posts/', (req, res) => {
  let insertIntoSql = `INSERT INTO posts (title,url,timestamp,score) VALUES ('${req.body.title}', '${req.body.url}', CURRENT_TIMESTAMP(), 0)`;
  connection.query(insertIntoSql, (err, result) => {
    if (err) {
      res.json({ 'error': err.message });
      return;
    } else {
      connection.query(`SELECT id,title,url,unix_timestamp(timestamp) as timestamp,score FROM posts WHERE id = ${result.insertId}`, (err, result) => {
        res.status(200).json(
          result[0]
        );
      });
    };
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  let upvote = `UPDATE posts SET score = score+1 WHERE ID = ${req.params.id}`;
  connection.query(upvote, (err, result) => {
    if (err) {
      res.json({ 'error': err.message });
      return;
    }
    connection.query(`SELECT id,title,url,unix_timestamp(timestamp) as timestamp,score FROM posts WHERE id = ${req.params.id}`, (err, result) => {
      if (err) {
        res.json({ 'error': err.message });
        return;
      }
      res.status(200).json(result[0]);
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  let downvote = `UPDATE posts SET score = score-1 WHERE id = ${req.params.id}`;
  connection.query(downvote, (err, result) => {
    if (err) {
      res.json({ 'error': err.message });
      return;
    }
    connection.query(`SELECT id,title,url,unix_timestamp(timestamp) as timestamp,score FROM posts WHERE id = ${req.params.id}`, (err, result) => {
      if (err) {
        res.json({ 'error': err.message });
        return;
      }
      res.status(200).json(result[0]);
    });
  });
});

app.delete('/posts/:id', (req, res) => {
  let deletePost = `DELETE FROM posts WHERE id = ${req.params.id}`;
  connection.query(deletePost, (err, result) => {
    if (err) {
      res.json({ 'error': err.message });
      return;
    };
    res.status(200).json({ 'status': `post deleted with id = ${req.params.id}`});
  });
});

app.put('/posts/:id', (req,res) => {
  let modifyPost = `UPDATE posts SET title = '${req.body.title}', url = '${req.body.url}'  WHERE id = ${req.params.id}`;
  connection.query(modifyPost, (err,result) => {
    if (err) {
      res.json({ 'error': err.message});
      return;
    };
    connection.query(`SELECT id,title,url,unix_timestamp(timestamp) as timestamp,score FROM posts WHERE id = ${req.params.id}`, (err, result) => {
      if (err) {
        res.json({ 'error': err.message });
        return;
      }
      res.status(200).json(result[0]);
    }); 
  })
})

app.listen(PORT, () => {
  console.log(`the new reddit is ready to take his rightful position, port ${PORT}`);
});