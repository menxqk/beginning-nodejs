function Animal() { }
Animal.prototype.walk = function () {
    console.log('walking');
}

function Bird() { }
Bird.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Bird,
        enumerable: false,
        writable: true,
        conigurable: true
    }
});

var bird = new Bird();
bird.walk();
console.log(bird.constructor == Bird);
