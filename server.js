// set the variables 
var express = require('express');
var app = express();
var path = require('path');

// get the index.html file using res.sendFile()
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// sets the localhost to 8080 - http://localhost:8080
app.listen(8080);