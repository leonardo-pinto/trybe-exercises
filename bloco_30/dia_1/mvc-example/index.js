const express = require('express');
const bodyParser = require('body-parser');
const authorController = require('./controller/authorController');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views/');

const port = 3000;

app.get('/authors/new', authorController.newAuthor);

app.get('/authors/:id', authorController.showAuthor)

app.get('/authors', authorController.listAuthors);

app.post('/authors', authorController.createAuthor);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))