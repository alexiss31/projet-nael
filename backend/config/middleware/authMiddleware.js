const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  // Sauter l'authentification pour les requêtes OPTIONS
  if (req.method === 'OPTIONS') {
    return next();
  }

  const authHeader = req.header('Authorization');
  console.log('Authorization Header:', authHeader);

  // Vérifie si l'en-tête Authorization existe
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Invalid or missing Authorization header.');
    return res.status(403).json({ message: 'Access denied. No token provided.' });
  }

  // Extraire le token
  const token = authHeader.split(' ')[1];
  if (!token) {
    console.log('No token found in Authorization header.');
    return res.status(403).json({ message: 'Access denied. Token missing.' });
  }

  try {
    // Vérifie et décode le token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Vérifie si l'utilisateur existe toujours
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    req.user = user; // Ajoute les données utilisateur réelles à la requête
    next(); // Passe à la prochaine étape
  } catch (error) {
    console.error('Token verification failed:', error);
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired.' });
    }
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Invalid token.' });
    }
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports = authenticateToken;