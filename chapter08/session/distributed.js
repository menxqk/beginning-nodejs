var express = require('express');
var expressSession = require('express-session');
var MongoStore = require('connect-mongo');

var app = express()
    .use(expressSession({
        secret: 'my super secret sign key',
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: 'mongodb://demo:demo@127.0.0.1:27017/demo',
            ttl: 14 * 24 * 60 * 60,
        })
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