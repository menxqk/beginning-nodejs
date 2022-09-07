var http = require('http');
var fs = require('fs');

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}

var server = http.createServer(function (req, res) {
    console.log(req.method, req.url);

    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.method == 'GET' & req.url == '/require.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        fs.createReadStream('./require.js').pipe(res);
    } else if (req.method == 'GET' & req.url == '/client/app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        fs.createReadStream('./client/app.js').pipe(res);
    } else {
        send404(res);
    }
}).listen(3000);
console.log('server running on port 3000');