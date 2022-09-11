function Animal() { }
Animal.prototype.walk = function () {
    console.log('walking');
}

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);

var bird = new Bird();
bird.walk();
