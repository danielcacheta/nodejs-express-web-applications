# NodeJS Express Web Application

This project is based on "Building Web Applications with Node.js and Express 4.0 (UPDATE)" course

It covers tools such as:
  - Express
  - EJS
  - MongoDB
  - ESLint

### Installation

This project requires [Node.js](https://nodejs.org/) v10+ to run.
It is recommended to download the latest stable version using [NVM](https://github.com/creationix/nvm)

It also requires [MongoDB](https://docs.mongodb.com/manual/installation/?jmp=footer&_ga=2.262015819.714428494.1554044703-575999709.1554044703#mongodb-community-edition) to save and retrieve data from localhost

Install the dependencies and devDependencies and start the server.

```sh
$ cd library
$ npm install -d
$ npm start
```

To run unit tests

```sh
$ cd library
$ npm install -d
$ npm test
```

### Populate local DB

Once the project is running and the server is listening on port 4000, access the [Admin URL](http://localhost:4000/admin) which will populate local database

Books inserted into database are listed on [Books URL](http://localhost:4000/books)