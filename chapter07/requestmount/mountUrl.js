var express = require('express');

express()
    .use('/home', function (req, res, next) {
        console.log('first:', req.url);
        next();
    })
    .use(function (req, res, next) {
        console.log('second:', req.url);
        next();
    })
    .listen(3000);
