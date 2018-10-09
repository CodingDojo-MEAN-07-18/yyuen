const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/route');
const port = process.env.PORT || 8000;
const app = express();

app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.static(path.join(__dirname, 'dist/public')))
    .use('/api', api);

app.get('*', (req, res)=>{
    res.sendFile(path.resolve('dist/public/index.html'));
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));