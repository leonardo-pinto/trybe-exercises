const net = require('net');

const server = net.createServer((connection) => {
  // console.log('cliente conectado')

  // connection.write('mensagem do servidor \r\n');
  // connection.pipe(connection);
  // server.getConnections((err, count) => console.log(count));
  connection.on('data', (data) => {
    console.log(data.toString());
  })
});

server.listen(8080, () => console.log('Server rodando na porta 8080!'));