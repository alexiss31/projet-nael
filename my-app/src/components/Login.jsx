// components/Login.jsx
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-md mx-auto px-6 py-16">
        <h1 className="font-playfair text-4xl italic text-gold-500 text-center mb-8">
          Connexion
        </h1>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-platinum-400 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
            />
          </div>
          
          <div>
            <label className="block text-sm text-platinum-400 mb-2">Mot de passe</label>
            <input
              type="password"
              className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
            />
          </div>

          <button className="w-full bg-gold-500 text-charcoal-900 py-3 rounded-lg hover:bg-gold-400 transition-colors">
            Se connecter
          </button>

          <div className="text-center text-platinum-400 text-sm">
            Nouveau client ?{' '}
            <Link to="/register" className="text-gold-500 hover:text-gold-400">
              Créer un compte
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;