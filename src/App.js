import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Products from './pages/ProductDetails';
import HeroSlider from './components/HeroSlider';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />

      {/* Show HeroSlider only on the homepage */}
      {isHome && <HeroSlider />}

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
