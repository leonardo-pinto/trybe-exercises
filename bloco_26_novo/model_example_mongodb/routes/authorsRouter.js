const router = require('express').Router();
const Author = require('../models/Author');

router.get('/', async (_req, res) => {
  const authors = await Author.getAll()

  return res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const authorById = await Author.findById(id);

  if (!authorById) return res.status(404).json({ message: 'Author not found'});

  return res.status(200).json(authorById);
})

router.post('/', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Author created successfully with middleware!'})
});

module.exports = router;
