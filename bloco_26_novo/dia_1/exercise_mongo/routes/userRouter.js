const router = require('express').Router();
const middlewares = require('../middlewares');

router.get('/', middlewares.getAllUsers);

router.get('/:id', middlewares.findUserById);

router.post('/', middlewares.createUser);

router.put('/:id', middlewares.updateUser);

module.exports = router;