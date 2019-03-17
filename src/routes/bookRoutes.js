const express = require('express');
const bookRouter = express.Router();

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
    res.render(
      'bookListView',
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

bookRouter.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    res.render(
      'bookView',
      {
        nav: [
          { link: '/books', title: 'Books' },
          { link: '/authors', title: 'Authors' }
        ],
        title: 'Library',
        book: books[id]
      }
    );
  });

module.exports = bookRouter;
