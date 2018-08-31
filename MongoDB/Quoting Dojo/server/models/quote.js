const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuoteSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: 1},
    quote: {type: String, required: true, minlength: 5}
}, {timestamps: true})

mongoose.model('Quote', QuoteSchema);
