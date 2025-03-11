// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  products: [{
    productId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Product' 
    },
    quantity: { 
      type: Number, 
      required: true 
    }
  }],
  totalPrice: { 
    type: Number, 
    required: true 
  },
  paymentStatus: { 
    type: String, 
    default: 'En attente', 
    enum: ['payé', 'En attente', 'échoué'] 
  },
  status: { 
    type: String, 
    default: 'En préparation', 
    enum: ['Expédié', 'En préparation', 'Livré'] 
  },
  deliveryAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true }, // String pour gérer les codes comme "75001"
    country: { type: String, required: true }
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Order", orderSchema);