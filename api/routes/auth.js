const express = require('express');
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetpassword
} = require('../controllers/auth');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetpassword);

module.exports = router;
