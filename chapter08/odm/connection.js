var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', function (err) {
    console.log('error...')
    throw err;
});
db.once('open', function callback() {
    console.log('connected!');
    db.close();
});

mongoose.connect("mongodb://demo:demo@127.0.0.1:27017/demo");
