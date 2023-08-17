const User = require('../models/User');
//e
// Register a new user
// Register a new user
exports.register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({ username, email, password });
      res.json(user);
    } catch (error) {
      if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
        res.status(400).json({ error: 'User with this email already exists' });
      } else {
        res.status(400).json({ error: error.message });
      }
    }
  };

// User login
exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (user) {
        if (user.password === password) {
          res.json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } else {
        res.status(401).json({ error: 'Email is not registered. Please sign up.' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  
