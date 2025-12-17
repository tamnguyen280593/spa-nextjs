import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { faqs } from '@/data/faqs';

export default function FAQPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} padding="lg" hover>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {faq.q}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="lg" background="gradient-secondary">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-all shadow-md hover:shadow-lg">
                Contact Us
              </button>
            </a>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
