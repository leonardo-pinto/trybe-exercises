const router = require('express').Router();

router.get(
  '/',
  (_req, res) => {
    return res.status(200).json({ message: "pong !" })
  },
);

module.exports = router;
