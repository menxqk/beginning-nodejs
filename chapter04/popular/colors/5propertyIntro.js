var foo = {};

foo.__defineGetter__('bar', function () {
    console.log('get bar was called!');
});

foo.__defineSetter__('bar', function (val) {
    console.log('set bar was called with value:', val);
});

foo.bar;
foo.bar = 'something';
