var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task');

//schema

var TaskSchema = new mongoose.Schema({
    title: {
        type: String, required: [true, "Title is required!"],
        description : String, required: [true, "Description is required!"],
        completed: Boolean, required: [true, "Is the task completed?"]

    }
}, {timestamps: true});

mongoose.model('Task', TaskSchema);
var Task = mongoose.model('Task');

//route

app.get('/task', function(req, res){
    Task.find({})
        .then(task => res.json(task))
        .catch(err => res.json(err));
})

app.get('/task/:id/', function(req,res){
    Task.findOne({_id: req.params.id})
        .then(task => res.json(task))
        .catch(err => res.json(err));
})

app.post('/task', function(req,res){
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err));
})

app.put('/task/:id', function(req,res){
    Task.update({_id:req.params.id})
        .then(task => res.json(task))
        .catch(err => res.json(err));
})

app.delete('/task/:id',function(req, res){
    Task.findOne({_id: req.params.id})
        .then(task => res.json(task))
        .catch(err => res.json(err));
})

mongoose.Promise = global.Promise;

app.listen(8000, function() {
    console.log("listening on port 8000");
})