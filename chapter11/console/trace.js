function foo() {
    console.trace('trace at foo');
    console.log('Stack trace printed');
}

function bar() {
    foo();
}

bar();
