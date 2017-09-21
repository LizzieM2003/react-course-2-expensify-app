const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
  }, 2000);
});

console.log('Before');

promise.then(data => {
  console.log(data);
});

console.log('After');
