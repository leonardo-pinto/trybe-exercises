const cepServices = require('../services/cepServices');
const validateCreateCep = require('../middlewares/validateCreateCep');
const validateFindCep = require('../middlewares/validateFindCep');
const rescue = require('express-rescue');

const findCep = [
  validateFindCep,
  rescue (async (req, res, next) => {
    const findByCep = await cepServices.findCep(req.params);

    if (findByCep.error) {
      return next(findByCep.error);
      // return res.status(404).json({ error: { code: "notFound", message: "CEP não encontrado" } })
    }

    return res.status(200).json(findByCep);
  })
]

const createCep = [
  validateCreateCep,
  rescue (async (req, res, next) => {
    const createdCep = await cepServices.createCep(req.body);

    if (createdCep.error) {
      // return res.status(409).json({ error: { code: "alreadyExists", message: "CEP já existente" } });
      return next(createCep.error);
    };
    
    res.status(201).json(createdCep);
  })
];

module.exports = { createCep, findCep };
