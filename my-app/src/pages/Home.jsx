import WelcomeSection from "../components/Home/WelcomeSection/WelcomeSection";
import FeaturedProducts from "../components/Home/Product/FeaturedProducts";
import LatestTrends from "../components/Home/LatestTrends/LatestTrends";
import CustomerReviews from "../components/Home/CustomerReviews/CustomerReviews";
import Newsletter from "../components/Home/Newsletter/Newsletter";
import MapLocation from "../components/Home/MapLocation/MapLocation";

const Home = () => {
  return (
    <>
      <WelcomeSection />
      <FeaturedProducts />
      <LatestTrends />
      <CustomerReviews />
      <Newsletter />
      <MapLocation />
    </>
  );
};

export default Home;
