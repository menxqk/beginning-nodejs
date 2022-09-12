function auth(req, res, next) {
    console.log(req.headers);
    function send401() {
        res.writeHead(401, { 'WWW-Authenticate': 'Basic' });
        res.end();
    }

    var authHeader = req.headers.authorization;
    if (!authHeader) {
        send401();
        return;
    }

    var auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    if (user == 'foo' && pass == 'bar') {
        next();
    } else {
        send401();
    }
}

var connect = require('connect');

connect()
    .use(auth)
    .use(function (req, res) { res.end('Authorized!'); })
    .listen(3000);
