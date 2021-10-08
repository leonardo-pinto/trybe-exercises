const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');
const middlewares = require('./middlewares');

app.use(express.json());

app.use('/user', userRouter);

app.use(middlewares.error);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
