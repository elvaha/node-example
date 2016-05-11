var express = require('express');

var app = express();

app.get('/hello.txt', function(req, res){
    res.send('Hello World');
});

var server = app.listen(8080, function(){
   console.log('listening on port 8080 from ' + __dirname); 
});