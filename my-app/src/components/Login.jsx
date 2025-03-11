import { useState} from "react";
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password }); // Ajoutez cette ligne pour vérifier les données
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/account'); // Redirige vers la page du compte après la connexion
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-md mx-auto px-6 py-16">
        <h1 className="font-playfair text-4xl italic text-gold-500 text-center mb-8">
          Connexion
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-platinum-400 mb-2">Email</label>
            <input
              type="email"
              className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-platinum-400 mb-2">Mot de passe</label>
            <input
              type="password"
              className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
