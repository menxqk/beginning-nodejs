var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastName: 'Smith' };
var findKey = { name: 'John' };
var updates = { $set: { lastName: "Martin" } };

const uri = "mongodb://demo:demo@127.0.0.1:27017/demo";

MongoClient.connect(uri, function (err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    const database = client.db("demo");
    const collection = database.collection("people");

    collection.insertOne(demoPerson, function (err, result) {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        collection.updateOne(findKey, updates, function (err, result) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log("Updated:", result.modifiedCount);

            collection.find(findKey).toArray(function (err, results) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log(results);

                collection.drop(function (err) {
                    if (err) {
                        console.log(err);
                        process.exit(1);
                    }
                    client.close();
                });
            })
        });

    });
})