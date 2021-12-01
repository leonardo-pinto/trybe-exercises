const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'leonardo-pinto',
  password: 'B@gudos2004',
  database: 'mvc_example'});

module.exports = connection;