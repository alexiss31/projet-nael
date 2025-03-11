// hashPasswords.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

// Importer le modèle utilisateur
const User = require("./config/models/User"); // Assurez-vous que le chemin est correct

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch((err) => console.error("Erreur de connexion à MongoDB :", err));

const saltRounds = 10; // Vous pouvez ajuster le nombre de rounds

const hashPasswords = async () => {
  try {
    // Récupérer tous les utilisateurs
    const users = await User.find();
    for (const user of users) {
      // Vérifier si le mot de passe est déjà hashé (par exemple, un hash bcrypt commence généralement par "$2a$" ou "$2b$")
      if (user.password && !user.password.startsWith("$2a$") && !user.password.startsWith("$2b$")) {
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPassword;
        await user.save();
        console.log(`Mot de passe pour l'utilisateur ${user.email} mis à jour.`);
      } else {
        console.log(`Mot de passe pour l'utilisateur ${user.email} semble déjà hashé.`);
      }
    }
    console.log("Mise à jour de tous les mots de passe terminée.");
  } catch (err) {
    console.error("Erreur lors du hashage des mots de passe :", err);
  } finally {
    mongoose.connection.close();
  }
};

hashPasswords();
