const rescue = require('express-rescue');
const User = require('../models/User');

module.exports = rescue(async (req, res) => {
  const { id } = req.params;
  const userById = await User.findById(id);
  if (!userById) return res.status(404).json({ error: true, message: 'Usuário não encontrado'});

  res.status(200).json(userById);
})