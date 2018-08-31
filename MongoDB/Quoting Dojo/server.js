var express = require('express');
var app = express();
// var mongoose = require('mongoose');
var session = require('express-session')
// mongoose.connect('mongodb://localhost/quoting');

// var QuoteSchema = new mongoose.Schema({
//     name : {type: String, required: true, minlength: 1},
//     quote: {type: String, required: true, minlength: 5}
// }, {timestamps: true});

// mongoose.model('Quote', QuoteSchema);

// var Quote = mongoose.model('Quote');

// mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));



var path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));

app.set('view engine', 'ejs');

require('./server/config/database')
require('./server/config/routes.js')(app);

app.listen(8000, function(){
    console.log('listening on port 8000');
})