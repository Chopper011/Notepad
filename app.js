var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.sendfile(__dirname + 'public/html/index.html')
});

var server = app.listen(4004, function(){
    console.log('Server is up and running ' + server.address().port);
});