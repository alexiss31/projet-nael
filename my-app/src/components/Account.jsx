// components/Account.jsx
import { useState } from 'react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const wishlistItems = [/*...*/];

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-2">
            <div className="border-l-4 border-gold-500 pl-4 mb-6">
              <h2 className="font-playfair text-2xl italic text-gold-500">Mon Compte</h2>
              <p className="text-sm text-platinum-400">Bienvenue, John</p>
            </div>
            <button onClick={() => setActiveTab('orders')} className={`w-full text-left p-3 rounded-lg ${activeTab === 'orders' ? 'bg-charcoal-800 text-gold-500' : 'hover:bg-charcoal-800'}`}>
              Mes Commandes
            </button>
            <button onClick={() => setActiveTab('wishlist')} className={`w-full text-left p-3 rounded-lg ${activeTab === 'wishlist' ? 'bg-charcoal-800 text-gold-500' : 'hover:bg-charcoal-800'}`}>
              Ma Liste de Souhaits
            </button>
            {/* ... autres onglets */}
          </div>

          {/* Contenu */}
          <div className="flex-1">
            {activeTab === 'orders' && (
              <div className="space-y-6">
                {/* Liste des commandes */}
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="relative group bg-charcoal-800 rounded-lg border border-charcoal-700 p-4">
                    <WishlistHeart item={item} />
                    {/* ... reste de la card produit */}
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

// Composant WishlistHeart réutilisable
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