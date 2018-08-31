const mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    get: function(req, res){
        Quote.find({}, function(err, quotes){
            if (err){
                console.log(err);
            }
        res.render('quotes',{quotes: quotes}); 
        })
    },
    post: function(req,res){
        console.log("POST DATA", req.body);
    
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
    
        quote.save(function(err){
    
            if (err){
                console.log('somehting went wrong');
    
                res.redirect('/');
            }
                else{
                    console.log('successfully added a quote!');
                    res.redirect('/quotes')
                }
            })
    }
}