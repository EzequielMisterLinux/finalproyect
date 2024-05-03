// Dashboard.jsx
import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import useProducts from './hooks/useProducts';
import CategoryForm from './components/CategoryForm';

const Dashboard = () => {
  const { products, categories, loading, error, addProduct, updateProduct, deleteProduct, addCategory, addSubcategory } = useProducts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Manage Categories</h2>
            {categories && <CategoryForm addCategory={addCategory} addSubcategory={addSubcategory} categories={categories} />}
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Product</h2>
            <ProductForm addProduct={addProduct} categories={categories} />
          </div>
        </div>
        <div className="md:w-2/3 md:ml-4">
          <h2 className="text-xl font-semibold mb-4">List of Products</h2>
          <ProductList
            products={products}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
