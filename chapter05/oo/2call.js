var foo = {};
var bar = {};

function func(val) {
    this.val = val;
}

func.call(foo, 123);
func.call(bar, 456);

console.log(foo);
console.log(bar);
