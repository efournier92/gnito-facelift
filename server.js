var express = require('express');
var app     = express();
var path    = require('path');
var $       = require('jquery');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) { 
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
console.log('Check out port 1337');

