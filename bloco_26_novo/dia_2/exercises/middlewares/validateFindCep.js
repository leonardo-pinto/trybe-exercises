const cepSchema = require('../schemas/cepSchema');

module.exports = async (req, _res, next) => {
  const { error }  = await cepSchema.findCepValidation(req.params);

  if (error) return next(error);

  next();
};
