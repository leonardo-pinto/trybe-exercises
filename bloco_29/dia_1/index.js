const express = require('express');
const app = express();
const plantsServices = require('./plants.js');

app.use(express.json());

app.get('/plants', (_req, res) => {
  const plants = plantsServices.getPlants();
  res.status(200).json(plants);
});

app.get('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsServices.getPlantById(id);
  res.status(200).json(plant);
});

app.delete('/plant/:id', (req, res) => {
  const { id } = req.params;
  const plant = plantsServices.removePlantById(id);
  res.status(204).json(plant);
});

app.post('/plant/:id', (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = plantsServices.editPlant(id, newPlant);
  res.status(200).json(plant);
});

app.post('/plant/', (req, res) => {
  const newPlant = req.body.plant;
  const plant = plantsServices.createNewPlant(newPlant);
  res.status(201).json(plant);
});

app.get('/sunny/:id', (req, res) => {
  const { id } = req.params;
  const plants = plantsServices.getPlantsThatNeedsSunWithId(id);
  res.status(200).json(plants);
});


app.listen(3001, () => {
  console.log('App listening port 3001!')
});