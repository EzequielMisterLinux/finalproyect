// routes.js
import express from 'express';
import { 
  insertProduct, 
  updateProduct, 
  deleteProduct, 
  getProducts, 
  createSubCategory, 
  createCategory, 
  getCategories, 
  getSubCategoriesByCategory 
} from '../controllers/dashboardController.js';

const router = express.Router();

// Rutas para el Dashboard
router.put('/api/products/:id', updateProduct); // Cambia a updateProduct
router.delete('/api/products/:id', deleteProduct); // Cambia a deleteProduct
router.get('/api/products', getProducts);
router.post('/api/subcategories', createSubCategory);
router.post('/api/categories', createCategory);
router.get('/api/categories', getCategories);
router.get('/api/categories/:categoryId/subcategories', getSubCategoriesByCategory);
router.post('/api/products', insertProduct);
router.get('/uploads', insertProduct);


export default router;
