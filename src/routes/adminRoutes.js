const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();

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


function router(nav) {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to the server');

          const db = client.db(dbName);
          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }

        client.close();
      }());
    });

  return adminRouter;
}

module.exports = router;
