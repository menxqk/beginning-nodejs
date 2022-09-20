var http = require('http');
http.createServer(function (req, res) {
    res.write('Hello\n');
    res.foo.bar;
    res.end('World!');
}).listen(3000);
console.log("Server running on http://localhost:3000");
