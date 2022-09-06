console.log(null == undefined); // true
console.log(null === undefined); // false

if (!false) {
    console.log("false: falsy!");
}

if (!null) {
    console.log("null: falsy!");
}

if (!undefined) {
    console.log("undefined: falsy!");
}