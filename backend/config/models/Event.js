// models/Event.js
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  // Ajoute d'autres champs si nécessaire
});

module.exports = mongoose.model("Event", eventSchema);
