import { test } from 'tape';

class Apple {
  getApple() {
    return 'apple';
  }
}

test('testing getApple() method', (t) => {
  let apple: Apple = new Apple ();
  t.equal(apple.getApple(), 'apple');
  t.end();
});

