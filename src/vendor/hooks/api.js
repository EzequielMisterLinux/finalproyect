
// api.js
import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL,
  withCredentials: true, // Agrega esta línea para enviar cookies con las solicitudes
});

export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const fetchCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const fetchSubcategories = async (categoryId) => {
  const response = await api.get(`/categories/${categoryId}/subcategories`);
  return response.data;
};

export const updateProductAPI = async (id, updatedProduct) => {
  await api.put(`/products/${id}`, updatedProduct);
};

export const deleteProductAPI = async (id) => {
  await api.delete(`/products/${id}`);
};

export const createCategory = async (categoryData) => {
  try {
    const response = await api.post('/categories', categoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSubcategory = async (categoryId, subcategoryData) => {
  try {
    const response = await api.post(`/categories/${categoryId}/subcategories`, subcategoryData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};