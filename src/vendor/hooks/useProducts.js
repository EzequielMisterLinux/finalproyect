// useProducts.js
import { useState, useEffect } from 'react';
import { fetchProducts, fetchCategories, updateProductAPI, createCategory, createSubcategory , deleteProductAPI, addProduct } from './api';

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
   const addProduct = async (formData) => {
    try {
      const response = await api.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data; // Retorna los datos de la respuesta
    } catch (error) {
      throw error; // Lanza el error para que sea manejado en el componente
    }
  };

  return { products, categories, loading, error, addNewProduct, updateProduct, deleteProduct, addProduct, addNewSubcategory };
};

export default useProducts;