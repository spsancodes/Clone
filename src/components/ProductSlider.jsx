import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ProductsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const progressBarRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'ADIDAS SAMBA OG CREAM WHITE',
      color: 'SANDSTRATA (W)',
      price: '₹8,999',
      originalPrice: '₹14,000',
      image: 'https://crepdogcrew.com/cdn/shop/files/1_54a2e76a-5acf-4c17-9f5a-e5e77fba91b5.png?v=1749121363&width=600',
      hoverImage: 'https://crepdogcrew.com/cdn/shop/files/ADIDASSAMBAOGCREAMWHITESANDSTRATA_W_2.png?v=1749121363&width=600'
    },
    {
      id: 2,
      name: 'ADIDAS SAMBA OG CLOUD WHITE',
      color: 'CORE BLACK',
      price: '₹7,999',
      originalPrice: '₹11,000',
      image: 'https://crepdogcrew.com/cdn/shop/files/1_73b55fd3-8aa7-4a27-bad6-0eeb6555bbf6.png?v=1749203391&width=600',
      hoverImage: 'https://crepdogcrew.com/cdn/shop/files/2_6912eeb6-7588-495f-bd0d-a8dcac60c22f.png?v=1749203392&width=600'
    },
    // Add more products...
  ];

  const scrollToProduct = (index) => {
    if (sliderRef.current) {
      const productWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      sliderRef.current.scrollTo({
        left: index * productWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
      updateProgressBar(index);
    }
  };

  const updateProgressBar = (index) => {
    if (progressBarRef.current) {
      const progress = (index / (products.length - 1)) * 100;
      progressBarRef.current.style.width = `${progress}%`;
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollLeft;
      const productWidth = sliderRef.current.children[0]?.offsetWidth || 0;
      const newIndex = Math.round(scrollPosition / productWidth);
      setCurrentIndex(newIndex);
      updateProgressBar(newIndex);
    }
  };

  return (
    <section className="px-6 md:px-12 py-12">
      {/* Title with View All */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-end mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-bold">SNEAKERS</h2>
        <a href="/collections/sneakers" className="text-sm md:text-base underline hover:text-gray-600">
          VIEW ALL
        </a>
      </motion.div>

      {/* Products Slider */}
      <div className="relative">
        <div 
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scrollbar-hide space-x-6 py-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 w-64 md:w-80 relative group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Main Product Image */}
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Hover Image */}
                <img 
                  src={product.hoverImage} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-auto object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Shop Button */}
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mt-4">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.color}</p>
                <div className="flex items-center mt-2">
                  <span className="font-bold">{product.price}</span>
                  <span className="text-gray-400 line-through ml-2">{product.originalPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows and Progress Bar */}
        <div className="flex items-center justify-between mt-8">
          <button 
            onClick={() => scrollToProduct(Math.max(0, currentIndex - 1))}
            className="p-2 rounded-full hover:bg-gray-100"
            disabled={currentIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 mx-4 h-1 bg-gray-200 rounded-full">
            <div 
              ref={progressBarRef}
              className="h-full bg-black rounded-full"
              style={{ width: '0%' }}
            />
          </div>

          <button 
            onClick={() => scrollToProduct(Math.min(products.length - 1, currentIndex + 1))}
            className="p-2 rounded-full hover:bg-gray-100"
            disabled={currentIndex === products.length - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSlider;