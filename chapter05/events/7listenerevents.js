var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('removeListener', function (eventName, listenerFunction) {
    console.log(eventName, 'listener removed', listenerFunction);
});

emitter.on('newListener', function (eventName, listenerFunction) {
    console.log(eventName, 'listener added', listenerFunction);
});

function a() { };
function b() { };

emitter.on('foo', a);
emitter.on('foo', b);

emitter.removeListener('foo', a);
emitter.removeListener('foo', b);
