'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
  request(app)
    .get('/groot')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.same(res.body.error, 'I am Groot!');
      t.end();
    })
});

test('groot endpoint with message', (t) => {
  request(app)
    .get('/groot?message=hello')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.deepEqual(res.body, {received: 'hello', translated: 'I am Groot!'});
      t.end();
    })
});

test('yondu endpoint', (t) => {
  request(app)
    .get('/yondu')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.same(res.body.error, 'No or wrong parameters');
      t.end();
    })
});