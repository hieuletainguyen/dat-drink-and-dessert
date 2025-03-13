const router = require('express').Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get cart items
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, name, price, quantity } = req.body;
    const user = await User.findById(req.user.id);

    const cartItemIndex = user.cart.findIndex(item => item.productId === productId);

    if (cartItemIndex > -1) {
      user.cart[cartItemIndex].quantity += quantity;
    } else {
      user.cart.push({ productId, name, price, quantity });
    }

    await user.save();
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 