// controllers/productController.js
const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchProducts = async (req, res) => {
  const { query } = req.query;
  try {
    const regex = new RegExp(query, "i"); // recherche insensible à la casse
    const results = await Product.find({ name: regex });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
