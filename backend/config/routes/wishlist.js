// routes/wishlistRoutes.js
const express = require('express');
const router = express.Router();
const { getWishlist, addToWishlist, removeFromWishlist } = require('../controllers/wishlistController');
const authenticateToken = require('../middleware/authMiddleware');

// Récupérer la wishlist
router.get('/', authenticateToken, getWishlist);

// Ajouter un produit à la wishlist
router.post('/', authenticateToken, addToWishlist);

// Retirer un produit de la wishlist
router.delete('/', authenticateToken, removeFromWishlist);

module.exports = router;