import ProductCard from "./ProductCard";
import testImage from "../../../assets/test.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: testImage,
      title: "Golden Bliss Necklace",
      price: "$99",
      tag: "New Arrival",
      description: "Elegance at its best",
    },
    {
      id: 2,
      image: testImage,
      title: "Crystal Earrings",
      price: "$49",
      tag: "Best Seller",
      description: "Shine Bright",
    },
    {
      id: 3,
      image: testImage,
      title: "Retro Sunglasses",
      price: "$79",
      tag: "Vintage Charm",
      description: "Vintage Charm",
    },
    {
      id: 4,
      image: testImage,
      title: "Rose Garden Hairpin",
      price: "$29",
      tag: "Floral Beauty",
      description: "Floral Beauty",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto text-center py-16 border-b">
      <h2 className="text-3xl font-bold mb-2">Produits Phares</h2>
      <p className="text-gray-500 mb-6">
        Découvrez notre sélection triée sur le volet de la saison
      </p>
      <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition mb-8">
        Découvrez nos produits
      </button>

      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
