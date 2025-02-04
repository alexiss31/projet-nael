import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-charcoal-900/95 text-platinum-300 border-t border-charcoal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Boutique Info */}
          <div className="space-y-4 px-4 lg:border-r lg:border-charcoal-700">
            <h3 className="text-gold-500 text-lg font-semibold">À propos</h3>
            <div className="space-y-2 text-sm">
              <p>
                Næl propose des vêtements et accessoires de luxe pour des
                événements uniques.
              </p>
              <p>
                Service client 24/7 • Livraison offerte dès 300€ d&apos;achat.
              </p>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="px-4 lg:border-r lg:border-charcoal-700">
            <h3 className="text-gold-500 text-lg font-semibold mb-4">
              Liens rapides
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {[
                "/",
                "/costumes",
                "/accessoires",
                "/evenements",
                "/contact",
              ].map((path, index) => (
                <li key={index}>
                  <Link
                    to={path}
                    className="hover:text-gold-500 transition-colors duration-200 block"
                  >
                    {
                      [
                        "Accueil",
                        "Costumes",
                        "Accessoires",
                        "Événements",
                        "Contact",
                      ][index]
                    }
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Politiques */}
          <div className="px-4 lg:border-r lg:border-charcoal-700">
            <h3 className="text-gold-500 text-lg font-semibold mb-4">
              Nos politiques
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {["/livraison", "/cgv", "/confidentialite", "/faq"].map(
                (path, index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className="hover:text-gold-500 transition-colors duration-200 block"
                    >
                      {
                        [
                          "Livraison & Retours",
                          "Conditions Générales de Vente",
                          "Politique de Confidentialité",
                          "FAQ",
                        ][index]
                      }
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div className="px-4">
            <h3 className="text-gold-500 text-lg font-semibold mb-4">
              Suivez-nous
            </h3>
            <div className="flex space-x-6 justify-start md:justify-start">
              {[FaInstagram, FaFacebookF, FaTwitter, FaPinterestP].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-platinum-300 hover:text-gold-500 text-xl transition-colors duration-200"
                  >
                    <Icon />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-charcoal-700">
          <p className="text-center text-sm text-platinum-400">
            &copy; {new Date().getFullYear()} Næl. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
