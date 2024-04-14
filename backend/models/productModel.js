// productModel.js
import connection from '../database/connection.js';

const getProducts = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT id, name, price, image FROM products';
    connection.query(query, (error, results, fields) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};

export { getProducts };
