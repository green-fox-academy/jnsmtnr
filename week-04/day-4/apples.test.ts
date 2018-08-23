import { test } from 'tape';
import { Apple } from './apples'

test('testing getApple() method', (t) => {
  let apple: Apple = new Apple ();
  t.equal(apple.getApple(), 'apple');
  t.end();
});
