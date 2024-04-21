import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const port = 3001;

// Middleware para permitir solicitudes CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Reemplaza esto con el dominio correcto de tu aplicación frontend
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ezequielcampos',
  password: '71277157',
  database: 'tiendadb'
});

app.get('/api/products', (req, res) => {
  const query = 'SELECT id, name, price, image FROM products';
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Error fetching products' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});