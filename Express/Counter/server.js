
var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + "/static"))
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', function(request, response) {
    if (request.session.number == null){
        request.session.number = 0;
    }
    request.session.number += 1;
    response.render('index',{'number': request.session.number});
})

app.get('/add2', function(request, response){
    request.session.number += 1;
    response.redirect('/');
})

app.get('/reset', function(request, response){
    request.session.number += 0;
    response.redirect('/');
})
app.listen(8000);
