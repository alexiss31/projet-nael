// controllers/orderController.js
const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { products } = req.body; // attend un tableau d'objets { productId, quantity }
  try {
    const newOrder = new Order({
      userId: req.user.id, // req.user est défini dans le middleware d'authentification
      products,
    });
    await newOrder.save();
    res.status(201).json({ message: "Commande créée avec succès", orderId: newOrder._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrder = async (req, res) => {
  const { orderId } = req.params;
  try {
    const order = await Order.findById(orderId)
      .populate("userId", "email name")
      .populate("products.productId", "name price imageUrl");
    if (!order) return res.status(404).json({ message: "Commande non trouvée" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id; // ID utilisateur extrait du token
    console.log("User ID:", userId); // Log pour vérifier l'ID reçu

    const orders = await Order.find({ userId })
      .populate("products.productId", "name price imageUrl")
      .populate("userId", "email name");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "Aucune commande trouvée pour cet utilisateur.", orders: [] });
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


