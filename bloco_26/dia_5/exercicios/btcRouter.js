const router = require('express').Router();
const axios = require('axios');

const { tokenAuthentication } = require('./validations');

router.get(
  '/price',
  tokenAuthentication,
  async (req, res) => {
    const result = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
    res.status(200).json(result.data)
  }
);

module.exports = router ;
