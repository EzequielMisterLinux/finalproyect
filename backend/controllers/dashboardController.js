// controllers/dashboardController.js
import {
  createSubCategoryModel,
  createCategoryModel,
  retrieveCategories,
  retrieveSubCategoriesByCategory
} from '../models/dashboardModel.js';

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await createCategoryModel.insert(name);
    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error.message);
    res.status(500).json({ error: 'Error creating category' });
  }
};

const createSubCategoryController = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const newSubCategory = await createSubCategoryModel.insert(name, categoryId);
    res.status(201).json(newSubCategory);
  } catch (error) {
    console.error('Error creating subcategory:', error.message);
    res.status(500).json({ error: 'Error creating subcategory' });
  }
};

const getCategoriesController = async (req, res) => {
  try {
    const categories = await retrieveCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    res.status(500).json({ error: 'Error fetching categories' });
  }
};

const getSubCategoriesByCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await retrieveSubCategoriesByCategory(categoryId);
    res.json(subCategories);
  } catch (error) {
    console.error('Error fetching subcategories:', error.message);
    res.status(500).json({ error: 'Error fetching subcategories' });
  }
};

export {
  createSubCategoryController,
  createCategoryController,
  getCategoriesController,
  getSubCategoriesByCategoryController
};

