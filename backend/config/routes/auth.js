const express = require('express');
const router = express.Router();
const authController = require('../../config/controllers/authController'); // Ajustez le chemin si nécessaire

router.post('/login', authController.login);

module.exports = router;
