var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/author');

//schema





mongoose.Promise = global.Promise;

app.listen(8000, function() {
    console.log("listening on port 8000");
})