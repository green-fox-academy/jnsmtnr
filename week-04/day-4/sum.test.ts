import { test } from 'tape';
import { MyClass } from './sum';

test('Equal?', (t) => {
  let testClass: MyClass = new MyClass();
  let testList: number[] = [1, 2, 3];
  t.equal(testClass.sum(testList),testList);
  t.end();
});