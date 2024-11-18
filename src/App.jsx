import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from './pages/Products';
const App = () => {
  return (
    <Router>
    <div>
    <Navbar />
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Products" element={<Products />} />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductGrid />
              <Testimonials />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
