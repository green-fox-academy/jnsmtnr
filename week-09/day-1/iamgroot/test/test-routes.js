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
      t.deepEqual(res.body, { received: 'hello', translated: 'I am Groot!' });
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

test('yondu endpoint with parameters', (t) => {
  request(app)
    .get('/yondu?distance=100&time=10')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.deepEqual(res.body, {
        distance: '100',
        time: '10',
        speed: '10',
      });
      t.end();
    })
});

test('yondu endpoint with parameters', (t) => {
  request(app)
    .get('/yondu?distance=100&time=0')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.deepEqual(res.body, {
        error: 'Cannot divide by zero',
      });
      t.end();
    })
});

test('rocket endpoint without parameters', (t) => {
  request(app)
    .get('/rocket')
    .expect(400)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.deepEqual(res.body, {
        "caliber25": 0,
        "caliber30": 0,
        "caliber50": 0,
        "shipstatus": "empty",
        "ready": false
      });
      t.end();
    });
});

test('rocket endpoint with parameters', (t) => {
  request(app)
    .get('/rocket?caliber=.50&amount=5000')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      t.error(err, 'No error');
      t.deepEqual(res.body, {
        "received": ".50",
        "amount": 5000,
        "shipstatus": "40%",
        "ready": false
      });
      t.end();
    });
});