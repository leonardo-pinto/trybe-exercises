const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const errors = require('./middlewares/error');

const app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productController);

app.use(errors);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
