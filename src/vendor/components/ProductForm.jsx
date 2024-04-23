import React, { useState, useEffect } from 'react';
import { fetchCategories, fetchSubcategories, addProduct } from '../hooks/api';
// import multer from 'multer';
// import path from 'path';





const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');





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
    if (selectedCategory) {
      const fetchSubcategoriesData = async () => {
        try {
          const subcategoriesData = await fetchSubcategories(selectedCategory);
          setSubcategories(subcategoriesData);
        } catch (err) {
          console.error('Error fetching subcategories:', err);
        }
      };

      fetchSubcategoriesData();
    }
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !price || !selectedSubCategory || !image) {
      console.error('Please fill in all required fields');
      return;
    }

    const formData = new FormData();
    formData.append('name', name.trim());
    formData.append('description', description.trim());
    formData.append('price', parseFloat(price));
    formData.append('image', image);
    formData.append('subCategoryId', parseInt(selectedSubCategory));

    try {
      await addProduct(formData);
      resetForm();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setSelectedCategory('');
    setSelectedSubCategory('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md  p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <input type="file" name="image" 
        accept="image/*" 
        multiple={false} 
        onChange={imageHandler} />
        <h2> {uploadStatus} </h2>
        


      </div>
      <div className="mb-4 flex flex-col">
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setSelectedSubCategory('');
          }}
          className="p-2 border border-gray-300 rounded mb-2"
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select
          value={selectedSubCategory}
          onChange={(e) => setSelectedSubCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select Subcategory</option>
          {subcategories.map((subcategory) => (
            <option key={subcategory.id} value={subcategory.id}>
              {subcategory.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="bg-green-500 hover:bg-green-600 text-white p-2 rounded w-full">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;