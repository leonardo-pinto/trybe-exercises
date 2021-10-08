const rescue = require('express-rescue');
const User = require('../models/User');

module.exports = [
  (req, _res, next) => {
    const { error } = User.isValid(req.body);

    if (error) return next(error);
   
    next();
  },
  rescue(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const newUser = await User.createUser({ firstName, lastName, email, password });

    res.status(201).json(newUser);
  })
]