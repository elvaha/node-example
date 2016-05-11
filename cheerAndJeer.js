var express = require('express');

var app = express();

app.get('/cheer.txt', function(req, res){
    res.end('you are awesome');
});

app.get('/jeer.txt', function(req, res){
    res.end('not so awesome anymore');
});

var server = app.listen(8080, function(){
   console.log('listening on port 8080'); 
});