import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { fetchCategories, fetchSubcategories } from '../vendor/hooks/api';

const SearchFilter = ({ searchTerm, handleSearchChange, handleCategorySelect, handleSubcategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSubcategoriesData = async () => {
      try {
        if (selectedCategory) {
          const subcategoriesData = await fetchSubcategories(selectedCategory);
          setSubcategories(subcategoriesData);
        } else {
          setSubcategories([]);
        }
      } catch (err) {
        console.error('Error fetching subcategories:', err);
      }
    };

    fetchSubcategoriesData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    handleCategorySelect(category);
    setSelectedSubCategory('');
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubCategory(subcategory);
    handleSubcategorySelect(subcategory);
  };

  const filterCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filterSubcategories = subcategories.filter(subcategory =>
    subcategory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-700 bg-opacity-25 p-4 md:w-1/5 lg:w-1/6 w-60 md:h-100 overflow-y-auto md:block lg:block">
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => handleCategoryChange('')} className="text-white">
          <FaTimes />
        </button>
      </div>
      <>
        <input
          type="text"
          placeholder="Buscar productos"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 rounded border border-gray-300 text-white text-sm"
        />
        {filterCategories.map(category => (
          <div key={category.id} className="mb-4">
            <div className="cursor-pointer text-white" onClick={() => handleCategoryChange(category.id)}>
              {category.name}
            </div>
            {selectedCategory === category.id && (
              <>
                {filterSubcategories.map(subcategory => (
                  <div key={subcategory.id} className="cursor-pointer pl-4 text-white" onClick={() => handleSubcategoryChange(subcategory.id)}>
                    {subcategory.name}
                  </div>
                ))}
              </>
            )}
          </div>
        ))}
      </>
    </div>
  );
};

export default SearchFilter;
