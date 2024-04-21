// dashboardModel.js
import connection from '../database/connection.js';

// Crear un producto
const createProduct = (product) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO products SET ?', product, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

// Actualizar un producto
const updateProduct = (id, product) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE products SET ? WHERE id = ?', [product, id], (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

// Eliminar un producto
const removeProduct = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM products WHERE id = ?', id, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

// Obtener todos los productos
const retrieveProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM products', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

export { createProduct, updateProduct, removeProduct, retrieveProducts };
