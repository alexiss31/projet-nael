import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/Home";
import Costumes from "./pages/Costumes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accessoires from "./pages/Accessoires";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import Account from "./components/Account";
import Login from "./components/Login";
import FAQ from "./pages/FAQ";
import Test from "./pages/Test";
import PrivateRoute from "./components/PrivateRoute"; // Importer PrivateRoute

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login"; // Cache Navbar & Footer sur /login

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

// Déclaration des PropTypes pour éviter l'erreur ESLint
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/costumes" element={<Costumes />} />
        <Route path="/accessoires" element={<Accessoires />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/account" element={<PrivateRoute element={<Account />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
