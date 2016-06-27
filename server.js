var express = require('express');
var app     = express();
var path    = require('path');
var $       = require('jQuery');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('owl-carousel', express.static(__dirname + '/node_modules/owl-carousel-2/'));

app.get('/', function(req, res) { 
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(1337);
console.log('Check out port 1337');

var adminRouter = express.Router();

adminRouter.get('/', function(req, res) {
  res.send('I am the dashboard');              
});

adminRouter.get('/users', function(req, res) {
  res.send('I show all the users!');
});

adminRouter.get('/posts', function(req, res) {
  res.send('I show all the posts!');
});

app.use('/admin', adminRouter);
