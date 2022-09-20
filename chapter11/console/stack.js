function foo() {
    var stack = new Error('trace at foo').stack;
    console.log(stack);
    console.log('Stack trace printed');
}

function bar() {
    foo();
}

bar();
