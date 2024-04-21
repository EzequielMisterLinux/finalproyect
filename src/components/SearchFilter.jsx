import React, { useState } from 'react';
import { FaAngleDown, FaTimes } from 'react-icons/fa';
import { uniqueCategories } from '../mocks/productsData';

const SearchFilter = ({ searchTerm, handleSearchChange, handleCategorySelect }) => {
  const [expandedCategory, setExpandedCategory] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCategoryClick = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory('');
    } else {
      setExpandedCategory(category);
    }
    // Llamar a la función handleCategorySelect para actualizar la categoría seleccionada en Store
    handleCategorySelect(category);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-700 bg-opacity-25 p-4 ${isExpanded ? 'md:w-1/5 lg:w-1/6' : 'md:w-20 lg:w-1/6'} w-full md:h-full overflow-y-auto`}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={toggleExpand} className="text-white">
          {isExpanded ? <FaTimes /> : <FaAngleDown />}
        </button>
        {isExpanded && (
          <button className="text-white">
            <FaTimes />
          </button>
        )}
      </div>
      {isExpanded && (
        <>
          <input
            type="text"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 mb-4 rounded border border-gray-300 text-white text-sm"
            style={{ marginTop: '64px' }}
          />
          <ul className="text-white">
            {Object.keys(uniqueCategories).map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="cursor-pointer flex justify-between items-center hover:bg-gray-600 px-4 py-2 text-sm"
              >
                {category} {expandedCategory === category && <FaAngleDown />}
                {expandedCategory === category && (
                  <ul className="ml-4">
                    {uniqueCategories[category].map((subCategory) => (
                      <li key={subCategory}>{subCategory}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchFilter;