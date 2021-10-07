const express = require('express');
const authMiddleware = require('./auth-middleware');

const app = express();
app.use(express.json())
// app.use(bodyParser.json());

app.get('/open', function (req, res) {
  res.send('Open!')
});

app.get('/closed', authMiddleware, function (req, res) {
  res.send('Closed!')
});
// app.use(authMiddleware);

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);
// const recipes = [
//   { id: 1, name: 'Lasanha', preco: 40.0, tempoDePreparo: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', preco: 35.0, tempoDePreparo: 25 },
//   { id: 3, name: 'Macarrão com molho branco', preco: 35.0, tempoDePreparo: 25 },
// ];

// app.get('/recipes', function (req, res) {
//   res.status(200).json(recipes);
// });

// app.get('/recipes/pesquisar', function (req, res) {
//   const { name, maxPrice } = req.query;
//   const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.preco < parseInt(maxPrice));
//   res.status(200).json(filteredRecipes);
// });

// app.get('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipe = recipes.find((r) => r.id === parseInt(id));
//   if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

//   res.status(200).json(recipe);
// });

// function validatePrice(req, res, next) {
//   const { price } = req.body;
//   if (!price || typeof price !== 'number' || price < 0) return res.status(400).json({ message: 'Price invalid!' });

//   next();
// };

// function validateName(req, res, next) {
//   const { name } = req.body;
//   if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });

//   next();
// }

// app.post('/recipes', validateName, validatePrice, function (req, res) {
//   const { id, name, price } = req.body;
//   const { username } = req.user;
//   recipes.push({ id, name, price, chef: username });
//   res.status(201).json({ message: 'Recipe created successfully!'});
// });

// app.put('/recipes/:id', validatePrice, function (req, res) {
//   const { id } = req.params;
//   const { name, price } = req.body;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

//   res.status(204).end();
// });

// app.delete('/recipes/:id', function (req, res) {
//   const { id } = req.params;
//   const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

//   if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

//   recipes.splice(recipeIndex, 1);

//   res.status(204).end();
// });

// app.all('*', function (req, res) {
//     return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
// });

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
