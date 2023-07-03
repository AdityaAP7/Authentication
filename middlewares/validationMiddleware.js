// Validate username, email, and password
exports.validateUser = (req, res, next) => {
    const { username, email, password } = req.body;
  
    if (!username.match(/^[a-zA-Z0-9]{6,12}$/)) {
      return res.status(400).json({ error: 'Username must be alphanumeric and 6-12 characters long' });
    }
  
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email' });
    }
  
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password should be 6 or more characters long' });
    }
    
    if (!/[a-zA-Z]/.test(password)) {
      return res.status(400).json({ error: 'Password must include at least one alphabet' });
    }
    
    if (!/[0-9]/.test(password)) {
      return res.status(400).json({ error: 'Password must include at least one number' });
    }
    
    if (!/[!@#$%^&*]/.test(password)) {
      return res.status(400).json({ error: 'Password must include at least one special character (!@#$%^&*)' });
    }
    
  
    next();
  };
  