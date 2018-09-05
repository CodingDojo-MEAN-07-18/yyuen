
var express = require('express');
app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(8000);