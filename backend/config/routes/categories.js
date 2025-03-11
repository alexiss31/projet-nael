const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

// Récupérer toutes les catégories
router.get('/', categoryController.getCategories);

// Récupérer une catégorie par son ID
router.get('/:id', categoryController.getCategoryById);

// Créer une nouvelle catégorie
router.post('/', categoryController.createCategory);

// Mettre à jour une catégorie existante
router.put('/:id', categoryController.updateCategory);

// Supprimer une catégorie
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
