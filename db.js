
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Lin: iqoIN5sqmJx6o2pt@note-3zsub.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });
MongoClient.connect(url, {useUnifiedTopology:true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db('Notebd');
    console.log("Connection created");
    dbo.createCollection("Note", function(err, res) {
        if (err) throw err;
        console.log("Collection created");
    });
    var titlename = req.body.Rubrik;
    var democontent = req.body.Text;

    var myobj = { name: req.body.Rubrik, note: req.body.Text };
    dbo.collection("Note").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });
    dbo.collection("Note").find({}, { projection: { _id: 0 }}).toArray( function(err, res) {
        if (err) throw err;
        console.log(res);
    });
    var query = { name: "Eyooo1"};
    dbo.collection("Note").find(query).toArray( function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});
