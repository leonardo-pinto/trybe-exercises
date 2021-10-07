const express = require('express');
const app = express();
const port = 3000;
const authorsRouter = require('./routes/authorsRouter');

app.use(express.json());

app.use('/authors', authorsRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))