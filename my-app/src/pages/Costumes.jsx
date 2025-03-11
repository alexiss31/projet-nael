import { Link } from "react-router-dom";
import testImage from "../assets/test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Costumes = () => {
  const costumes = [
    {
      id: 1,
      title: "Costume Classique",
      price: "499€",
      collection: "Collection Héritage",
      tag: "New Arrival",
      image: testImage,
    },
    {
      id: 2,
      title: "Costume Moderne",
      price: "599€",
      collection: "Nouvelle Vague",
      tag: "Best Seller",
      image: testImage,
    },
    ...Array(7).fill({
      id: 3,
      title: "Costume Luxe",
      price: "799€",
      collection: "Édition Limitée",
      tag: "Vintage Charm",
      image: testImage,
    }),
  ];

  return (
    <div className="bg-charcoal-900 min-h-screen text-platinum-300">
      {/* Hero Section */}
      <div className="relative border-b border-charcoal-700">
        <div className="max-w-8xl mx-auto px-6 pt-[48px] pb-[48px]">
          <div className="text-center space-y-2">
            <h1 className="font-playfair text-5xl italic text-gold-500 leading-tight animate-fade-in-down">
              L&apos;Art de la
              <br className="hidden md:block" /> Silhouette Masculine
            </h1>
            <p className="text-platinum-400 max-w-2xl mx-auto text-lg">
              Des lignes épurées, des matières nobles - redéfinissez votre
              élégance à travers nos collections exclusives
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-8xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="border border-charcoal-700 p-6 rounded-lg">
              <h3 className="text-gold-500 font-semibold mb-4">Filtrer par</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 hover:text-gold-500 cursor-pointer">
                  <input type="checkbox" className="accent-gold-500" />
                  <span>Collection Héritage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grille de produits */}
          <div className="flex-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 relative">
            {costumes.map((costume) => (
              <Link
                to={`/costumes/${costume.id}`}
                key={costume.id}
                className="group relative bg-charcoal-800 border border-charcoal-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-gold-500/30 hover:-translate-y-1"
              >
                {/* Coeur Wishlist sans group-hover */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // Ajouter la logique wishlist ici
                  }}
                  className="absolute flex items-center justify-center top-2 left-2 z-10 p-2 bg-charcoal-900/50 rounded-full backdrop-blur-sm transition-all hover:bg-red-500/20"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="w-6 h-6 text-white text-center transition-all duration-300 hover:text-red-500"
                  />
                </button>

                {/* Image avec overlay */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={costume.image}
                    alt={costume.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                    {costume.tag}
                  </span>
                </div>

                {/* Détails produit */}
                <div className="p-3 space-y-1">
                  <h3 className="font-semibold text-sm truncate">
                    {costume.title}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gold-500 font-playfair text-md">
                      {costume.price}
                    </span>
                    <button className="text-xs bg-gold-500/10 text-gold-500 px-2 py-1 rounded-full hover:bg-gold-500/20 transition-colors">
                      Configurer
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

export default Costumes;
