const express = require("express");
const router = express.Router();
const { createOrder, getOrder, getUserOrders } = require("../controllers/orderController");
const authenticateToken = require('../middleware/authMiddleware');

// Créer une commande (checkout)
router.post("/", authenticateToken, createOrder);

// Récupérer toutes les commandes de l'utilisateur connecté (DOIT ÊTRE AVANT :orderId)
router.get("/", authenticateToken, getUserOrders);

// Récupérer une commande spécifique via son ID
router.get("/:orderId", authenticateToken, getOrder);

module.exports = router;