// routes/events.js
const express = require("express");
const router = express.Router();
const { getEvents } = require("../controllers/eventController");

// Récupérer tous les événements
router.get("/", getEvents);

module.exports = router;
