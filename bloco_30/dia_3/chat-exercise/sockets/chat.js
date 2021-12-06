module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('message', (message) => {
      io.emit('serverMessage', { message: `${socket.id} says: ${message}` });
    });

    socket.emit('welcome', { message: 'Seja bem vindo(a) ao TrybeChat' });

    socket.broadcast.emit('newJoin', { message: 'Alguém entrou' });

    socket.on('disconnect', () => {
      socket.broadcast.emit('serverMessage', { message: `${socket.id} left the chat` });
    });
  });

};