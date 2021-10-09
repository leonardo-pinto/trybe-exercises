const cepServices = require('../services/cepServices');
const validateCreateCep = require('../middlewares/validateCreateCep');
const validateFindCep = require('../middlewares/validateFindCep');
const rescue = require('express-rescue');

const findCep = [
  validateFindCep,
  rescue (async (req, res) => {
    const cep = req.params;

    const findByCep = await cepServices.findCep(cep);

    console.log(findByCep.error);

    if (findByCep.error === 'not found') {
      return res.status(404).json({ error: { code: "notFound", message: "CEP não encontrado" } })
    }

    return res.status(200).json(findByCep);
  })
]

const createCep = [
  validateCreateCep,
  rescue (async (req, res) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;
    
    const createdCep = await cepServices.createCep({ cep, logradouro, bairro, localidade, uf });

    if (createdCep.error === 'alreadyExists') {
      return res.status(409).json({ error: { code: "alreadyExists", message: "CEP já existente" } });
    };
    
    res.status(201).json(createdCep);
  })
];

module.exports = { createCep, findCep };
