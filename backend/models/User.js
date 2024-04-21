import connection from '../database/connection.js';

const User = {
  register: (email, username, fullName, address, password) => {
    return new Promise((resolve, reject) => {
      connection.query('CALL addusers(?, ?, ?, ?, ?, @result)', [email, username, fullName, address, password], (error, results) => {
        if (error) {
          reject(error);
        } else {
          connection.query('SELECT @result AS result', (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results[0].result);
            }
          });
        }
      });
    });
  },
  authenticate: (email, password) => {
    return new Promise((resolve, reject) => {
      connection.query('CALL authenticate_user(?, ?)', [email, password], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0][0]); // Change here to resolve the first row directly
        }
      });
    });
  }
};

export default User;
