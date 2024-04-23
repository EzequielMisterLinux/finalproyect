import express from 'express';
import cors from 'cors';
import multer from 'multer'; // Importa multer para manejar la carga de archivos
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; // Importa las nuevas rutas
import connection from './database/connection.js';
import dashboardRoutes from './routes/dashboardRoutes.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Middleware para permitir solicitudes CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Rutas para productos
app.use(productRoutes);
app.use(authRoutes); // Usa las nuevas rutas de autenticación
app.use(dashboardRoutes);

// ... (rest of the code)
// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
