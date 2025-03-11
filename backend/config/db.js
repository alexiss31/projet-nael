// config/db.js
const mongoose = require("mongoose");
const User = require("./models/User");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connecté à MongoDB");

    // Une fois connecté, tester la récupération d'un utilisateur
    const user = await User.findOne();
    if (user) {
      console.log("👤 Utilisateur trouvé :", user);
    } else {
      console.log("⚠️ Aucun utilisateur trouvé.");
    }
  } catch (err) {
    console.error("❌ Erreur de connexion MongoDB:", err);
    process.exit(1); // Arrête l'exécution en cas d'erreur
  }
};

module.exports = connectDB;
