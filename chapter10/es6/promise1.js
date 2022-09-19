const myPromise = new Promise(function (resolve, reject) {
    if (Math.random() > 0) {
        resolve('Hello, I am a positive number!');
    } else {
        reject(new Error('I failed some time'));
    }
});

myPromise.then((promise_kept_message) => {
    console.log(promise_kept_message);
}, (error) => {
    // This function is invoked
    // when the Promise is rejected
    console.log(error);
});
