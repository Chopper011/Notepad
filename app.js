var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static("public/html"));


app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/html/index.html');
})
app.get(__dirname + '/index.html', function(req, res){
    res.sendfile(__dirname + "public/html/index.html");
})
app.get(__dirname + '/note.html', function(req, res){
    res.sendfile(__dirname + "public/html/note.html");
})
app.get(__dirname + '/OmOss.html', function(req, res){
    res.sendfile(__dirname + "public/html/OmOss.html");
})

app.post('/note', urlendcoderParser, function(req, res){
   var data = {
       Rubrik: req.body.Rubrik,
       Text: req.body.Text
   }
   console.log(data);
   var dataString = JSON.stringify(data);
   res.end(JSON.stringify(data));
}) 
app.get('/note.html', function(req,res){
    res.sendFile(__dirname + '/public/html/note.html');
    dataString;
})

var server = app.listen(process.env.PORT, function(){
    console.log('Server is up and running ' + server.address().port);
})

