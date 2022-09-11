function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function (destination) {
    console.log(this.name, 'is walking to', destination);
}

var animal = new Animal('elephant');
animal.walk('melbourne');

function Bird(name) {
    Animal.call(this, name);
}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function (destination) {
    console.log(this.name, 'is flying to', destination);
}

var bird = new Bird('sparrow');
bird.walk('sydney');
bird.fly('melbourne');
