var MongoClient = require('mongodb').MongoClient;

var website = {
    url: 'http://www.google.com',
    visits: 0
};
var findKey = {
    url: 'http://www.google.com'
};

const uri = "mongodb://demo:demo@127.0.0.1:27017/demo"

MongoClient.connect(uri, function (err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    var database = client.db("demo");
    var collection = database.collection("websites");

    collection.insertOne(website, function (err, result) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        var done = 0;
        function onDone(err) {
            done++;
            if (done < 4) return;

            collection.find(findKey).toArray(function (err, results) {
                console.log("Visits:", results[0].visits);

                client.close()

                // collection.drop(function () {
                //     client.close();
                // });
            });
        }

        var incrementVisits = { "$inc": { 'visits': 1 } };
        collection.updateMany(findKey, incrementVisits, onDone);
        collection.updateMany(findKey, incrementVisits, onDone);
        collection.updateMany(findKey, incrementVisits, onDone);
        collection.updateMany(findKey, incrementVisits, onDone);
    });
});