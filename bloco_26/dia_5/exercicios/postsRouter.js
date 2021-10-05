const router = require('express').Router();

const posts = [
  { id: 1, author: 'José Neto', comment: 'Mais um dia de Sol !' },
  { id: 2, author: 'Antonio Neto', comment: 'Hoje o dia está maneiro!' },
  { id: 3, author: 'Rodrigo Garga', comment: 'To aqui também' },
]


router.get('/:id', (req, res) => {
  const { id } = req.params
  if (!id) return res.status(404).json({ "message": "post not found" })

  const postById = posts.find((post) => post.id === Number(id));
  res.status(200).json(postById);
})

router.get('/', (req, res) => {
  if(posts.length === 0) return res.status(200).json({ "posts": [] });
  
  return res.status(200).json(posts);
});

module.exports = router;