import User from '../models/User.js';

const UserController = {
  register: async (req, res) => {
    const { email, username, fullName, address, password } = req.body;
    try {
      const result = await User.register(email, username, fullName, address, password);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  authenticate: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.authenticate(email, password);
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default UserController;
