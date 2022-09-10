var foo = {};
var bar = { 'foo': foo };

console.log(JSON.stringify(bar));

foo.toJSON = function () { return "custom" };
console.log(JSON.stringify(bar));
