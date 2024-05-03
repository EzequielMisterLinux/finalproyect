// productRoutes.js
import express from 'express';
import { getProductImage, viewProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/api/products', viewProducts);
router.get('/api/products/:productId/image', getProductImage);

export default router;
