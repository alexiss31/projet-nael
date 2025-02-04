// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Costumes from "./pages/Costumes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Accessoires from "./pages/Accessoires";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";
import Account from "./components/Account";
import Login from "./components/Login";
import FAQ from "./pages/FAQ"

const App = () => (
  
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/costumes" element={<Costumes />} />
      <Route path="/accessoires" element={<Accessoires />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<Login />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
    <Footer />
  </Router>
  
);

export default App;
