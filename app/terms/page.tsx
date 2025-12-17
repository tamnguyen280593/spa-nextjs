import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function TermsPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: December 17, 2024
            </p>
          </div>
        </Container>
      </Section>

      {/* Content Section */}
      <Section padding="xl" background="white">
        <Container size="md">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using LuxeSpa's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Booking and Appointments
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>All appointments must be booked in advance through our website, phone, or in person</li>
                <li>We require 24 hours notice for cancellations or rescheduling</li>
                <li>Late cancellations (less than 24 hours) may incur a fee</li>
                <li>No-shows will be charged the full service amount</li>
                <li>We reserve the right to reschedule or cancel appointments due to unforeseen circumstances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Payment is due at the time of service</li>
                <li>We accept cash, credit cards, and digital payments</li>
                <li>Prices are subject to change without notice</li>
                <li>Packages and memberships are non-refundable</li>
                <li>Gift certificates cannot be redeemed for cash</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Client Conduct
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Clients are expected to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Arrive on time for scheduled appointments</li>
                <li>Inform us of any health conditions or allergies</li>
                <li>Treat our staff and facilities with respect</li>
                <li>Follow pre and post-treatment instructions</li>
                <li>Maintain appropriate behavior at all times</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Liability and Disclaimers
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                LuxeSpa provides services to the best of our ability using professional standards. However:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Results may vary between individuals</li>
                <li>We are not liable for adverse reactions to treatments</li>
                <li>Clients must disclose relevant medical information</li>
                <li>We recommend consulting healthcare providers when necessary</li>
                <li>Our liability is limited to the cost of services provided</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, and images, is the property of LuxeSpa and protected by copyright laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-gray-600">
                Email: legal@luxespa.com<br />
                Phone: +1 (234) 567-890<br />
                Address: 123 Wellness Boulevard, Los Angeles, CA 90028
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

