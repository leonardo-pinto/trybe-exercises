const express = require('express');
const app = express();
const port = 3000;
const cepRouter = require('./routes/cepRoutes');
const pingRouter = require('./routes/pingRoutes');
const errors = require('./middlewares/error');

app.use(express.json());

app.use('/ping', pingRouter);

app.use('/cep', cepRouter);

app.use(errors);

app.listen(port, () => console.log(`Cep lookup app listening on port ${port}!`));
