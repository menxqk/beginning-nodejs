var express = require('express');
express()
    .use(function (req, res, next) {
        res.write('Hello\n');
        res.foo.bar;
        res.end('World!');
    })
    .use(function (err, req, res, next) {
        console.log('Error in server', err);
        res.end('Error!');
    })
    .listen(3000);
console.log("Server running on http://localhost:3000");
