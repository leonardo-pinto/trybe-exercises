const router = require('express').Router();
const middlewares = require('../middlewares');

router.post('/', middlewares.createUser);

router.get('/', middlewares.getAllUsers);

router.get('/:id', middlewares.findUserById);

router.put('/:id', middlewares.updateUser);

module.exports = router;