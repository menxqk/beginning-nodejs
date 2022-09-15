var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use(timeout(5000))
    .use(function (req, res, next) {
        setTimeout(function () {
            next();
        }, 6000);
    })
    .use(function (req, res, next) {
        res.end('Done');
    })
    .listen(3000);
