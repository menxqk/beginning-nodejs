var fs = require('fs');

function loadJSON(filename, cb) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            cb(err);
        } else {
            try {
                cb(null, JSON.parse(data));
            } catch (err) {
                cb(err);
            }
        }
    });
}

loadJSON('good.json', function (err, data) {
    console.log('out callback called');

    if (err) {
        console.log('Error:', err.message);
    } else {
        var foo;
        console.log(foo.bar);
    }
});