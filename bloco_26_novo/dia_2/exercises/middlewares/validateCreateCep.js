const cepSchema = require('../schemas/cepSchema');

module.exports = async (req, _res, next) => {
  const { error }  = await cepSchema.createCepValidation(req.body);

  if (error) return next(error);

  next();
};
