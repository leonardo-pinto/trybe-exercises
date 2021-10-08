const rescue = require('express-rescue');
const User = require('../models/User');

module.exports = [
  (req, _res, next) => {
    const { error } = User.isValid(req.body);

    if (error) return next(error);

    next();
  },
  rescue (async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const { id } = req.params;

    const updatedUser = await User.updateUser(id, { firstName, lastName, email, password });

    if(!updatedUser) {
      return res.status(404).json({ error: true, message: 'Usuário não encontrado' });
    }
    return res.status(200).json(updatedUser);
  })
];
