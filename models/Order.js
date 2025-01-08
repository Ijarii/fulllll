const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,     // Name of the food item
      price: Number,    // Price of the food item
      quantity: Number, // Quantity of the food item in the cart
    },
  ],
  totalPrice: { type: Number, required: true },  // Total price for the order
  createdAt: { type: Date, default: Date.now },   // Date and time when the order was placed
});

// Create and export the Order model
module.exports = mongoose.model('Order', orderSchema);
