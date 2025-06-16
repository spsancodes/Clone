import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    type: 'image-responsive',
    mobileSrc: 'https://crepdogcrew.com/cdn/shop/files/icepop__mobile_banner_1206.webp?v=1749800209&width=600',
    desktopSrc: 'https://crepdogcrew.com/cdn/shop/files/icepop__web_banner_1206.webp?width=1400',
    link: '/somewhere-1',
  },
  {
    type: 'video-responsive',
    mobileSrc: 'https://crepdogcrew.com/cdn/shop/videos/c/vp/2a44b05c28d24026a8892063a6a74758/2a44b05c28d24026a8892063a6a74758.HD-1080p-7.2Mbps-49049038.mp4',
    desktopSrc: 'https://crepdogcrew.com/cdn/shop/videos/c/vp/f616d2ed70a24e98b0035a0f4246babc/f616d2ed70a24e98b0035a0f4246babc.HD-1080p-7.2Mbps-49048993.mp4',
    link: '/somewhere-2',
  },
  {
    type: 'image-responsive',
    mobileSrc: 'https://crepdogcrew.com/cdn/shop/files/PIC_MOBILE_BANNER_1306.webp?v=1749903974&width=600',
    desktopSrc: 'https://crepdogcrew.com/cdn/shop/files/PIC_WEB_BANNER_1306.webp?width=1400',
    link: '/somewhere-3',
  },
  {
    type: 'image-responsive',
    mobileSrc: 'https://crepdogcrew.com/cdn/shop/files/be__mobile_banner_0906.webp?v=1749479143&width=600',
    desktopSrc: 'https://crepdogcrew.com/cdn/shop/files/be__web_banner_0906.webp?width=1400',
    link: '/somewhere-4',
  },
];

const HeroSlider = () => (

  <div className="relative w-full h-screen overflow-hidden" style={{ marginTop: '64px' }}>
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      autoplay={{ 
        delay: 10000, // Changed from 8000 to 10000 (10 seconds)
        disableOnInteraction: false 
      }}
      speed={200}
      effect="fade"
      fadeEffect={{ crossFade: true }}
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
            {slide.type === 'image-responsive' ? (
              <>
                {/* Mobile Image */}
                <img
                  src={slide.mobileSrc}
                  alt={`Slide ${i}`}
                  className="absolute h-full w-full object-cover min-h-full min-w-full md:hidden"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Desktop Image */}
                <img
                  src={slide.desktopSrc}
                  alt={`Slide ${i}`}
                  className="absolute h-full w-full object-cover min-h-full min-w-full hidden md:block"
                  style={{ objectPosition: 'center top' }}
                />
              </>
            ) : slide.type === 'video-responsive' ? (
              <>
                {/* Mobile Video */}
                <video
                  key={`mobile-${i}`}
                  src={slide.mobileSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute h-full w-full object-cover min-h-full min-w-full md:hidden"
                  style={{ objectPosition: 'center top' }}
                />
                {/* Desktop Video */}
                <video
                  key={`desktop-${i}`}
                  src={slide.desktopSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute h-full w-full object-cover min-h-full min-w-full hidden md:block"
                  style={{ objectPosition: 'center top' }}
                />
              </>
            ) : null}
          </a>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="custom-pagination absolute bottom-8 right-8 z-10"></div>
    <div className="scroll-buffer"></div>

    <style jsx global>{`
      .swiper {
        margin-top: 0;
        height: 100vh;
      }
      .scroll-buffer {
        height: 100vh;
      }
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
        padding: 2px;
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