const express = require('express');
const userRouter = require('./userRouter');
const btcRouter = require('./btcRouter');
const postsRouter = require('./postsRouter');
const teamsRouter = require('./teamsRouter')
const errors = require('./middlewares');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRouter);

app.use('/btc', btcRouter);

app.use('/posts', postsRouter);

app.use('/teams', teamsRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opps router not found' }));

app.use(errors.routerNotFound);

app.listen(3001, () => {
  console.log('App listening to port 3001 !');
})
