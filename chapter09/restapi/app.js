var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var db, itemsCollection;
MongoClient.connect('mongodb://demo:demo@127.0.0.1:27017/demo', function (err, client) {
    if (err) {
        throw err;
    }

    // Connected!
    db = client.db("demo")
    itemsCollection = db.collection("items")

    app.listen(3000);
    console.log('Listening on port 3000');
});

var router = express.Router();
router.use(bodyParser.json())

router.route('/')
    .get(function (req, res, next) {
        itemsCollection.find().toArray(function (err, docs) {
            res.send({
                status: 'Items found',
                items: docs
            });
        });
    })
    .post(function (req, res, next) {
        var item = req.body;
        itemsCollection.insertOne(item, function (err, result) {
            res.send({
                status: 'Item added',
                itemId: item._id
            });
        });
    });

router.route('/:id')
    .delete(function (req, res, next) {
        var id = req.params['id'];
        var lookup = { _id: new mongodb.ObjectId(id) };
        itemsCollection.deleteOne(lookup, function (err, result) {
            res.send({ stats: 'Item cleared' });
        });
    });

app.use('/todo', router);