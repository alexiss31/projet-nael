import { Link } from "react-router-dom";
import testImage from "../assets/test.jpg";

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      title: "Montre Classique",
      price: "299€",
      collection: "Collection Héritage",
      tag: "New Arrival",
      image: testImage,
    },
    {
      id: 2,
      title: "Ceinture en Cuir",
      price: "99€",
      collection: "Essentiels",
      tag: "Best Seller",
      image: testImage,
    },
    // Ajouter au moins 9 éléments pour tester le responsive
    ...Array(7).fill({
      id: 3,
      title: "Portefeuille Élégant",
      price: "149€",
      collection: "Édition Limitée",
      tag: "Vintage Charm",
      image: testImage,
    }),
  ];

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      {/* Hero Section améliorée */}
      <div className="relative border-b border-charcoal-700">
        <div className="max-w-8xl mx-auto px-6 pt-[48px] pb-[48px]">
          <div className="text-center space-y-2">
            <h1 className="font-playfair text-5xl italic text-gold-500 leading-tight">
              L&apos;Art de
              <br className="hidden md:block animate-fade-in-down" /> Nos Accessoires
            </h1>
            <p className="text-platinum-400 max-w-2xl mx-auto text-lg">
              Des pièces raffinées pour compléter votre style - découvrez nos
              accessoires exclusifs
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de filtres (optionnel) */}
          <div className="lg:w-64 space-y-6">
            <div className="border border-charcoal-700 p-6 rounded-lg">
              <h3 className="text-gold-500 font-semibold mb-4">Filtrer par</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 hover:text-gold-500 cursor-pointer">
                  <input type="checkbox" className="accent-gold-500" />
                  <span>Collection Héritage</span>
                </div>
                <div className="flex items-center gap-2 hover:text-gold-500 cursor-pointer">
                  <input type="checkbox" className="accent-gold-500" />
                  <span>Essentiels</span>
                </div>
                <div className="flex items-center gap-2 hover:text-gold-500 cursor-pointer">
                  <input type="checkbox" className="accent-gold-500" />
                  <span>Édition Limitée</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grille de produits optimisée */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {accessories.map((accessory) => (
              <Link
                to={`/accessories/${accessory.id}`}
                key={accessory.id}
                className="group relative bg-charcoal-800 border border-charcoal-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold-500/30 hover:transform hover:-translate-y-1"
              >
                {/* Image produit */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={accessory.image}
                    alt={accessory.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                    {accessory.tag}
                  </span>
                </div>

                {/* Détails produit */}
                <div className="p-3 space-y-1">
                  <h3 className="font-semibold text-sm truncate">
                    {accessory.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-500 font-playfair text-md">
                      {accessory.price}
                    </span>
                    <button className="text-xs bg-gold-500/10 text-gold-500 px-2 py-1 rounded-full hover:bg-gold-500/20 transition-colors">
                      Acheter
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className="w-10 h-10 rounded-full bg-charcoal-800 border border-charcoal-700 hover:border-gold-500 text-sm transition-colors"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessories;