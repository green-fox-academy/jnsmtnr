var promise = Promise.reject(new Error('SECRET VALUE'));

promise.catch(error =>console.log(error.message));