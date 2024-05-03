// productController.js
import path from 'path';
import { getProductImageById, getProducts } from '../models/productModel.js';



const viewProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const getProductImage = async (req, res) => {
  try {
    const { productId } = req.params;
    const image = await getProductImageById(productId);
    if (image) {
      // Assuming image is stored in the server and served statically
      res.sendFile(path.resolve(`./uploads/${image}`));
    } else {
      res.status(404).json({ error: 'Image not found' });
    }
  } catch (error) {
    console.error('Error fetching product image:', error);
    res.status(500).json({ error: 'Error fetching product image' });
  }
};



export { viewProducts, getProductImage };
