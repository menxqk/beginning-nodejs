var fs = require('fs');

function loadJSON(filename, cb) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            return cb(err);
        } else {
            try {
                var parsed = JSON.parse(data);
            } catch (err) {
                return cb(err);
            }
            return cb(null, parsed);
        }
    });
}

loadJSON('good.json', function (err, data) {
    if (err) {
        console.log('Error:', err.message);
    } else {
        console.log(data);
    }
});