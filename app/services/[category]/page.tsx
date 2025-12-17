'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ServiceCard } from '@/components/spa/ServiceCard';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { ServiceCategory } from '@/types';

const categoryInfo: Record<string, { title: string; description: string }> = {
  facial: {
    title: 'Facial Treatments',
    description: 'Professional facial treatments for healthy, glowing skin',
  },
  massage: {
    title: 'Massage Therapy',
    description: 'Relax and rejuvenate with our expert massage services',
  },
  'body-treatment': {
    title: 'Body Treatments',
    description: 'Luxurious body treatments for complete wellness',
  },
  'hair-spa': {
    title: 'Hair Spa',
    description: 'Nourishing treatments for healthy, beautiful hair',
  },
  'nail-care': {
    title: 'Nail Care',
    description: 'Premium manicure and pedicure services',
  },
  waxing: {
    title: 'Hair Removal',
    description: 'Professional waxing and hair removal services',
  },
};

export default function ServiceCategoryPage() {
  const params = useParams();
  const category = params.category as ServiceCategory;
  
  const categoryServices = services.filter(s => s.category === category);
  const info = categoryInfo[category] || { title: 'Services', description: 'Our premium services' };

  if (categoryServices.length === 0) {
    return (
      <MainLayout>
        <Section padding="xl" background="white">
          <Container>
            <div className="text-center py-16">
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Category Not Found
              </h1>
              <p className="text-gray-600 mb-8">
                The service category you're looking for doesn't exist.
              </p>
              <Link href="/services">
                <Button variant="primary" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              {info.title}
            </h1>
            <p className="text-xl text-gray-600">
              {info.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {categoryServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient-secondary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">
              Ready to Book?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule your appointment today and experience the difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all shadow-md hover:shadow-lg">
                  Book Appointment
                </button>
              </Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_RAW || '+1234567890'}`} className="inline-block">
                <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-50 transition-all border-2 border-primary-500">
                  Call Us: {process.env.NEXT_PUBLIC_PHONE || '+1 (234) 567-890'}
                </button>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

