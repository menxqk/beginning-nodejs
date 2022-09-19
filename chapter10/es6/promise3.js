function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) * min);
}

var myPromise = new Promise((resolve, reject) => {
    var num = getRandomInt(1, 10);
    if (num > 5) {
        resolve(`resolving: ${num}`);
    } else {
        reject(new Error(`rejecting: ${num}`));
    }
});

myPromise.then((kept_message) => {
    console.log(kept_message)
}, (error) => {
    console.log('error received...throwing it')
    throw error;
}).catch(error => console.log('error: ', error));

myPromise.then((ok_message) => {
    console.log(`ok_message: ${ok_message}`);
}).catch(error => console.log(`-------Another error: ${error}`));
