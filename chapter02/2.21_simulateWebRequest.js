function longRunningOperation(callback) {
    setTimeout(callback, 3000);
}

function webRequest(request) {
    console.log('starting a long operation for request:', request.id);
    longRunningOperation(function () {
        console.log('ending a long operation for request:', request.id);
    });
}

webRequest({ id: 1 });
webRequest({ id: 2 });