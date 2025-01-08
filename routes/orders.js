const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST route to create a new order
router.post('/', async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    // Create a new order
    const newOrder = new Order({ items, totalPrice });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// GET route to fetch all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
