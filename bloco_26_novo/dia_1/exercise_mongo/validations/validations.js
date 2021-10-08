const { json } = require("express");

const firstNameValidation = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName || firstName.length === 0) {
    return res.status(400).json({ message: "First name is required"});
  };

  next();
};


const lastNameValidation = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName || lastName.length === 0) {
    return res.status(400).json({ message: "Last name is required"});
  };

  next();
};


const emailValidation = (req, res, next) => {
  const { email } = req.body;

  if (!email || email.length === 0) {
    return res.status(400).json({ message: "Last name is required"});
  };

  if (!email.includes('@') && !email.includes('.com')) {
    return res.status(400).json({ message: "Email format is invalid"});
  };

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length === 0) {
    return res.status(400).json({ message: "Password is required"});
  };

  if (password.length < 6 || typeof password !== 'string') {
    return res.status(400).json({ message: "Password must have at least 6 characters"});
  };

  next();
};

module.exports = {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
};
