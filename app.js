var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/html/index.html');
})

app.post('/processpost', urlendcoderParser, function(req, res){
   var data = {
       firstname: req.body.firstname,
       lastname: req.body.lastname
   }
   console.log(data);
   res.end(JSON.stringify(data)) 
})

var server = app.listen(process.env.PORT, function(){
    console.log('Server is up and running ' + server.address().port);
})