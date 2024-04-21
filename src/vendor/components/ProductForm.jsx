import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ name, price: parseFloat(price) });
    setName('');
    setPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-grow mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;