'use strict';

const tape = require('tape');
const businessLogic = require('./poker');

tape.test('check if inputs are arrays', t => {
  t.equal(businessLogic.whichHandWins([1,2,3], 1), 'at least one hand isn\'t an array');
  t.end();
});

tape.test('check if both hands have five cards', t => {
  t.equal(businessLogic.whichHandWins([1,2,3,4,5],[1,2,3,4]), 'at least one hand has not five cards');
  t.end();
});

tape.test('are all cards valid?', t => {
  t.equal(businessLogic.whichHandWins(['121H', '3D', '5S', '9C', 'KD'],['2C', '3H', '4S', '8C', 'AH']), 'at least one the cards is not valid');
  t.end();
});

tape.test('are all cards valid?', t => {
  t.equal(businessLogic.whichHandWins(['1H', '3D', '5S', '9C', 'KD'],['2C', '3H', '4S', '8C', 'AH']), 'at least one the cards is not valid');
  t.end();
})

tape.test('are all cards valid?', t => {
  t.equal(businessLogic.whichHandWins(['2G', '3D', '5S', '9C', 'KD'],['2C', '3H', '4S', '8C', 'AH']), 'at least one the cards is not valid');
  t.end();
})