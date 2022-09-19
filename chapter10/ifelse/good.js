function alwaysAsync(arg, cb) {
    if (arg) {
        process.nextTick(function () {
            cb('cached data');
        });
    } else {
        setTimeout(function () {
            cb('loaded data');
        }, 500);
    }
}

alwaysAsync(true, function (data) {
    foo();
});
bar();

function foo() { console.log('foo'); }
function bar() { console.log('bar'); }
