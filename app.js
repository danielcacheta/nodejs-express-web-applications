const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // res.send('Hello from my library app');
  // res.sendFile(__dirname + '/views/index.html');
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index'); // rederizar uma view que chame 'index'
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${chalk.green(port)}`);
  debug(`Message from DEBUG: Listening on port ${chalk.green(port)}`);
});
