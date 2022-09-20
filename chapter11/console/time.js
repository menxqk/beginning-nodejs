console.time();
setTimeout(function () {
    console.timeEnd();
}, 500);

console.time('first');
setTimeout(function () {
    console.timeEnd('first');
}, 1000);

console.time('second');
setTimeout(function () {
    console.timeEnd('second');
}, 2000);
