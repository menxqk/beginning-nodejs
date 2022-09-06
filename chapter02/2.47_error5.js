function getConnection(callback) {
    var connection = {};
    try {
        // throw new Error('connection failed');

        callback(null, connection);
    } catch (e) {
        callback(error, null);
    }
}

getConnection(function (error, connection) {
    if (error) {
        console.log('Error:', error.message);
    } else {
        console.log('Connection succeeded:', connection);
    }
});