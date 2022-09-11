var stream = require('stream');
var EventEmitter = require('events').EventEmitter;

console.log(new stream.Stream() instanceof EventEmitter);

console.log(new stream.Readable() instanceof EventEmitter);
console.log(new stream.Writable() instanceof EventEmitter);
console.log(new stream.Duplex() instanceof EventEmitter);
console.log(new stream.Transform() instanceof EventEmitter);
