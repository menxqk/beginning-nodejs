function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
};


var inherits = require('util').inherits;

function Bird(name) {
    Animal.call(this, name);
}
inherits(Bird, Animal);

Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney');
bird.fly('melbourne');
