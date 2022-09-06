function handleClientRequest(request) {
    makeDbCall(request.someInfo, function (result) {
        request.complete(result);
    });
}

function makeDbCall(info, callback) {
    console.log('makeDbCall - info:', info);
    setTimeout(function () {
        callback(info + 10);
    }, 3000);
}

var request = {
    someInfo: 55,
    complete: function (result) {
        console.log('complete:', result);
    },
};

handleClientRequest(request);

