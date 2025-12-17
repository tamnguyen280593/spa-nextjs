import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { config, getContactLinks } from '@/lib/config';

const contactLinks = getContactLinks();

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: config.contact.address,
    link: contactLinks.maps,
  },
  {
    icon: Phone,
    title: 'Phone',
    content: config.contact.phone,
    link: contactLinks.phone,
  },
  {
    icon: Mail,
    title: 'Email',
    content: config.contact.email,
    link: contactLinks.email,
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: config.contact.hours,
  },
];

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We're always here to listen and help you
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Get in touch with us through the following methods or fill out the form. 
                We will respond as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} padding="lg" className="flex items-start gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center">
                      <info.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-primary-600 hover:text-primary-700 transition">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-[300px] bg-gray-200">
                <iframe
                  src={config.maps.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title={`${config.business.name} Location`}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card padding="xl" shadow="lg">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Send Message
                </h2>
                <form className="space-y-6">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    required
                  />
                  
                  <Input
                    label="Email"
                    type="email"
                    placeholder="email@example.com"
                    required
                  />
                  
                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="(234) 567-890"
                    required
                  />
                  
                  <Input
                    label="Subject"
                    placeholder="Service consultation"
                    required
                  />
                  
                  <Textarea
                    label="Message"
                    placeholder="Please leave your message..."
                    rows={6}
                    required
                  />
                  
                  <Button variant="primary" size="lg" fullWidth>
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section padding="xl" background="gradient-secondary">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from our customers
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: 'Do I need to book an appointment in advance?',
                answer: 'We encourage you to book in advance to ensure availability. However, we also welcome walk-ins if we have available slots.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cash, credit cards, bank transfers, and e-wallets like Apple Pay and Google Pay.',
              },
              {
                question: 'Can I cancel or reschedule my appointment?',
                answer: 'You can cancel or reschedule 24 hours in advance without any fees. Please contact us as soon as possible.',
              },
              {
                question: 'Do you perform skin tests before using products?',
                answer: 'Yes, we always perform skin tests before applying any new products to ensure safety for our clients.',
              },
            ].map((faq, index) => (
              <Card key={index} padding="lg" hover>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

