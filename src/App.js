import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Products from './pages/ProductDetails';
// Import other pages/components as needed

function App() {
  return (
    <>
      <Navbar />
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