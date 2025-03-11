import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineUser,
  HiSearch,
  HiX,
} from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // État pour gérer l'ouverture du panier

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        className={`bg-charcoal-800 text-gold-500 text-xs py-2 text-center border-b border-charcoal-600 ${
          isCartOpen ? "backdrop-blur-sm" : ""
        }`}
      >
        Livraison offerte dès 300€ d&apos;achat • Service client 24/7
        <button className="ml-4 text-gold-400 hover:text-gold-300">×</button>
      </div>

      {/* Flou sur tout le site lorsque le panneau est ouvert */}
      {isCartOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-40"></div>
      )}

      {/* Navbar avec flou conditionnel */}
      <nav
        className={`sticky w-full left-0 bg-charcoal-900/95 backdrop-blur-md z-50 border-b border-charcoal-700 animate-fade-in-down ${
          isCartOpen ? "backdrop-blur-sm" : ""
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Luxe */}
            <Link
              to="/"
              className="font-playfair text-3xl italic text-gold-500 hover:text-gold-400 transition-colors relative group"
            >
              Næl
              <span className="absolute bottom-0 left-0 w-full h-px bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>

            {/* Navigation Centrale */}
            <div className="lg:flex space-x-10">
              {[
                { label: "Accueil", path: "/" },
                { label: "Costumes", path: "/costumes" },
                { label: "Accessoires", path: "/accessoires" },
                { label: "Événements", path: "/events" },
                { label: "Contact", path: "/contact" },
              ].map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-platinum-300 hover:text-gold-500 uppercase text-sm tracking-widest font-light transition-all transform hover:scale-105 group relative hover:scale-105 duration-250"
                >
                  {label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gold-500 transition-all group-hover:w-full group-hover:left-0"></span>
                </Link>
              ))}
            </div>
            

            {/* Actions Droite */}
            <div className="flex items-center space-x-6">
              <div className="relative lg:flex items-center">
                <HiSearch
                  className="text-platinum-400 absolute left-3"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Recherche sur-mesure..."
                  className="bg-charcoal-800/50 border border-charcoal-600 rounded-full pl-10 pr-4 py-2 w-64 text-sm text-platinum-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all"
                />
              </div>

              <div className="flex space-x-5">
                <Link
                  to="/account"
                  className="text-platinum-300 hover:text-gold-500 p-2 rounded-full hover:bg-charcoal-700/30 transition-all relative"
                >
                  <HiOutlineUser size={22} />
                </Link>

                {/* Bouton Panier */}
                <button
                  onClick={() => setIsCartOpen(true)} // Ouvre le panneau du panier
                  className="text-platinum-300 hover:text-gold-500 p-2 rounded-full hover:bg-charcoal-700/30 transition-all relative"
                >
                  <HiOutlineShoppingBag size={22} />
                  <span className="absolute -top-1 -right-1 bg-gold-500 text-charcoal-900 text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>

              {/* Menu Mobile */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden text-platinum-300 hover:text-gold-500 p-2"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-charcoal-900/95 z-50 backdrop-blur-sm animate-fade-in">
            <div className="flex flex-col items-center pt-24 space-y-8 text-xl">
              {[
                "Accueil",
                "Couture",
                "Accessoires",
                "Événements",
                "Contact",
              ].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-platinum-300 hover:text-gold-500 py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-8 right-8 text-platinum-300 hover:text-gold-500"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Panneau latéral du panier */}
      {isCartOpen && (
        <>
          {/* Panneau du panier */}
          <div
            className={`fixed top-0 right-0 w-2/10 max-h-auto bg-charcoal-800/50 backdrop-blur-md z-50 border-l border-charcoal-700 animate-slide-in-right flex flex-col ${
              isCartOpen ? "animate-slide-in-right" : "animate-slide-out-right"
            } h-screen flex flex-col`}
          >
            {/* En-tête du panier */}
            <div className="flex justify-between items-center p-6 border-b border-charcoal-700">
              <h2 className="text-gold-500 text-lg font-semibold">Panier</h2>
              <button
                onClick={() => setIsCartOpen(false)} // Ferme le panneau
                className="text-platinum-300 hover:text-gold-500"
              >
                <HiX size={24} />
              </button>
            </div>

            {/* Contenu du panier */}
            <div className="flex-1 p-6">
              <p className="text-platinum-300 text-sm">
                Votre panier est vide.
              </p>
              {/* Ici, vous pouvez ajouter la liste des articles du panier */}
            </div>

            {/* Boutons d'action */}
            <div className="p-6 border-t border-charcoal-700 space-y-4">
              <Link to="order-confirmation">
              <button className="w-full bg-gold-500 text-charcoal-900 py-2 rounded-full hover:bg-gold-400 transition-colors">
                Passer au paiement
              </button>
              </Link>
              <button className="w-full bg-transparent border border-charcoal-600 text-platinum-300 py-2 rounded-full hover:bg-charcoal-700/30 transition-colors">
                Annuler la commande
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
