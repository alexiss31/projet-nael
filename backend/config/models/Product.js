// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  stock: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: mongoose.Schema.Types.ObjectId, // Référence à Category
    ref: 'Category', 
    required: true 
  },
  imageUrl: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  discount: { 
    type: Number, 
    default: 0 
  }
});

module.exports = mongoose.model("Product", productSchema);