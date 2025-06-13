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
  FaChevronRight,
  FaArrowLeft
} from "react-icons/fa";

// Configuration for dropdown menus
const menuConfig = [
  {
    title: "MENS",
    items: [
      { label: "ALL PRODUCTS", path: "/mens/all-products" },
      { label: "NEW COLLECTION", path: "/mens/new-collection" },
      { label: "SHIRTS", path: "/mens/shirts" },
      { label: "T-SHIRTS", path: "/mens/t-shirts" },
      { label: "PANTS", path: "/mens/pants" },
      { label: "SHORTS", path: "/mens/shorts" },
    ]
  },
  {
    title: "LADIES",
    items: [
      { label: "ALL PRODUCTS", path: "/ladies/all-products" },
      { label: "NEW COLLECTION", path: "/ladies/new-collection" },
      { label: "SHIRTS", path: "/ladies/shirts" },
      { label: "T-SHIRTS", path: "/ladies/t-shirts" },
      { label: "PANTS", path: "/ladies/pants" },
      { label: "SKORTS", path: "/ladies/skorts" },
      { label: "SHORTS", path: "/ladies/shorts" },
    ]
  },
  {
    title: "TEENS",
    items: [
      { label: "ALL PRODUCTS", path: "/teens/all-products" },
      { label: "NEW COLLECTION", path: "/teens/new-collection" },
      { label: "SHIRTS", path: "/teens/shirts" },
      { label: "GRAPHIC TEES", path: "/teens/graphic-tees" },
      { label: "CARGO PANTS", path: "/teens/cargo-pants" },
      { label: "STREETWEAR", path: "/teens/streetwear" },
      { label: "CROP TOPS", path: "/teens/crop-tops" },
      { label: "HOODIE SETS", path: "/teens/hoodie-sets" },
    ]
  },
  {
    title: "CASUALS",
    items: [
      { label: "T-SHIRTS", path: "/casuals/t-shirts" },
      { label: "OVERSIZED FITS", path: "/casuals/oversized-fits" },
      { label: "JOGGERS", path: "/casuals/joggers" },
      { label: "HOODIES & SWEATSHIRTS", path: "/casuals/hoodies" },
      { label: "POLO SHIRTS", path: "/casuals/polo-shirts" },
      { label: "DENIM JACKETS", path: "/casuals/denim-jackets" },
    ]
  },
  {
    title: "SALE",
    items: [
      { label: "FLAT 50% OFF", path: "/sale/flat-50" },
      { label: "LAST SIZES LEFT", path: "/sale/last-sizes" },
      { label: "UNDER ₹999", path: "/sale/under-999" },
      { label: "BUNDLE OFFERS", path: "/sale/bundle-offers" },
      { label: "SEASONAL SALE", path: "/sale/seasonal" },
    ]
  },
  
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState(null);
  const navigate = useNavigate();

  const handleDropdownClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setCurrentMenu(null);
  };

  const showSubmenu = (menu) => {
    setCurrentMenu(menu);
  };

  const goBack = () => {
    setCurrentMenu(null);
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4 w-1/3 md:w-auto">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <FaBars size={24} />
          </button>
          <a href="/" className="text-xl md:text-2xl font-extrabold leading-tight tracking-wider">
            CREPDOG <br className="hidden md:block" /> CREW
          </a>
        </div>

        {/* Center: Menu - desktop only */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 flex-wrap gap-6 items-center text-sm uppercase font-semibold">
          {menuConfig.map((menu, index) => (
            <li key={index} className="relative group cursor-pointer">
              <div className="hover:text-gray-300 flex items-center gap-1">
                {menu.title}
                {menu.items.length > 0 && <span className="text-xs">▾</span>}
              </div>
              
              {menu.items.length > 0 && (
                <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto w-48 min-w-max py-1">
                  {menu.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="px-4 py-2 hover:bg-gray-100 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap"
                      style={{ transitionDelay: `${100 + itemIndex * 50}ms` }}
                      onClick={() => handleDropdownClick(item.path)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
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
          <div className="flex justify-between items-center mb-6">
            {currentMenu ? (
              <button onClick={goBack}>
                <FaArrowLeft size={24} />
              </button>
            ) : (
              <div></div> // Empty div for spacing
            )}
            <button onClick={() => {
              setIsOpen(false);
              setCurrentMenu(null);
            }}>
              <FaTimes size={24} />
            </button>
          </div>

          {!currentMenu ? (
            // Main menu view
            <ul className="space-y-6 text-xl font-semibold">
              {menuConfig.map((menu) => (
                <li 
                  key={menu.title}
                  className="flex justify-between items-center py-2 px-2 rounded hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    if (menu.items.length > 0) {
                      showSubmenu(menu);
                    } else {
                      handleDropdownClick(`/${menu.title.toLowerCase()}`);
                    }
                  }}
                >
                  <span>{menu.title}</span>
                  {menu.items.length > 0 && <FaChevronRight />}
                </li>
              ))}
            </ul>
          ) : (
            // Submenu view
            <div>
              <h2 className="text-2xl font-bold mb-6">{currentMenu.title}</h2>
              <ul className="space-y-4 text-lg">
                {currentMenu.items.map((item) => (
                  <li
                    key={item.label}
                    className="py-3 px-2 rounded hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleDropdownClick(item.path)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Social Icons (only show on main menu) */}
          {!currentMenu && (
            <div className="flex gap-6 text-2xl mt-12 ml-2">
              <FaFacebook />
              <FaInstagram />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};



export default Navbar;