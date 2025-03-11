// routes/products.js
const express = require("express");
const router = express.Router();
const { getProducts, searchProducts } = require("../controllers/productController");

// Récupérer tous les produits
router.get("/", getProducts);

// Recherche de produits (exemple : /api/products/search?query=...)
router.get("/search", searchProducts);

module.exports = router;
