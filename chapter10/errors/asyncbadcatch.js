var fs = require('fs');
function loadJSON(filename, cb) {
    fs.readFileSync(filename, function (err, data) {
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

loadJSON('bad.json', function (err, data) {
    if (err) console.log('bad.json error', err.message);
    else console.log(data);
});
