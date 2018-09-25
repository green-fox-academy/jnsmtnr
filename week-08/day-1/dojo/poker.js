'use strict';

const vd = require('./validCard');

function whichHandWins(handOne, handTwo) {
  if (!Array.isArray(handOne) || !Array.isArray(handTwo)) {
    return 'at least one hand isn\'t an array';
  };
  if (handOne.length != 5 || handTwo.length != 5) {
    return 'at least one hand has not five cards';
  };
  if (handOne.some(vd.validCard) || handTwo.some(vd.validCard)) {
    return 'at least one the cards is not valid';
  };
  return 'ok';
};

module.exports = { whichHandWins };
