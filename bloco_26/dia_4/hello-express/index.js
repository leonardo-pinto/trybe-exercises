const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1


// conteúdo inicial sobre express
// app.get('/hello', handleHelloWorldRequest); // 2

// app.get('/vqv', handleVQVRequest); // 2

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

// function handleHelloWorldRequest(req, res) {
//   res.status(200).send('Hello World VQV!'); // 4
// }

// function handleVQVRequest(req, res) {
//   res.status(200).send('Foguete não tem ré');
// }

// // estruturando uma API
// const recipes = [
//   { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
//   { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
//   { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
// ];

// app.get('/recipes', (req, res) => {
//   res.json(recipes);
// });

// app.listen(3001, () => {
//   console.log('Aplicação ouvindo na porta 3001');
// }); // 3

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
});

app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.get('/drinks/sort', (req, res) => {
  const orderedDrinks = drinks.sort((a, b) => a.name.localeCompare(b.name));

  res.json(orderedDrinks).sort();
})

// app.get('/drinks/search', (req, res) => {
//   const { name } = req.query;
//   const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));
//   res.status(200).json(filteredDrinks);
// });
app.get('/drinks/search', (req, res) => {
  const { name, price } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name) && drink.price < parseInt(price));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(201).json(drink);

});


app.use(bodyParser.json());

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(200).json({ message: 'Drink created successfully!'})
});

// fetch(`http://localhost:3001/recipes/`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: 4,
//     title: 'Macarrão com Frango',
//     price: 30
//   })
// });

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 3) return res.status(401).json({ message: 'Invalid token!' });

  res.status(200).json({ message: 'Valid token!'});
});


app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'})

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found!'});

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.get('/xablau', function (req, res) {
  return res.status(404).json({ message: `Xablau!`});
});
