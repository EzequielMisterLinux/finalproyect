// controllers/dashboardController.js
import path from 'path';
import fs from 'fs'; 
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
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/'; 
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `image-${Date.now()}${ext}`);
  }
});

const upload = multer({ storage });

const insertProduct = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { name, description, price, subCategoryId } = req.body;
      const image = req.file ? req.file.path : null;

      if (!req.file || !req.file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return res.status(400).json({ error: 'Only image files (jpg, jpeg, png, gif) are allowed' });
      }

      const result = await createProduct.insert(name, description, price, image, subCategoryId);
      if (result) {
        res.json({ message: 'Product inserted successfully' });
      } else {
        res.status(500).json({ error: 'Error inserting product' });
      }
    } catch (error) {
      console.error('Error inserting product:', error);
      res.status(500).json({ error: 'Error inserting product' });
    }
  }
];

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