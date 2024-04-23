// controllers/dashboardController.js
import {
  createProduct,
  updateProduct as updateProductFromModel,
  removeProduct,
  retrieveProducts,
  createSubCategory as createSubCategoryFromModel,
  createCategory as createCategoryFromModel,
  retrieveCategories,
  retrieveSubCategoriesByCategory
} from '../models/dashboardModel.js';


const insertProduct = {
  insertProduct: (req, res) => {
    const { name, description, price, image, subCategoryId } = req.body;
    createProduct.insert({ name, description, price, image, subCategoryId }, (error, results) => {
      if (error) {
        console.error('Error inserting product:', error);
        res.status(500).json({ error: 'Error inserting product' });
      } else {
        console.log('Product inserted successfully');
        res.status(200).json({ message: 'Product inserted successfully' });
      }
    });
  }
};



const updateProduct = async (req, res) => {
  try {
    await updateProductFromModel(req.params.id, req.body);
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Error updating product' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await removeProduct(req.params.id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Error deleting product' });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await retrieveProducts();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
};

const createSubCategory = async (req, res) => {
  try {
    await createSubCategoryFromModel(req.body);
    res.status(201).json({ message: 'Subcategory created successfully' });
  } catch (error) {
    console.error('Error creating subcategory:', error);
    res.status(500).json({ error: 'Error creating subcategory' });
  }
};

const createCategory = async (req, res) => {
  try {
    await createCategoryFromModel(req.body);
    res.status(201).json({ message: 'Category created successfully' });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Error creating category' });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await retrieveCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

const getSubCategoriesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const subCategories = await retrieveSubCategoriesByCategory(categoryId);
    res.json(subCategories);
  } catch (error) {
    console.error('Error fetching subcategories:', error);
    res.status(500).json({ error: 'Error fetching subcategories' });
  }
};

export {
  insertProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  createSubCategory,
  createCategory,
  getCategories,
  getSubCategoriesByCategory
};