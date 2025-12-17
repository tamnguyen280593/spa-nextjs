import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { team } from '@/data/team';

export default function TeamPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your beauty and wellness
            </p>
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.id} padding="none" className="overflow-hidden text-center">
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-primary-50 text-primary-700 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

