const alwaysThrows = () => {
  throw new Error('OH NOES');
}

const iterate = (int) => {
  console.log(int);
  return int + 1;
}

let promise = Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(error => console.log(error.message))