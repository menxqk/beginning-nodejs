function loadItem(id, cb) {
    setTimeout(function () {
        cb(null, { id: id });
    }, 500);
}

function itemsLoaded(err, loadedItems) {
    console.log('Do something with:', loadedItems);
}

var async = require('async');
async.parallel([
    function (cb) {
        loadItem(1, cb);
    },
    function (cb) {
        loadItem(2, cb);
    }
], itemsLoaded);
