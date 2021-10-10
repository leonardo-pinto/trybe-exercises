const cepModel = require('../models/cepModel');
const viaCepModel = require('../models/ViaCepModel');

const findCep = async ({ cep }) => {
  let formattedCep = cep;

  if (cep.includes('-')) {
    formattedCep = cep.replace('-', '');
  }
  
  const findCepByApi = await viaCepModel.lookupCep(formattedCep);

  if (!findCepByApi) {
    return { 
      error: {
        code: "notFound",
        message: "CEP não encontrado",
      },
    };
  };

  return findCepByApi;
}

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {  
  let formattedCep = cep;

  if (cep.includes('-')) {
    formattedCep = cep.replace('-', '');
  }

  const cepExists = await viaCepModel.lookupCep(formattedCep);
  
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
