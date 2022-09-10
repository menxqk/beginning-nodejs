var numbers = [1, 2, 3, 4, 5, 6];

var _ = require('underscore');
var odds = _.reject(numbers, function (num) {
    return num % 2 == 0;
});
console.log(odds);
