// connection.js
import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ezequielcampos',
  password: '71277157',
  database: 'tiendadb'
});

export default connection;
