var promise = new Promise((fulfill, reject) => {
  setTimeout(() => {
    reject(new Error('REJECTED!'));
  }, 300);
})
.then(console.log, (error)=> {
  onReject(error)
})

function onReject (error) {
  console.log(error.message);
}
