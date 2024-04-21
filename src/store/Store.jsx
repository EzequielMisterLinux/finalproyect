import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';
import SearchFilter from '../components/SearchFilter';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // Estado para la categoría seleccionada

  useEffect(() => {
    axios.get('http://localhost:3001/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    // Filtrar productos por término de búsqueda
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Aplicar filtro adicional por categoría seleccionada
    if (selectedCategory) {
      setFilteredProducts(filtered.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products, selectedCategory]);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category); // Actualizar la categoría seleccionada
  };

  return (
    <div className="flex">
      {/* Filtro de búsqueda */}
      <SearchFilter searchTerm={searchTerm} handleSearchChange={handleSearchChange} handleCategorySelect={handleCategorySelect} />

      {/* Mostrar productos */}
      <div className="w-4/5 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <div>Cargando...</div>
          ) : (
            filteredProducts.map(product => (
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;