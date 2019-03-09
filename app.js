var express = require('express');
var chalk = require('chalk');
var debug = require('debug')('app');
var morgan = require('morgan');
var path = require('path');

var app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    // res.send('Hello from my library app');
    // res.sendFile(__dirname + '/views/index.html');
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.listen(3000, () => {
    console.log(`Listening on port ${chalk.green("3000")}`)
    debug(`Message from DEBUG: Listening on port ${chalk.green("3000")}`)
})