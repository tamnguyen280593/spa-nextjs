import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { ServiceCard } from '@/components/spa/ServiceCard';
import { ProductCard } from '@/components/spa/ProductCard';
import { TestimonialCard } from '@/components/spa/TestimonialCard';
import { HeroSwiper } from '@/components/home/HeroSwiper';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import { features } from '@/data/features';

export default function HomePage() {
  const featuredServices = services.filter(s => s.featured).slice(0, 3);
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <MainLayout>
      {/* Hero Section with Swiper */}
      <Section padding="none" background="white" className="relative overflow-hidden">
        <HeroSwiper />
      </Section>

      {/* Features Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <feature.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Featured Services Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular treatments at LuxeSpa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} variant="featured" />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Products Section */}
      <Section padding="xl" background="gradient-secondary">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Premium Skincare Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated collection of skincare products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button variant="outline" size="lg" icon={<ArrowRight size={20} />} iconPosition="right">
                Explore Products
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thousands of satisfied customers with LuxeSpa services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="xl" background="gradient-primary">
        <Container>
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-12 lg:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-float" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '1s' }} />
            
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                Ready for the Experience?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Book your appointment today and receive special offers for new customers
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Link href="/booking">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-gray-50 text-primary-700 hover:bg-gray-50 hover:shadow-lg transition-all sm:!px-8 sm:!py-4 sm:!text-xl font-semibold"
                  >
                    Book Now
                  </Button>
                </Link>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_RAW || '+1234567890'}`}>
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    icon={<Phone size={20} />} 
                    className="text-white border-2 border-white/80 hover:bg-white/20 hover:border-white transition-all sm:!px-8 sm:!py-4 sm:!text-xl"
                  >
                    Call: {process.env.NEXT_PUBLIC_PHONE || '+1 (234) 567-890'}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
