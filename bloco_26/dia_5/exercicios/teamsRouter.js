const router = require('express').Router();
const fs = require('fs').promises;
const { readFileContent, writeFileContent } = require('./readWriteFile');

const { nameValidation, initialsValidation, countryValidation } = require('./validations'); 

router.get(
  '/',
  async (req, res) => {
    const teams = await readFileContent('./teams.json') || [];
    res.status(200).json({ teams });
  }
);

router.post(
  '/',
  nameValidation,
  initialsValidation,
  countryValidation,
  async (req, res) => {
    const team = await writeFileContent('./teams.json', req.body );
    res.status(200).json(team);
})

module.exports = router;