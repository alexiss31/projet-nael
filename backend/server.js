// server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Charge les variables d'environnement
dotenv.config();

// Importer la fonction de connexion à la base de données
const connectDB = require("./config/db");

// Créer l'application Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend React
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// Routes de base
app.get("/", (req, res) => {
  res.send("Bienvenue dans l’API!");
});

app.get("/api/messages", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Utiliser les routes
app.use("/api/auth", require("./config/routes/auth"));
app.use("/api/user", require("./config/routes/user"));
app.use("/api/products", require("./config/routes/products"));
app.use("/api/events", require("./config/routes/events"));
app.use("/api/orders", require("./config/routes/orders"));
app.use('/api/categories', require('./config/routes/categories'));
app.use('/api/wishlist', require('./config/routes/wishlist'));

// Connexion à MongoDB
connectDB();

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur le port ${PORT}`);
});