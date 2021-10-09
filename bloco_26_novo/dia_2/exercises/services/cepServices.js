const cepModel = require('../models/cepModel');

const findCep = async ({ cep }) => {
  let formattedCep = cep;

  if (cep.includes('-')) {
    formattedCep = cep.replace('-', '');
  }
  
  const findByCep = await cepModel.findCep(formattedCep);

  if (findByCep.length === 0) {
    return { error: "not found" };
  }

  return findByCep;
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {  
  let formattedCep = cep;

  if (cep.includes('-')) {
    formattedCep = cep.replace('-', '');
  }

  const cepExists = await cepModel.cepExists(formattedCep);
  
  if (cepExists) return { error: "alreadyExists" };

  return await cepModel.createCep({ formattedCep, logradouro, bairro, localidade, uf });
};

module.exports = { createCep, findCep };
