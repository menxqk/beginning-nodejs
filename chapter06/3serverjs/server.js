var http = require('http');
var fs = require('fs');
var path = require('path');

function send404(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.write('Error 404: Resource not found.');
    response.end();
}

var mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text;html'
};

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var fileurl;
        if (req.url == '/') {
            fileurl = '/index.html';
        } else {
            fileurl = req.url;
        }
        var filepath = path.resolve('./public' + fileurl);

        var fileExt = path.extname(filepath);
        var mimeType = mimeLookup[fileExt];

        if (!mimeType) {
            send404(res);
            return;
        }

        fs.exists(filepath, function (exists) {
            if (!exists) {
                send404(res);
                return
            };

            res.writeHead(200, { 'Content-Type': mimeType });
            fs.createReadStream(filepath).pipe(res);
        });
    } else {
        send404(res);
    }
}).listen(3000);
console.log('server running on port 3000');
