const Joi = require('joi');

// const CEP_REGEX_PATTERN = '\d{5}-\d{3}';

const createCepSchema = Joi.object({
  cep: Joi.string().required(),
  // cep: Joi.string().pattern(new RegExp('\d{5}-\d{3}')).required(),
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
}).messages({
  'string.pattern': `O cep deve ser inserido no formato XXXXX-XXX`,
});


const findCepSchema = Joi.object({
  cep: Joi.string().required(),
}).messages({
  'string.pattern': `O cep deve ser inserido no formato XXXXX-XXX ou XXXXXXXX`,
});

const findCepValidation = (data) => {
  return findCepSchema.validate(data)
}

const createCepValidation = (data) => {
  return createCepSchema.validate(data);
}


module.exports = { createCepValidation, findCepValidation };
