import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Products from './pages/ProductDetails';
import HeroSlider from './components/HeroSlider';
import ProductSlider from './components/ProductSlider'; // <-- Import new component

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />

      {/* Show HeroSlider and ProductSlider only on the homepage */}
      {isHome && (
        <>
          <HeroSlider />
          <ProductSlider /> {/* <-- Add this here */}
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens/all" element={<Products category="mens" />} />
        <Route path="/ladies/all" element={<Products category="ladies" />} />
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;
