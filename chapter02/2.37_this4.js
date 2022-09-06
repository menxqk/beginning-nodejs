function foo() {
    this.foo = 123;
    console.log('Is this global?:', this == global);
}

// without the new operator
foo();
console.log(global.foo);

// with new operator
var newFoo = new foo();
console.log(newFoo.foo);

