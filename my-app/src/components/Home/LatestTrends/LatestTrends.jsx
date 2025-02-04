import { Link } from "react-router-dom";
import testImage from "../../../assets/test.jpg";

const LatestTrends = () => {
  const blogPosts = [
    {
      id: 1,
      image: testImage,
      title: "The Art of Layering",
      subtitle: "Master the trend with our expert tips",
      link: "/blog/layering",
    },
    {
      id: 2,
      image: testImage,
      title: "Timeless Accessories",
      subtitle: "How to elevate your style effortlessly",
      link: "/blog/accessories",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50 border-b">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Latest Trends</h2>
        <p className="text-gray-600 mt-2">
          Stay ahead of the fashion curve with our curated content
        </p>
        <Link to="/blog">
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
            Read More
          </button>
        </Link>
      </div>

      {/* Blog Cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="flex border p-4 bg-white rounded-lg shadow-sm"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-36 h-36 object-cover rounded-lg"
            />
            <div className="ml-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.subtitle}</p>
              <Link to={post.link}>
                <button className="mt-3 text-blue-600 hover:underline">
                  Read Article
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestTrends;
