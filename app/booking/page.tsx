import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

export default function BookingPage() {
  return (
    <MainLayout>
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Book Appointment
            </h1>
            <p className="text-xl text-gray-600">
              Choose your service and preferred time
            </p>
          </div>
        </Container>
      </Section>

      <Section padding="xl" background="white">
        <Container size="md">
          <Card padding="xl" shadow="xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  icon={<User size={18} />}
                  required
                />
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="(234) 567-890"
                  required
                />
              </div>

              <Input
                label="Email"
                type="email"
                placeholder="email@example.com"
                required
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Select Service
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Basic Facial Treatment</option>
                  <option>Premium Facial Treatment</option>
                  <option>Relaxation Body Massage</option>
                  <option>Hot Stone Massage</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Appointment Date"
                  type="date"
                  icon={<Calendar size={18} />}
                  required
                />
                <Input
                  label="Appointment Time"
                  type="time"
                  icon={<Clock size={18} />}
                  required
                />
              </div>

              <Textarea
                label="Notes (optional)"
                placeholder="Please let us know if you have any special requests..."
                rows={4}
              />

              <Button variant="primary" size="lg" fullWidth>
                Confirm Booking
              </Button>
            </form>
          </Card>
        </Container>
      </Section>
    </MainLayout>
  );
}

