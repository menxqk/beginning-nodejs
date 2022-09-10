var now = new Date();
console.log('now is:', now);

var milliseconds = now.getMilliseconds();
var seconds = now.getSeconds();
var hours = now.getHours();
var minutes = now.getMinutes();
var date = now.getDate();
var month = now.getMonth();
var year = now.getFullYear();

var dateCopy = new Date(year, month, date, hours, minutes, seconds, milliseconds);
console.log('copy is:', dateCopy);

console.log('1 jan 2014:', new Date(2014, 0, 1));
console.log('1 jan 2014 9am:', new Date(2014, 0, 1, 9));