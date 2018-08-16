function counter(n: number) {
  if (n < 1) {
    console.log(0);
  } else {
    console.log(n);
    counter(n - 1);
  }
}

counter(5);