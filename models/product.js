// Import the mongoose library
const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  // Add more fields as needed
});

// Create a Product model based on the product schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model
module.exports = Product;
