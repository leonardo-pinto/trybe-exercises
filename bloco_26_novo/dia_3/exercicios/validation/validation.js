const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  brand: Joi.string().required()
});

const validateBody = (body) => {
  return productSchema.validate(body);
};

module.exports = { validateBody }
