// productRoutes.js
import express from 'express';
import { viewProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/api/products', viewProducts);

export default router;
