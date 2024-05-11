// productController.js

import path from 'path';
import { getProductImageById, getProducts } from '../models/productModel.js';

const viewProductsWithImages = async (req, res) => {
  try {
    const products = await getProducts();
    const productsWithImages = await Promise.all(
      products.map(async (product) => {
        const image = await getProductImageById(product.id);
        return { ...product, image };
      })
    );
    res.json(productsWithImages);
  } catch (error) {
    console.error('Error fetching products with images:', error);
    res.status(500).json({ error: 'Error fetching products with images' });
  }
};

export { viewProductsWithImages };

