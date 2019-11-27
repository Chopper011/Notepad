//kod och connection för db.

//connection

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://LinneaMid:abQZg3BjOq1KqG8B@test-si7mo.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("sample_airbnb").collection("listingsAndReviews");
  // perform actions on the collection object

  
  client.close();
});


//läs in i db

//läs av collection och skriv ut note på sidan