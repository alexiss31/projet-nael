import testImage from "../assets/test.jpg";
import { Link } from "react-router-dom";

const Checkout = () => {
  // Données de test
  const cartItems = [
    {
      id: 1,
      title: "Costume Classique",
      price: 499,
      quantity: 1,
      image: testImage,
      size: "52 EU"
    },
    {
      id: 2,
      title: "Ceinture en Cuir",
      price: 99,
      quantity: 2,
      image: testImage,
      size: "100 cm"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 29.90;
  const total = subtotal + shipping;

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Section Articles */}
          <div className="lg:col-span-2 space-y-8">
            <h1 className="font-playfair text-4xl italic text-gold-500 mb-8">Finalisation de commande</h1>

            {/* Liste des articles */}
            <div className="border border-charcoal-700 rounded-lg p-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-6 py-4 border-b border-charcoal-700 last:border-0">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border border-charcoal-700"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-platinum-300">{item.title}</h3>
                    <div className="text-sm text-platinum-400 mt-2">
                      <p>Taille : {item.size}</p>
                      <p>Quantité : {item.quantity}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gold-500 font-playfair text-xl">
                      {(item.price * item.quantity).toFixed(2)}€
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire de paiement */}
            <div className="border border-charcoal-700 rounded-lg p-6">
              <h2 className="text-xl text-platinum-300 mb-6">Informations de paiement</h2>
              <div className="grid gap-4">
                <input
                  type="text"
                  placeholder="Nom sur la carte"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
                />
                <input
                  type="text"
                  placeholder="Numéro de carte"
                  className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-lg px-4 py-3 focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Récapitulatif de commande */}
          <div className="border border-charcoal-700 rounded-lg p-6 h-fit sticky top-8">
            <h2 className="text-xl text-platinum-300 mb-6">Récapitulatif</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-platinum-400">Sous-total</span>
                <span className="text-platinum-300">{subtotal.toFixed(2)}€</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-platinum-400">Livraison</span>
                <span className="text-platinum-300">{shipping.toFixed(2)}€</span>
              </div>

              <div className="pt-4 border-t border-charcoal-700">
                <div className="flex justify-between text-lg">
                  <span className="text-platinum-300">Total</span>
                  <span className="text-gold-500 font-playfair">{total.toFixed(2)}€</span>
                </div>
              </div>

              <div className="pt-6">
                <Link to="/order-confirmation">
                <button className="w-full bg-gold-500 text-charcoal-900 py-4 rounded-lg font-medium hover:bg-gold-400 transition-colors">
                  Confirmer le paiement
                </button>
                </Link>
                
              </div>

              <div className="text-center mt-6">
                <div className="flex items-center justify-center gap-2 text-platinum-400 text-sm">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Paiement sécurisé SSL 256-bit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;