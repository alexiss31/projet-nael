// controllers/wishlistController.js
const Wishlist = require('../models/Wishlist');

exports.getWishlist = async (req, res) => {
  try {
    const userWishlist = await Wishlist.findOne({ userId: req.user.id }).populate('wishlist.productId');
    if (!userWishlist) {
      return res.status(404).json({ message: 'Wishlist non trouvée.' });
    }
    res.json(userWishlist);
  } catch (err) {
    console.error('Erreur lors de la récupération de la wishlist', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.addToWishlist = async (req, res) => {
  const { productId } = req.body;
  try {
    let userWishlist = await Wishlist.findOne({ userId: req.user.id });
    if (!userWishlist) {
      userWishlist = new Wishlist({ userId: req.user.id, wishlist: [] });
    }

    const productExists = userWishlist.wishlist.find(item => item.productId.toString() === productId);
    if (productExists) {
      return res.status(400).json({ message: 'Produit déjà présent dans la wishlist.' });
    }

    userWishlist.wishlist.push({ productId });
    await userWishlist.save();

    res.status(201).json({ message: 'Produit ajouté à la wishlist.', wishlist: userWishlist });
  } catch (err) {
    console.error('Erreur lors de l\'ajout du produit à la wishlist', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.body;
  try {
    const userWishlist = await Wishlist.findOne({ userId: req.user.id });
    if (!userWishlist) {
      return res.status(404).json({ message: 'Wishlist non trouvée.' });
    }

    userWishlist.wishlist = userWishlist.wishlist.filter(item => item.productId.toString() !== productId);
    await userWishlist.save();

    res.json({ message: 'Produit retiré de la wishlist.', wishlist: userWishlist });
  } catch (err) {
    console.error('Erreur lors du retrait du produit de la wishlist', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};