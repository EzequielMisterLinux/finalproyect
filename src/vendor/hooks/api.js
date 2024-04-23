// api.js

import axios from 'axios';

const baseURL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL,
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

export const addProductAPI = async (productData) => {
  const response = await api.post('/products', productData);
  return response.data;
};

export const updateProductAPI = async (id, updatedProduct) => {
  await api.put(`/products/${id}`, updatedProduct);
};

export const deleteProductAPI = async (id) => {
  await api.delete(`/products/${id}`);
};
