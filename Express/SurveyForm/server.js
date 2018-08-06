var express = require("express");
var session = require("express-session");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"))
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');


app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', function(request, response){
    response.render('index.ejs');
})

app.post('/data', function(request, response){
    request.session.data = request.body;
    response.redirect('/result');
})

app.get('/result', function(request, response){
    response.render('result.ejs',{'data':request.session.data})
})

app.listen(8000);