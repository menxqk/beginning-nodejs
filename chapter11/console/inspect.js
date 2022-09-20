var foo = {
    bar: 123,
    inspect: function () {
        return 'Bar is ' + this.bar;
    }
};

console.log(foo);
console.log(foo.inspect());