var path = require('path');

console.log(path.normalize('/foo/bar/..'));

console.log(path.normalize('/foo//bar/bas/..'));