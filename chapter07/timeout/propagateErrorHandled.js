var express = require('express');
var timeout = require('connect-timeout');

var app = express()
    .use(timeout(1000))
    .use(function (req, res, next) {
        setTimeout(function () {
            next();
        }, 2000);
    })
    .use(haltOnTimedout)
    .use(function (req, res, next) {
        res.end('Done');
    })
    .listen(3000);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}
