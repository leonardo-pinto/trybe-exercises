const express = require('express');
const userRouter = require('./userRouter');

const app = express();

app.use(express.json());

app.use('/user', userRouter);

app.listen(3001, () => {
  console.log('App listening to port 3001 !');
})
