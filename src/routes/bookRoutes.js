const express = require('express');
const bookRouter = express.Router();

function router(nav) {

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
          nav,
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
          nav,
          title: 'Library',
          book: books[id]
        }
      );
    });

  return bookRouter;
}

module.exports = router;
