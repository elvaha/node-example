var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
    {text : 'awesome tweet', time : new Date().getTime() - 12000},
    {text : 'Another awesome tweet apears', time : new Date().getTime() - 10500},
    {text : 'A wild tweet has fled', time : new Date().getTime()}
]

app.use(express.static(__dirname + '/newPublic'));

app.get('/tweet', function(request, response){
    response.type('json');
    response.end(JSON.stringify({tweets : tweets}));
});


app.post('/tweet', function(request, response){
    var newTweet = {text : request.body.tweet, time : new Date().getTime()};
    
    tweets.push(newTweet);
    response.type('json');
    response.end(JSON.stringify(newTweet));
});


var server = app.listen(8080, function(){
    console.log('server is up and running')
})