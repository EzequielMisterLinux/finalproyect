import express from 'express';
import cors from 'cors';
import multer from 'multer';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import connection from './database/connection.js';
import dashboardRoutes from './routes/dashboardRoutes.js';
import { insertProduct } from './controllers/dashboardController.js';

const path = require('path');
app.post("/api/image", upload.single('image'),(req, res, err) => {
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg:'Only image files (jpg, jpeg, png) are allowed!'})};
    
    const image = req.file.filename;



const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");},
  filename: function(req, file, cb){
      const ext = file.mimetype.split("/")[1];
      cb(null, `uploads/${file.originalname}-${Date.now()}.${ext}`)
    }
});
const upload = multer ({
  storage: storage
})


const cors = require('cors');
app.use(cors({
  origin: true,
  methods: ["POST", "GET"],
  credentials: true,
}))

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Agrega esta línea para manejar los datos del formulario

// Middleware para permitir solicitudes CORS
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();


// Rutas
app.use(productRoutes);
app.use(authRoutes);
app.use(dashboardRoutes); // Asegúrate de importar y usar las rutas de dashboard

router.post('/api/products', insertProduct);

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