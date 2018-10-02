const all = (promise1, promise2) => {
  return new Promise( (fulfill, reject) => {
    let counter = 0;
    let result = [];

    promise1.then( (response) => {
      result[0] = response;
      counter++;

      if (counter >= 2) {
        fulfill(result);
      }
    });

    promise2.then( (response) => {
      result[1] = response;
      counter++;

      if (counter >= 2) {
        fulfill(result);
      }
    });
  });
}

all(getPromise1(), getPromise2())
  .then(console.log);