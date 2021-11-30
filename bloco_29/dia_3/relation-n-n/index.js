// index.js
const express = require('express');
const bodyParser = require('body-parser');

const { Book, User } = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/usersbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);

  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/createuser', async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
  
    const newUser = await User.create({ firstName, lastName, age });


    return res.status(200).json(newUser);

  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.post('/createbook', async (req, res) => {
  try {
    const { name, releaseYear, numberPages } = req.body;
  
    const newBook = await Book.create({ name, releaseYear, numberPages });


    return res.status(200).json(newBook);

  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;