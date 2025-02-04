// components/OrderConfirmation.jsx
import { Link } from "react-router-dom";
import testImage from "../assets/test.jpg";

const OrderConfirmation = () => {
  const order = {
    id: "CMD-284659",
    items: [
      { title: "Costume Classique", price: 499, quantity: 1, image: testImage },
      { title: "Ceinture en Cuir", price: 99, quantity: 2, image: testImage }
    ],
    total: 697.90,
    deliveryAddress: "24 Rue de l'Élégance, 75001 Paris",
    estimatedDelivery: "29 Octobre 2023"
  };

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="mb-12">
          <svg className="w-24 h-24 text-gold-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="font-playfair text-4xl italic text-gold-500 mt-6">
            Commande Confirmée
          </h1>
          <p className="text-platinum-400 mt-4">Référence : {order.id}</p>
        </div>

        <div className="border border-charcoal-700 rounded-lg p-6 text-left mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-lg text-gold-500 mb-4">Récapitulatif</h2>
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 py-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <p className="text-platinum-300">{item.title}</p>
                    <p className="text-platinum-400 text-sm">
                      {item.quantity}x {item.price}€
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg text-gold-500 mb-4">Livraison</h2>
              <p className="text-platinum-300">{order.deliveryAddress}</p>
              <p className="text-platinum-400 mt-2">Estimation : {order.estimatedDelivery}</p>
              <div className="mt-6 pt-4 border-t border-charcoal-700">
                <p className="text-xl text-gold-500 font-playfair">
                  Total : {order.total.toFixed(2)}€
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/account" 
            className="bg-gold-500/10 text-gold-500 px-6 py-3 rounded-lg hover:bg-gold-500/20 transition-colors"
          >
            Suivre ma commande
          </Link>
          <Link 
            to="/" 
            className="bg-gold-500 text-charcoal-900 px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;