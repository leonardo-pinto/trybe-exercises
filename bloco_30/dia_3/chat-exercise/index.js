const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

const PORT = 3000;

const io = require('socket.io')(http, {
  cors: {
    origin: `http://localhost:${PORT}`,
    method: ['GET', 'POST'],
  },
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('usuário conectado');
});

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/index.html');
});


http.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))