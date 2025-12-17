import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { values } from '@/data/values';

export default function AboutPage() {
  return (
    <MainLayout>
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              About LuxeSpa
            </h1>
            <p className="text-xl text-gray-600">
              Where beauty and relaxation unite
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  LuxeSpa was founded in 2015 with a mission to bring premium spa experiences and specialized skincare services to our community.
                </p>
                <p>
                  With over 8 years of experience, we have served more than 10,000 clients and become one of the most trusted spas in Los Angeles.
                </p>
                <p>
                  We believe that beauty comes from confidence and feeling comfortable in your own skin. That's why we continuously strive to provide the best treatments possible.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-story.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="gradient-secondary">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} padding="lg" className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <value.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

