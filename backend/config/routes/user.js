const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const User = require('../models/User');

// Route pour récupérer les infos de l'utilisateur connecté
router.get('/', authenticateToken, async (req, res) => {
  console.log("Utilisateur authentifié :", req.user);
  try {
    // req.user provient du token (souvent { id: ... })
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;