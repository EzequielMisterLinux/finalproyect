// productModel.js
import connection from '../database/connection.js';

const getProducts = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Products', (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};




export { getProducts };
