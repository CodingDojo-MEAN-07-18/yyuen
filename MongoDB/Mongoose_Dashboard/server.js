var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat');

var CatSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1},
    color: {type: String, required: true, minlength:1},
    age: {type: Number, required: true, minlength:1}
}, {timestamps: true});

mongoose.model('Cat', CatSchema);
var Cat = mongoose.model('Cat');

mongoose.Promise = global.Promise;

// Schema

app.get('/', function(req,res){
    //get all cats
    Cat.find({}, function(err,cats){
        if (err){console.log(err); }
        else{
            res.render('index',{cats: cats});
        }
    })
});

app.get('/new', function(req, res){
    res.render('new');
})

app.post('/', function(req, res){
    console.log("POST DATA", req.body);

    var cat = new Cat({name: req.body.name, color: req.body.color, age: req.body.age});

    cat.save(function(err){

        if (err){
            console.log('something went wrong!');
        } else{
            console.log('successfully added a cat!');
            console.log(cat);
            res.redirect('/')
        }
    });
});

app.get('/:id', function(req, res){
    Cat.find({_id: req.params.id}, function(err,response){
        if (err){console.log(err);}
        res.render('show',{cat:response[0]});
    } );
} );

app.get('/edit/:id', function(req,res){
    Cat.find({_id:req.params.id}, function(err, response){
        if (err){console.log(err);}
        res.render('edit',{cat:response[0]});
    })
})

app.post('/:id', function(req,res){
    Cat.update({_id: req.params.id}, req.body, function(err,response){
        if (err) {console.log(err);}
        res.redirect('/');
    })
})

app.post('/delete/:id', function(req,res){
    Cat.remove({_id: req.params.id}, function(err,response){
        res.redirect('/')
    })
})

app.listen(8000, function(){
    console.log('listening on port 8000');
});

