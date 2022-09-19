const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0) {
        console.log('resolving the promise...');
        resolve('Hello, Positive :)');
    }
    reject(new Error('No place for negative here'))
});

const Fulfilled = (fulfilledValue) => console.log(fulfilledValue);
const Rejected = (error) => console.log(error);
myPromise.then(Fulfilled, Rejected);

myPromise.then((fulfilledValue) => {
    console.log(fulfilledValue);

}).catch(err => console.log(err));