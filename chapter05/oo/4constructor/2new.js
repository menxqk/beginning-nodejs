function Foo() { }

var foo = new Foo();
console.log(foo.constructor.name);
console.log(foo.constructor === Foo);
