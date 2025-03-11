import { useEffect, useState } from 'react';

const Account = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);  // Ajout de setWishlistItems
  const [activeTab, setActiveTab] = useState('orders');

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      console.log('Token utilisé :', token);
  
      if (!token) {
        console.error('Aucun token trouvé dans le localStorage.');
        return;
      }
  
      try {
        const response = await fetch('http://localhost:5000/api/user', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
  
        if (!response.ok) {
          throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
  
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des informations utilisateur:', error);
      }
    };

    const fetchUserOrders = async () => {
      const token = localStorage.getItem("token"); // Récupère le token de l'utilisateur connecté
      try {
        const response = await fetch("http://localhost:5000/api/orders", {
          headers: {
            Authorization: `Bearer ${token}`, // Ajoute le token dans l'en-tête
          },
        });
    
        if (!response.ok) {
          throw new Error(`Erreur HTTP ${response.status}`); // Gère les erreurs éventuelles
        }
    
        const data = await response.json(); // Récupère les commandes
        setOrders(data); // Mets à jour l'état avec les données des commandes
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    };

    const fetchWishlist = async () => {
      const token = localStorage.getItem('token');
      try {
        const response = await fetch('http://localhost:5000/api/wishlist/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Erreur HTTP lors de la récupération de la wishlist');
        }
        const data = await response.json();
        setWishlistItems(data); // Mets à jour l'état avec les éléments de la wishlist
      } catch (error) {
        console.error('Erreur lors de la récupération de la wishlist:', error);
      }
    };

    fetchUserData();
    fetchUserOrders();
    fetchWishlist(); // Appel de fetchWishlist

  }, []); // Ce tableau vide assure que l'appel de ces fonctions n'a lieu qu'une seule fois

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-64 space-y-2">
            <div className="border-l-4 border-gold-500 pl-4 mb-6 animate-slide-in-right">
              <h2 className="font-playfair text-2xl italic text-gold-500">Mon Compte</h2>
              <p className="text-sm text-platinum-400">Bienvenue, {user ? user.name : 'Invité'}</p>
            </div>
            <button onClick={() => setActiveTab('orders')} className={`w-full text-left p-3 rounded-lg ${activeTab === 'orders' ? 'bg-charcoal-800 text-gold-500' : 'hover:bg-charcoal-800'}`}>
              Mes Commandes
            </button>
            <button onClick={() => setActiveTab('wishlist')} className={`w-full text-left p-3 rounded-lg ${activeTab === 'wishlist' ? 'bg-charcoal-800 text-gold-500' : 'hover:bg-charcoal-800'}`}>
              Ma Liste de Souhaits
            </button>
            <button onClick={handleLogout} className="w-full text-left p-3 rounded-lg hover:bg-charcoal-800">
              Déconnexion
            </button>
          </div>

          <div className="flex-1">
            {activeTab === 'orders' && (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="bg-charcoal-800 p-4 rounded-lg">
                    <p>Commande #{order.id}</p>
                    <p>Statut: {order.status}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="relative group bg-charcoal-800 rounded-lg border border-charcoal-700 p-4">
                    <WishlistHeart item={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const WishlistHeart = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="absolute top-2 right-2 z-10 p-2 bg-charcoal-900/50 rounded-full backdrop-blur-sm"
    >
      <svg
        className={`w-6 h-6 transition-colors ${isLiked ? 'text-red-500 fill-current' : 'text-platinum-400'}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
};

export default Account;
