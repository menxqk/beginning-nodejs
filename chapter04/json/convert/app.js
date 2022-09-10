var foo = {
    a: 1,
    b: 'a string',
    c: true
};

var json = JSON.stringify(foo);
console.log(json);
console.log(typeof json);
console.log();

var backToJs = JSON.parse(json);
console.log(backToJs);
console.log(backToJs.a);
