const attachTitle = (input) => {
  return 'DR. ' + input;
};

let promise = new Promise((fulfilled, rejected) => {
  fulfilled('MANHATTAN');
});

promise.then(attachTitle).then(console.log);