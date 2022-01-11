setTimeout(() => console.log('Timeout'));

Promise.resolve()
.then(() => console.log('promise'));
console.log("code");