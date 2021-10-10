const connection = require('./connection');

const findCep = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;'
  
  const cepFind = await connection.execute(query, [cep])
    .then(([results]) => (results.length ? results[0] : null ));

  if (!cepFind) return null;
 
  return cepFind;
}

// const cepExists = async (cep) => {
//   const query = 'SELECT cep FROM cep_lookup.ceps WHERE cep = ?;'
//   const cepExists = await connection.execute(query, [cep]);

//   return !cepExists[0].length ? false : true;
// };

const createCep = async ({ formattedCep, logradouro, bairro, localidade, uf }) => {
  const query = 'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);'
 
  await connection.execute(query, [formattedCep, logradouro, bairro, localidade, uf]);

  return {
    cep: formattedCep,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

module.exports = { createCep, findCep };
