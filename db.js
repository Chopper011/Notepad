//kod och connection för db.

//connection

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://LinneaMid:abQZg3BjOq1KqG8B@test-si7mo.azure.mongodb.net/test?retryWrites=true&w=majority";
const DATABASE_NAME = "sample_airbnb";   

var database, collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        throw error;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("listingsAndReviews");
    console.log("Connected to `" + DATABASE_NAME + "`!");
});

//läs in i db

app.post("/note", (req, res) => {
    collection.insert(req.body, (error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result.result);
    });
});

//läs av collection och skriv ut note på sidan

app.get("/note", (req, res) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return res.status(500).send(error);
        }
        res.send(result);
    });
});