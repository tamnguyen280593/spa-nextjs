'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface HeroSlide {
  id: string;
  image: string;
  title: string;
  highlight: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: '1',
    image: '/images/hero-1.jpg',
    title: 'Beauty & Relaxation',
    highlight: 'Perfected',
    description: 'Experience premium spa services with specialized skincare treatments and luxury beauty products',
    primaryCta: {
      text: 'Book Appointment',
      href: '/booking',
    },
    secondaryCta: {
      text: 'Explore Services',
      href: '/services',
    },
  },
  {
    id: '2',
    image: '/images/hero-2.jpg',
    title: 'Luxury Spa',
    highlight: 'Experience',
    description: 'Indulge in our world-class treatments designed to rejuvenate your body, mind, and spirit',
    primaryCta: {
      text: 'View Treatments',
      href: '/services',
    },
    secondaryCta: {
      text: 'Learn More',
      href: '/about',
    },
  },
  {
    id: '3',
    image: '/images/hero-3.jpg',
    title: 'Premium Skincare',
    highlight: 'Products',
    description: 'Discover our curated collection of luxury skincare products for radiant, healthy skin',
    primaryCta: {
      text: 'Shop Now',
      href: '/products',
    },
    secondaryCta: {
      text: 'View Collection',
      href: '/products',
    },
  },
];

export const HeroSwiper: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        loop={true}
        className="hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              </div>
              
              <Container className="relative h-full">
                <div className="flex items-center h-full">
                  <div className="max-w-2xl text-white animate-fade-in">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
                      {slide.title} <span className="text-accent-400">{slide.highlight}</span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Link href={slide.primaryCta.href}>
                        <Button variant="accent" size="lg" className="sm:!px-8 sm:!py-4 sm:!text-xl">
                          {slide.primaryCta.text}
                        </Button>
                      </Link>
                      <Link href={slide.secondaryCta.href}>
                        <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 sm:!px-8 sm:!py-4 sm:!text-xl">
                          {slide.secondaryCta.text}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl !left-4 lg:!left-8 !bg-white/20 !backdrop-blur-sm !rounded-full hover:!bg-white/30 transition-all" />
      <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl !right-4 lg:!right-8 !bg-white/20 !backdrop-blur-sm !rounded-full hover:!bg-white/30 transition-all" />

      <style jsx global>{`
        .hero-swiper .swiper-pagination {
          bottom: 2rem !important;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: #10b981;
        }

        .swiper-button-prev,
        .swiper-button-next {
          transition: all 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

