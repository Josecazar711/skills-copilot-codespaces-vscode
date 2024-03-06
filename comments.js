// Create web server with express.js
// Create a route to handle comments
// Create a route to handle comments/:id
// Create a route to handle comments/:id/edit
// Create a route to handle comments/:id/delete

var express = require('express');
var app = express();

// Create a route to handle comments
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// Create a route to handle comments/:id
app.get('/comments/:id', function(req, res) {
  res.send('This is the comments page for id ' + req.params.id);
});

// Create a route to handle comments/:id/edit
app.get('/comments/:id/edit', function(req, res) {
  res.send('This is the comments page for id ' + req.params.id + ' and it is in edit mode');
});

// Create a route to handle comments/:id/delete
app.get('/comments/:id/delete', function(req, res) {
  res.send('This is the comments page for id ' + req.params.id + ' and it is in delete mode');
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});