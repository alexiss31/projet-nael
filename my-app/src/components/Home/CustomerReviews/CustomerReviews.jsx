import { FaStar } from "react-icons/fa"; // Pour les étoiles
import testImage from "../../../assets/test.jpg";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      profilePic: testImage,
      stars: 5,
      review:
        "I absolutely love the necklace I bought! It's elegant and perfect for any occasion.",
    },
    {
      id: 2,
      name: "Jane Smith",
      profilePic: testImage,
      stars: 4,
      review: "Great quality products, the delivery came just as expected.",
    },
    {
      id: 3,
      name: "Michael Brown",
      profilePic: testImage,
      stars: 5,
      review:
        "Best purchase I've made this year! Highly recommend this store to everyone.",
    },
    {
      id: 4,
      name: "Jane Doe",
      profilePic: testImage,
      stars: 5,
      review:
        "Bought 3 items from this store they all so comfy! So happy with my purchase",
    },
    {
      id: 5,
      name: "John Does",
      profilePic: testImage,
      stars: 4,
      review:
        "Fast delivery and items matching the description. Encouraging whoever wants to buy on this store.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 border-b">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Customer Reviews</h2>
        <p className="text-gray-600 mt-2">
          See what our customers have to say about us
        </p>
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Write a Review
        </button>
      </div>

      {/* Reviews Grid */}
      <div
        className="mt-8 grid gap-6 
          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
          max-w-screen-2xl mx-auto"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col p-6 bg-white rounded-lg shadow-sm border transition 
              hover:shadow-lg hover:scale-105 duration-200"
          >
            {/* Profile and Name */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={review.profilePic}
                  alt={review.name}
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <p className="font-bold">{review.name}</p>
              </div>
              {/* Stars */}
              <div className="flex text-yellow-400">
                {Array.from({ length: review.stars }, (_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
            </div>
            {/* Review Text */}
            <p className="text-gray-600 mt-4">{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
