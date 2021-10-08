const { json } = require('express');

const isValidMiddleWare = (req, res, next) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!first_name || typeof first_name !== 'string') return res.status(400).json({ "message": "invalid data" });
  if (!last_name || typeof last_name !== 'string') return res.status(400).json({ "message": "invalid data" });
  if (middle_name && typeof middle_name !== 'string') return res.status(400).json({ "message": "invalid data" });

  next();
};

module.exports = { isValidMiddleWare };
