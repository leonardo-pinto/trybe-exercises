const express = require('express');
const app = express();
const port = 3000;

const Author = require('./models/Author');

const middlewares = require('./middlewares/middlewares');

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Author not found'});

  res.status(200).json(author);
});

// app.post('/authors', async (req, res) => {
//   const { first_name, middle_name, last_name } = req.body;

//   if (!Author.isValid(first_name, middle_name, last_name)) {
//     return res.status(400).json({ message: 'Data is not valid'});
//   }

//   await Author.create(first_name, middle_name, last_name);

//   res.status(201).json({ message: 'Author created successfully!'})
// });

app.post('/authors', middlewares.isValidMiddleWare, async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Data is not valid'});
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author created successfully with middleware!'})
});

app.listen(port, () => console.log(`Example app listening on port ${port} !`))