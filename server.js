// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/', function(request, response) {
  response.json({"unix":new Date(),
               "utc":new Date().toUTCString()});
});

app.get('/api/timestamp/:date_string', function(request, response) {
  if(new Date(request.params.date_string).toUTCString()=='Invalid Date'){
    response.json({"error":"Invalid Date"})
  } else response.json({"unix":new Date(request.params.date_string), 
                "utc":new Date(request.params.date_string).toUTCString()});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
