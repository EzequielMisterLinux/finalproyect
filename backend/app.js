// app.js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connection from './database/connection.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import path from 'path';

const app = express();
const port = 3001;

// Configuración de CORS
app.use(cors({
  origin: "http://localhost:5173", // Reemplaza con el origen de tu aplicación frontend
  credentials: true
}));

// Middleware para permitir solicitudes CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Reemplaza con el origen de tu aplicación frontend
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Middleware para parsear JSON y URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde el directorio 'uploads'
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use(productRoutes);
app.use(dashboardRoutes); // Asegúrate de importar y usar las rutas de dashboard
app.use(authRoutes);

// Conexión a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

export default app;
