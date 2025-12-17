import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ShoppingBag } from 'lucide-react';

export default function CartPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Shopping Cart
            </h1>
            <p className="text-xl text-gray-600">
              Review your items and complete your purchase
            </p>
          </div>
        </Container>
      </Section>

      {/* Cart Section */}
      <Section padding="xl" background="white">
        <Container size="md">
          <Card padding="xl" className="text-center">
            <div className="py-12">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <ShoppingBag size={48} className="text-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added any products to your cart yet. Browse our premium skincare collection to get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button variant="primary" size="lg">
                    Shop Products
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </MainLayout>
  );
}

