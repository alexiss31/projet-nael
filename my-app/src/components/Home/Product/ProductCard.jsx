const ProductCard = ({ image, title, price, tag, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {tag && (
          <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4 text-center">
        <p className="text-gray-500 mb-2">{description}</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold text-gray-800">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;