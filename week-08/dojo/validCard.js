'use strict';

function validCard(card) {
  if (card.length != 2) {
    return true;
  }
  let firstChar = /[2-9TJQKA]/;
  let secondChar = /[CDHS]/;
  if (firstChar.test(card[0])) {
    return true;
  };
  if (secondChar.test(card[1])) {
    return true;
  }
  return false;
}

module.exports = { validCard };