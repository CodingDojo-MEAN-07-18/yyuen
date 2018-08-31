const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');

const modelsPath = path.resolve('server', 'models');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/quoting');
mongoose.connection.on('connected', function(){
    console.log('connected to mongodb');
})

fs.readdirSync(modelsPath).forEach(function(file){
    if (reg.test(file)){
    require(path.join(modelsPath, file));
    }
})

