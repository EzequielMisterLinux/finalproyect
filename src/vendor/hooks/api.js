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


export const updateProductAPI = async (id, updatedProduct) => {
  await api.put(`/products/${id}`, updatedProduct);
};

export const deleteProductAPI = async (id) => {
  await api.delete(`/products/${id}`);
};


export const addProduct = async (formData) => {
  try {
    const response = await axios.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    // Manejar la respuesta del servidor si es necesario
    return response.data;
  } catch (error) {
    // Manejar el error si ocurre
    throw error;
  }
};