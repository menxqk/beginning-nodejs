var foo = {
    bar: 123,
};

function bas() {
    if (this === global) {
        console.log('called from global');
    }
    if (this === foo) {
        console.log('called from foo');
    }
}

// global context
bas();

// from foo
foo.bas = bas;
foo.bas();