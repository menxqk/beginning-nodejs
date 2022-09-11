var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.emit('error', new Error('Something terrible happened'));

console.log('this line never executes');
