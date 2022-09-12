var https = require('https');

var fs = require('fs');
var options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

var connect = require('connect');

var app = connect();

https.createServer(options, app).listen(3000);
