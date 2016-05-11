var express = require('express');

var app = express();

app.get('/team/:name', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.send('you picked ' + req.params.name);
});


var server = app.listen(8080);