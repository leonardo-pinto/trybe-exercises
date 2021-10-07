const router = require('express').Router();

const {
  usernameValidation,
  emailValidation,
  passwordValidation,
} = require('./validations');

router.post(
  '/register',
  usernameValidation,
  emailValidation,
  passwordValidation,
  (_req, res) => res.status(201).json({ "message": "user created" })
);

router.post(
  '/login',
  emailValidation,
  passwordValidation,
  (req, res) => res.status(200).json({ token: '86567349784e' })
);

module.exports = router ;
