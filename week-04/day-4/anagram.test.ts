//"The Meaning of Life" -> "The fine game of nil"

import { test } from 'tape';
import { anagramChecker } from './anagram';

test('Is it true?', (t) => {
  t.equal(anagramChecker("The Meaning of Life","The fine game of nil"),true);
  t.end();
});