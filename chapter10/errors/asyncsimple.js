var fs = require('fs');

function loadJSON(filename, cb) {
    fs.readFile(filename, function (err, data) {
        if (err) cb(err);
        else cb(null, JSON.parse(data));
    });
}

loadJSON('bad.json', function (err, data) {
    if (err) console.log('bas.json error', err.message);
    else console.log(data);
});

