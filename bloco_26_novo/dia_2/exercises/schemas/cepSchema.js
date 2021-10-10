const Joi = require('joi');

// const CEP_REGEX_PATTERN = '\d{5}-\d{3}';

const requiredString = Joi.string().required();

const createCepSchema = Joi.object({
  cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  logradouro: requiredString,
  bairro: requiredString,
  localidade: requiredString,
  uf: requiredString,
});


const findCepSchema = Joi.object({
  cep: Joi.string().regex(/\d{5}-?\d{3}/).required(),
});

const findCepValidation = (data) => {
  return findCepSchema.validate(data)
}

const createCepValidation = (data) => {
  return createCepSchema.validate(data);
}


module.exports = { createCepValidation, findCepValidation };
