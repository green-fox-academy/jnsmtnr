function hello(n) {
  console.log('hello'+n);
  hello(n+1);
}

hello(0);