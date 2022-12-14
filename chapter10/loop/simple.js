function loadItem(id, cb) {
    setTimeout(function () {
        cb(null, { id: id });
    }, 500);
}

var loadedItems = [];

function itemsLoaded() {
    console.log('Do something with:', loadedItems);
}

function itemLoaded(err, item) {
    loadedItems.push(item);
    if (loadedItems.length == 2) {
        itemsLoaded();
    }
}

loadItem(1, itemLoaded);
loadItem(2, itemLoaded);
