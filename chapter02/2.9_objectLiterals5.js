var foo = {
    bar: 123,
    bas: [
        { qux: 1 },
        { qux: 2 },
        { qux: 3 },
    ],
};
console.log(foo.bar);
console.log(foo.bas[0].qux);
console.log(foo.bas[2].qux);