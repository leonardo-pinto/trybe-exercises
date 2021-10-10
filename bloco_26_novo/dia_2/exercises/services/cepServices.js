const cepModel = require('../models/cepModel');

const findCep = async ({ cep }) => {
  let formattedCep = cep;

  if (cep.includes('-')) {
    formattedCep = cep.replace('-', '');
  }
  
  const findByCep = await cepModel.findCep(formattedCep);

  if (!findByCep) {
    return { 
      error: {
        code: "notFound",
        message: "CEP não encontrado",
      },
    };
  };

  return findByCep;
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {  
  let formattedCep = cep;

  if (cep.includes('-')) {
    formattedCep = cep.replace('-', '');
  }

  const cepExists = await cepModel.findCep(formattedCep);
  
  if (cepExists) {
    return { 
      error: {
        code: "already exists",
        message: "CEP já existente",
      },
    };
  }
  
  return await cepModel.createCep({ formattedCep, logradouro, bairro, localidade, uf });
};

module.exports = { createCep, findCep };
