var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(path.join(__dirname, 'public')));

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
