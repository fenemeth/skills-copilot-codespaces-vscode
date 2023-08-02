// Create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set the port
var port = process.env.PORT || 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the public folder
app.use(express.static(__dirname + '/public'));

// Set the routes
app.use(require('./app/routes'));

// Start the server
app.listen(port, function () {
    console.log('Server is running on http://localhost:' + port);
});