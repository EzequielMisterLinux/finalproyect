import User from '../models/User.js';
import Swal from 'sweetalert2';
import axios from 'axios';

const UserController = {
  register: async (req, res) => {
    const { email, username, fullName, address, password } = req.body;
    try {
      const result = await User.register(email, username, fullName, address, password);
      res.status(200).json({ message: result });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: error.message || 'Hubo un problema al registrar el usuario'
      });
      res.status(500).json({ error: error.message });
    }
  },
  authenticate: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Llamada al procedimiento almacenado en el backend
      const response = await axios.post('http://localhost:3001/authenticate_user', { email, password });
      
      // Manejo de la respuesta del procedimiento almacenado
      if (response.data.message.includes('Usuario autenticado correctamente.')) {
        // Se extrajo el id del usuario autenticado del mensaje
        const userId = response.data.message.split('.').pop();
        res.status(200).json({ message: 'Usuario autenticado correctamente.', userId });
      } else {
        res.status(401).json({ error: response.data.message });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error en la autenticación',
        text: error.message || 'Hubo un problema al autenticar el usuario'
      });
      res.status(500).json({ error: error.message });
    }
  }
};

export default UserController;
