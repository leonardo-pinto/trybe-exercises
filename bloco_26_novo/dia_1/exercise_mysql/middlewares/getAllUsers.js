const rescue = require('express-rescue');
const User = require('../models/User');

module.exports = rescue(async (_req, res) => {
  const allUsers = await User.getAllUsers();

  res.status(200).json(allUsers);
});
