function parseJSON(req, res, next) {
    if (req.headers['content-type'] == 'application/json') {

        var readData = '';
        req.on('readable', function () {
            data = req.read();
            console.log(data);
            if (data) {
                readData += data
            }
        });

        req.on('end', function () {
            try {
                req.body = JSON.parse(readData);
                console.log(req.body);
            } catch (e) {
                console.log(e);
            }
            next();
        });
    } else {
        next();
    }
}

var connect = require('connect');

connect().use(parseJSON).use(function (req, res) {
    if (req.body) {
        res.end('JSON parsed!, value of foo: ' + req.body.foo);
    } else {
        res.end('no JSON detected!');
    }
}).listen(3000);

