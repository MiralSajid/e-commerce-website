
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import CartPage from './pages/CartPage';



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        
        <Route
          path="/"
          element={
            <>
              
              <ProductGrid />
              <Testimonials />
            </>
          }
        />
       
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
