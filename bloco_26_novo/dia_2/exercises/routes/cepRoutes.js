const router = require('express').Router();
const cepController = require('../controllers/cepController');

router.get(
  '/:cep',
  cepController.findCep,
);

router.post(
  '/',
  cepController.createCep,
);

module.exports = router;
