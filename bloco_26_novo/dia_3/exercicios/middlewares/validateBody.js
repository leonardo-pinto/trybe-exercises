const validation = require('../validation/validation');

module.exports = async (req, _res, next) => {
  const { error } = await validation.validateBody(req.body);

  if (error) {
    return next(error)
  }

  next();
}
