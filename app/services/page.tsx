'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/spa/ServiceCard';
import { services } from '@/data/services';

const categories = [
  { id: 'all', name: 'All Services', count: services.length },
  { id: 'facial', name: 'Facial Treatments', count: services.filter(s => s.category === 'facial').length },
  { id: 'massage', name: 'Massage', count: services.filter(s => s.category === 'massage').length },
  { id: 'body-treatment', name: 'Body Treatments', count: services.filter(s => s.category === 'body-treatment').length },
  { id: 'hair-spa', name: 'Hair Spa', count: services.filter(s => s.category === 'hair-spa').length },
  { id: 'nail-care', name: 'Nail Care', count: services.filter(s => s.category === 'nail-care').length },
  { id: 'waxing', name: 'Hair Removal', count: services.filter(s => s.category === 'waxing').length },
];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(s => s.category === selectedCategory);
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Discover premium beauty and relaxation treatments designed just for you
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section padding="xl" background="white">
        <Container>
          {/* Category Filter */}
          <div className="mb-12">
            {/* Mobile Dropdown */}
            <div className="md:hidden mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none bg-white font-medium"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const isActive = selectedCategory === category.id;
                
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-full border-2 transition-all font-medium ${
                      isActive 
                        ? 'border-primary-500 bg-primary-500 text-white shadow-md' 
                        : 'border-gray-200 text-gray-700 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    {category.name} <span className={isActive ? 'text-white/80' : 'text-gray-400'}>({category.count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No services found in this category.</p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient-secondary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Need Service Consultation?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for free consultation about the perfect treatment for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_RAW || '+1234567890'}`} className="inline-block">
                <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all shadow-md hover:shadow-lg">
                  Call Now: {process.env.NEXT_PUBLIC_PHONE || '+1 (234) 567-890'}
                </button>
              </a>
              <a href="/contact" className="inline-block">
                <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition-all border-2 border-primary-500">
                  Contact via Form
                </button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

