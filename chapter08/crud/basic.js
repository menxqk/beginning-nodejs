var MongoClient = require('mongodb').MongoClient;

var demoPerson = { name: 'John', lastName: 'Smith' };
var findKey = { name: 'John' };
const uri = "mongodb://demo:demo@127.0.0.1:27017/demo";

MongoClient.connect(uri, function (err, client) {
    if (err) {
        throw err;
    }
    console.log('Successfully connected.');

    var closeClient = function () {
        client.close(true, function (err) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log('Disconnected');
        });
    }

    const database = client.db('demo');
    const collection = database.collection('people');

    collection.insertOne(demoPerson, function (err, result) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log('Inserted', result.insertedId);
        console.log('ID:', demoPerson._id);

        collection.find(findKey).toArray(function (err, results) {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            console.log('Found results:', results);

            collection.deleteMany(findKey, function (err, result) {
                if (err) {
                    console.log(err);
                    process.exit(1);
                }
                console.log('Deleted:', result.deletedCount);

                closeClient();
            });
        });
    });
});





















// var client = new MongoClient("mongodb://demo:demo@127.0.0.1:27017/demo");

// async function run() {
//     try {
//         const database = client.db('demo');
//         const people = database.collection('people');

//         var result = await people.insertOne(demoPerson);

//         var results = people.find(findKey)
//         if ((await results.countDocuments) === 0) {
//             console.log("no documents found!");
//             process.exit(1);
//         }
//         await results.forEach(r => {
//             console.log(r);
//         });

//         result = await people.deleteOne(findKey);
//         if (result.deletedCount === 1) {
//             console.log('Successfully deleted one document.')
//         }
//     } finally {
//         await client.close();
//     }
// };

// run().catch(e => {
//     console.log(e);
// });