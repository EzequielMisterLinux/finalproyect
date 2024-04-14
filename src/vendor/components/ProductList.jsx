import React, { useState } from 'react';
import UpdateProductModal from './UpdateProductModal';

const ProductList = ({ products, updateProduct, deleteProduct }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => deleteProduct(product.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Delete
            </button>
            <button
              onClick={() => {
                setSelectedProduct(product);
                setShowModal(true);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Update
            </button>
          </div>
        </div>
      ))}
      {showModal && (
        <UpdateProductModal
          product={selectedProduct}
          updateProduct={updateProduct}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ProductList;