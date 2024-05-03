// ProductList.jsx
import React, { useState } from 'react';
import UpdateProductModal from './UpdateProductModal';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState(null);

  const handleUpdateProduct = (product) => {
    setProductToUpdate(product);
    setShowUpdateModal(true);
  };

  const handleCloseModal = () => {
    setShowUpdateModal(false);
    setProductToUpdate(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subcategory</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{product.name}</div></td>
              <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">${product.price}</div></td>
              <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{product.category}</div></td>
              <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{product.subcategory}</div></td>
              <td className="px-6 py-4 whitespace-nowrap"><div className="text-sm text-gray-900">{product.description}</div></td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onClick={() => deleteProduct(product.id)} className="text-red-600 hover:text-red-900">Delete</button>
                <button onClick={() => handleUpdateProduct(product)} className="ml-2 text-blue-600 hover:text-blue-900">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdateModal && (
        <UpdateProductModal
          product={productToUpdate}
          updateProduct={updateProduct}
          closeModal={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProductList;
