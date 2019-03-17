const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const bookRouter = express.Router();

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

const books = [
  {
    title: 'Title 1',
    genre: 'Genre 1',
    author: 'Author 1',
    read: false
  },
  {
    title: 'Title 2',
    genre: 'Genre 1',
    author: 'Author 2',
    read: false
  },
  {
    title: 'Title 3',
    genre: 'Genre 2',
    author: 'Author 3',
    read: false
  },
  {
    title: 'Title 4',
    genre: 'Genre 3',
    author: 'Author 1',
    read: false
  },
];

bookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        nav: [
          { link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }
        ],
        title: 'Library',
        books
      }
    );
  });

bookRouter.route('/single')
  .get((req, res) => {
    res.send('hello single book');
  });

app.use('/books', bookRouter);
app.get('/', (req, res) => {
  res.render(
    'index',
    {
      nav: [
        { link: '/books', title: 'Books' },
        { link: '/authors', title: 'Authors' }
      ],
      title: 'Library'
    }
  ); // rederizar uma view que chame 'index'
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${chalk.green(port)}`);
  debug(`Message from DEBUG: Listening on port ${chalk.green(port)}`);
});
