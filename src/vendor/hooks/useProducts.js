import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      await axios.post('http://localhost:3001/api/products', product);
      setProducts((prevProducts) => [...prevProducts, product]);
    } catch (err) {
      setError(err);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`http://localhost:3001/api/products/${id}`, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === id ? updatedProduct : product))
      );
    } catch (err) {
      setError(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/products/${id}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return { products, loading, error, addProduct, updateProduct, deleteProduct };
};

export default useProducts;