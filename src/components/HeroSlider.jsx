import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    type: 'image',
    src: 'https://crepdogcrew.com/cdn/shop/files/icepop__web_banner_1206.webp',
    link: '/somewhere-1',
  },
  {
    type: 'video',
    src: 'https://crepdogcrew.com/cdn/shop/videos/c/vp/2a44b05c28d24026a8892063a6a74758/2a44b05c28d24026a8892063a6a74758.HD-1080p-7.2Mbps-49049038.mp4',
    link: '/somewhere-2',
  },
  {
    type: 'image',
    src: 'https://crepdogcrew.com/cdn/shop/files/web_banner_c028fa1e-95d8-444a-ae81-2a0ca099b02d.png',
    link: '/somewhere-3',
  },
   {
    type: 'image',
    src: 'https://crepdogcrew.com/cdn/shop/files/web_banner_c028fa1e-95d8-444a-ae81-2a0ca099b02d.png',
    link: '/somewhere-3',
  },
  
];

const HeroSlider = () => (
  <div className="relative w-full h-screen overflow-hidden" style={{ marginTop: '64px' }}>
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ 
        delay: 6000,
        disableOnInteraction: false 
      }}
      loop={true}
      pagination={{ 
        clickable: true,
        el: '.custom-pagination',
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active'
      }}
      className="h-full w-full"
    >
      {slides.map((slide, i) => (
        <SwiperSlide key={i} className="relative">
          <a href={slide.link} className="block absolute inset-0">
            {slide.type === 'image' ? (
              <img
                src={slide.src}
                alt={`Slide ${i}`}
                className="absolute h-full w-full object-cover min-h-full min-w-full"
                style={{ objectPosition: 'center top' }}
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute h-full w-full object-cover min-h-full min-w-full"
                style={{ objectPosition: 'center top' }}
              />
            )}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Custom Pagination Container - Bottom Right */}
    <div className="custom-pagination absolute bottom-8 right-8 z-10"></div>

    <style jsx global>{`
      /* Reset Swiper styles */
      .swiper {
        margin-top: 0;
        height: 100vh;
      }
      
      /* Custom pagination styles */
      .custom-pagination {
        display: flex;
        justify-content: flex-end;
        width: auto !important;
        right: 32px !important;
        bottom: 32px !important;
        left: auto !important;
      }
      
      .custom-bullet {
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.5) !important;
        margin: 0 4px !important;
        transition: all 0.3s ease;
        border-radius: 50%;
        opacity: 1 !important;
      }
      
      .custom-bullet-active {
        background: white !important;
        width: 24px;
        border-radius: 4px;
      }
    `}</style>
  </div>
);

export default HeroSlider;