var express = require('express');
var expressSession = require('express-session');

var app = express()
    .use(expressSession({
        secret: 'my super secret sign key'
    }))
    .use('/home', function (req, res) {
        if (req.session.views) {
            req.session.views++;
        } else {
            req.session.views = 1;
        }
        res.end('Total views for you: ' + req.session.views);
    })
    .use('/reset', function (req, res) {
        delete req.session.views;
        res.end('Cleared ll your views');
    })
    .listen(3000);
