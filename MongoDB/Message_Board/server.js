var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './static')));
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/messageboard');

//Schema

var MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Message must have an author"], minlength: [1, "Author must have at least 1 charactor" ]},
    message: {type: String, required: [true,"Message must have content"], minlength: [1, "Message must have at least 1 charactor"]},
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'}]
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
var Message = mongoose.model('Message');

var CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Comment must have an author"], minlength: [1, "Author must have at least 1 charactor" ]},
    comment: {type: String, required: [true,"Comment must have content"], minlength: [1, "Comment must have at least 1 charactor"]},
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'}]
}, {timestamps: true});

mongoose.model('Comment', CommentSchema);
var Comment = mongoose.model('Comment');

mongoose.Promise = global.Promise;

// Displaying all messages 

app.get('/', function(req, res){
    Message.find({}, function(err, messages){
        if (err){console.log(err);}
        else{res.render('index', {messages: messages});}
    });
});

//Saving data into database

app.post('/', function(req, res){
    console.log("POST MESSAGE", req.body);

    var new_message = new Message({name: req.body.name, message: req.body.message});

    new_message.save(function(err){
        if (err){console.log("something went wrong!");}
        else{
            console.log("sucessfully added a message");
            console.log(new_message);
            res.redirect("/");
        };
    });
});


app.post('/comment', function(req, res){
    console.log("POST COMMENT");

    var new_comment = new Comment({name: req.body.name, comment: req.body.comment});

    new_comment.save(function(err){
        if (err){console.log("something went wrong!");}
        else{
            console.log("sucessfully added a comment!");
            Message.findOneAndUpdate({_id: req.body.message_id}, {$push:{comments:new_comment}}, function(err, new_comment){
                if (err){ console.log(err);}
                else{
                    res.redirect('/');
                }
            })
        }
    })

})
app.listen(8000, function(){
    console.log('listening on port 8000');
});