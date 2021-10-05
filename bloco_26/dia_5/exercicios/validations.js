const { json } = require("express");

const usernameValidation = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length < 3)
    return res.status(400).json({ "message": "invalid data" });
    
  next();
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@') || !email.includes('com'))
    return res.status(400).json({ "message": "invalid data" });
  
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;

  if(
    password.length < 3 ||
    password.length > 8 ||
    !password.match(passwordRegex)
  )
    return res.status(400).json({ message: 'invalid data' });
  
  next();
};

const tokenAuthentication = (req, res, next) => {
  const token = req.headers.authorization;

  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;

  if (!token || token.match(tokenRegex))
  return res.status(401).json({ message: 'invalid token' });

  next();
};

const nameValidation = (req, res, next) => {
  const { name } = req.body;
  if(!name || name.length < 5) return res.status(400).json({ "message": "invalid data" });

  next ();
}

const initialsValidation = (req, res, next) => {
  const { initials } = req.body;
  const upperCaseLetters = initials.replace(/[^A-Z]/g, '');
  if (!initials || upperCaseLetters.length > 3) return res.status(400).json({ "message": "invalid data" });

  next();
}

const countryValidation = (req, res, next) => {
  const { country } = req.body;
  if (!country || country.length < 3) return res.status(400).json({ "message": "invalid data" });

  next();
}



module.exports = { 
  usernameValidation, 
  emailValidation, 
  passwordValidation, 
  tokenAuthentication,
  nameValidation,
  initialsValidation,
  countryValidation,
};
