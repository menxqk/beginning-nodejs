var express = require('express');

var app = express();
app.get('/user/:userId', function (req, res) {
    res.send('userId: ' + req.params['userId']);
});
app.listen(3000);
