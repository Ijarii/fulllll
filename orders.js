const express = require('express');
const router = express.Router();

let cart = []; // In-memory cart (replace with a database for production)

// Get cart
router.get('/', (req, res) => {
    res.json(cart);
});

// Add to cart
router.post('/', (req, res) => {
    const { id, name, price } = req.body;

    // Check if the item already exists in the cart
    const item = cart.find((item) => item.id === id);
    if (item) {
        item.quantity += 1; // Increment quantity
    } else {
        cart.push({ id, name, price, quantity: 1 }); // Add new item
    }

    res.json(cart);
});

// Clear cart
router.delete('/', (req, res) => {
    cart = [];
    res.json({ message: 'Cart cleared!' });
});

module.exports = router;
