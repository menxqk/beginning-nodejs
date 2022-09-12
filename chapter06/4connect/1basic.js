var connect = require('connect');
var http = require('http');

var app = connect();

http.createServer(app).listen(3000);
console.log('server running on port 3000');
