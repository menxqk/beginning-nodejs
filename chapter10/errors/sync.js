var fs = require('fs');

function loadJSONSync(filename) {
    return JSON.parse(fs.readFileSync(filename));
}

console.log(loadJSONSync('good.json'));

try {
    console.log(loadJSONSync('absent.json'));
} catch (err) {
    console.log('absent.json error', err.message);
}

try {
    console.log(loadJSONSync('bad.json'));
} catch (err) {
    console.log('bad.json', err.message);
}