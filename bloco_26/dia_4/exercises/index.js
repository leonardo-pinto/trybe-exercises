const express = require('express');
const rescue = require('express-rescue');
const simpsonsUtils = require('./fs-utils');
const authMiddleware = require('./authMiddleware');
const generateToken = require('./generateToken');

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => {
  console.log('App listening to port 3001!')
});

app.get('/ping', (req, res) => {
  res.status(200).send({ "message": "pong" });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if(parseInt(age) <= 17) return res.status(401).json({ "message": "Unauthorized" })

  res.status(200).json({ "message": `Hello, ${name} !` })

});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade`})
});

app.get('/simpsons', rescue(async (req, res) => {
  

  const simpsons = await simpsonsUtils.getSimpsons();
  if(!simpsons) return res.status(500).json({ "message": "Internal Server Error" });

  res.status(200).json(simpsons);
}));

app.get('/simpsons/:id', rescue(async (req, res) => {
  
  const { id } = req.params;

  const simpsons = await simpsonsUtils.getSimpsons();

  const filteredSimpsons = simpsons.find((simpson) => simpson.id === id);
  
  if (!filteredSimpsons) return res.status(404).json({ "message": "simpson not found" });
  
  res.status(200).json(filteredSimpsons);
}));

app.post('/simpsons/', rescue(async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await simpsonsUtils.getSimpsons();
  

  if (simpsons.map((simpson) => simpson.id).includes(id)) {
    return res.status(409).json({ "message": "id already exists" });
  }

  simpsons.push({ id, name })

  await simpsonsUtils.setSimpsons(simpsons);
  res.status(204).end();
}));

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ "message": "missing fields" });
  }

  const token = generateToken();

  res.status(200).json({ token })
});
