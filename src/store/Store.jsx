import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../index.css"

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6">Nuestra Tienda</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-700 mb-4">${product.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Store;