const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/AuthController');
const { validateUser } = require('../middlewares/validationMiddleware');

// User registration route
router.post('/register', validateUser, register);

// User login route
router.post('/login', login);

module.exports = router;

