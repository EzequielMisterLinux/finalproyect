// useProducts.js
import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories, updateProductAPI, 
createCategory, createSubcategory , deleteProductAPI } from './api';

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

  const addNewProduct = async (productData) => {
    try {
      const newProduct = await addProduct(productData);
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    } catch (err) {
      setError(err);
    }
  };

  const addNewCategory = async (categoryName) => {
    try {
      const newCategory = await createCategory({ name: categoryName });
      setCategories((prevCategories) => [...prevCategories, newCategory]);
    } catch (err) {
      setError(err);
    }
  };


  const addNewSubcategory = async (categoryId, subcategoryData) => {
    try {
      const newSubcategory = await createSubcategory(categoryId, subcategoryData);
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === categoryId
            ? { ...category, subcategories: [...(category.subcategories || []), newSubcategory] }
            : category
        )
      );
    } catch (err) {
      setError(err);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await updateProductAPI(id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...updatedProduct } : product
        )
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
  const addProduct = async (productData) => {
    try {
      const newProduct = await api.post('/products', productData);
      setProducts((prevProducts) => [...prevProducts, newProduct.data]);
    } catch (err) {
      setError(err);
    }
  };
  return { products, categories, loading, error, addNewProduct, updateProduct, deleteProduct, addProduct, addNewSubcategory, addNewCategory };
};

export default useProducts;