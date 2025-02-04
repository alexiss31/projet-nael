import testImage from "../../../assets/test.jpg";

const Newsletter = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center">
      <section className="py-12 px-6 gap-[64px] flex justify-center items-center">
      {/* Newsletter Content */}
      <div className="max-w-lg text-center">
        <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mt-2">
          Get updates on new arrivals and special offers
        </p>

        {/* Email Input and Button */}
        <div className="mt-6 flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full border rounded-l-md focus:outline-none"
          />
          <button className="px-6 py-2 bg-black text-white rounded-r-md hover:bg-gray-800 transition">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="lg:block lg:w-3/4 text-center">
        <img
          src={testImage}
          alt="Newsletter"
          className="w-[520px] h-auto rounded-lg"
        />
      </div>
    </section>

    </div>
    
  );
};

export default Newsletter;
