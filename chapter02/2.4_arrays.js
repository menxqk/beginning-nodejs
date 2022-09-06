var foo = [];

foo.push(1);
console.log(foo);

foo.unshift(2);
console.log(foo);

console.log(foo[0]);

foo.shift();

foo.push(2);
foo.unshift(0);
foo.push(3);

console.log(foo);