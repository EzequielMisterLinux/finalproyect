// dashboardController.js
import { createProduct, updateProduct as updateProductFromModel, removeProduct, retrieveProducts } from '../models/dashboardModel.js';

// Insertar un producto
const insertProduct = async (req, res) => {
  try {
    await createProduct(req.body);
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    console.error('Error inserting product:', error);
    res.status(500).json({ error: 'Error inserting product' });
  }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
  try {
    await updateProductFromModel(req.params.id, req.body);
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Error updating product' });
  }
};
// Eliminar un producto
const deleteProduct = async (req, res) => {
  try {
    await removeProduct(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Error deleting product' });
  }
};

// Obtener todos los productos
const getProducts = async (req, res) => {
  try {
    const products = await retrieveProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

export { insertProduct, updateProduct, deleteProduct, getProducts };
