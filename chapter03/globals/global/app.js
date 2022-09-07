console.log(console === global.console);
console.log(setTimeout === global.setTimeout);
console.log(process === global.process);

require('./addToGlobal');
console.log(something);