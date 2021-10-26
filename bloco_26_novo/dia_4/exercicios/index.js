const express = require('express');

const movieController = require('./controllers/movieController');

const app = express();

app.use(express.json());

app.get('/movies', movieController.getAll);

app.get('/movies/:id', movieController.getById);

app.post('/movies', movieController.create);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});