import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const menuItems = [
  "MENS",
  "LADIES",
  "TEENS",
  "CASUALS",
  "SALE",
  "ACCESSORIES"
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">

        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4 w-1/3 md:w-auto">
          {/* Hamburger - mobile only */}
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <FaBars size={24} />
          </button>

          {/* Logo */}
          <a href="/" className="text-xl md:text-2xl font-extrabold leading-tight tracking-wider">
            CREPDOG <br className="hidden md:block" /> CREW
          </a>
        </div>

        {/* Center: Menu - desktop only */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-wrap gap-6 items-center text-sm uppercase font-semibold">




<li className="relative group cursor-pointer">
  <div className="hover:text-gray-300 flex items-center gap-1">
     MENS<span className="text-xs">▾</span>
  </div>
  <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto w-48 min-w-max py-1">
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[100ms] whitespace-nowrap" onClick={() => handleDropdownClick('/mens/all-products')}>ALL PRODUCTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[150ms] whitespace-nowrap" onClick={() => handleDropdownClick('/mens/all-products')}>NEW COLLECTION</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[200ms] whitespace-nowrap" onClick={() => handleDropdownClick('/mens/all-products')}>SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[250ms] whitespace-nowrap" onClick={() => handleDropdownClick('/mens/all-products')}>T-SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[300ms] whitespace-nowrap" onClick={() => handleDropdownClick('/mens/all-products')}>PANTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[350ms] whitespace-nowrap" onClick={() => handleDropdownClick('/mens/all-products')}>SHORTS</li>

  </ul>
</li>





<li className="relative group cursor-pointer">
  <div className="hover:text-gray-300 flex items-center gap-1">
     LADIES<span className="text-xs">▾</span>
  </div>
  <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto w-48 min-w-max py-1">
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[100ms] whitespace-nowrap">ALL PRODUCTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[150ms] whitespace-nowrap">NEW COLLECTION</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[200ms] whitespace-nowrap">SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[250ms] whitespace-nowrap">T-SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[300ms] whitespace-nowrap">PANTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[350ms] whitespace-nowrap">SKORTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[400ms] whitespace-nowrap">SHORTS</li>
  </ul>
</li>



<li className="relative group cursor-pointer">
  <div className="hover:text-gray-300 flex items-center gap-1">
     TEENS <span className="text-xs">▾</span>
  </div>
  <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto w-48 min-w-max py-1">
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[100ms] whitespace-nowrap">ALL PRODUCTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[150ms] whitespace-nowrap">NEW COLLECTION</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[200ms] whitespace-nowrap">SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[250ms] whitespace-nowrap">GRAPHIC TEES</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[300ms] whitespace-nowrap">CARGO PANTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[350ms] whitespace-nowrap">STREETWEAR</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[400ms] whitespace-nowrap">CROP TOPS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[450ms] whitespace-nowrap">HOODIE SETS</li>
  </ul>
</li>


<li className="relative group cursor-pointer">
  <div className="hover:text-gray-300 flex items-center gap-1">
     CASUALS <span className="text-xs">▾</span>
  </div>
  <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto w-48 min-w-max py-1">
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[100ms] whitespace-nowrap">T-SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[150ms] whitespace-nowrap">OVERSIZED FITS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[200ms] whitespace-nowrap">JOGGERS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[250ms] whitespace-nowrap">HOODIES & SWEATSHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[300ms] whitespace-nowrap">POLO SHIRTS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[350ms] whitespace-nowrap">DENIM JACKETS</li>
  </ul>
</li>

<li className="relative group cursor-pointer">
  <div className="hover:text-gray-300 flex items-center gap-1">
    SALE <span className="text-xs">▾</span>
  </div>
  <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto w-48 min-w-max py-1">
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[100ms] whitespace-nowrap">FLAT 50% OFF</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[150ms] whitespace-nowrap">LAST SIZES LEFT</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[200ms] whitespace-nowrap">UNDER ₹999</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[250ms] whitespace-nowrap">BUNDLE OFFERS</li>
    <li className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-[300ms] whitespace-nowrap">SEASONAL SALE</li>
  </ul>
</li>

        </ul>

        {/* Right: Icons */}
        <div className="flex gap-4 items-center w-1/3 justify-end">
          <FaSearch size={20} className="cursor-pointer" />
          <FaUser size={20} className="cursor-pointer" />
          <FaShoppingBag size={20} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black z-50 p-6 overflow-y-auto">
          {/* Close Button */}
          <div className="flex justify-between items-center mb-6">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          {/* Sidebar Menu */}
          <ul className="space-y-6 text-xl font-semibold">
            {menuItems.map((item) => (
              <li key={item} className="flex justify-between items-center">
                {item}
                <span className="text-xl">›</span>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl mt-12 ml-2">
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
