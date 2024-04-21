// dashboardRoutes.js
import express from 'express';
import { insertProduct, updateProduct, deleteProduct, getProducts } from '../controllers/dashboardController.js';

const router = express.Router();

// Rutas para el Dashboard
router.post('/api/products', insertProduct);
router.put('/api/products/:id', updateProduct);
router.delete('/api/products/:id', deleteProduct);
router.get('/api/products', getProducts);

export default router;