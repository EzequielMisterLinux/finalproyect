import React from 'react';
import useProducts from './hooks/useProducts';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const Dashboard = () => {
  const { products, loading, error, addProduct, updateProduct, deleteProduct } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default Dashboard;