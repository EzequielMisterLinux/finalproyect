// useProducts.js

import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories, addProductAPI, updateProductAPI, deleteProductAPI } from './api';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        const categoriesData = await fetchCategories();
        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addProduct = async (productData) => {
    try {
      const newProduct = await addProductAPI(productData);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (err) {
      setError(err);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await updateProductAPI(id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product))
      );
    } catch (err) {
      setError(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await deleteProductAPI(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return { products, categories, loading, error, addProduct, updateProduct, deleteProduct };
};

export default useProducts;
