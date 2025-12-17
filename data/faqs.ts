export interface FAQ {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  questions: FAQ[];
}

export const faqs: FAQCategory[] = [
  {
    category: 'Booking & Appointments',
    questions: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book an appointment online through our website, call us directly, or visit our spa. We recommend booking in advance to secure your preferred time slot.',
      },
      {
        q: 'Can I cancel or reschedule my appointment?',
        a: 'Yes, you can cancel or reschedule up to 24 hours before your appointment without any fees. Please contact us as soon as possible.',
      },
      {
        q: 'Do you accept walk-ins?',
        a: 'While we welcome walk-ins subject to availability, we highly recommend booking in advance to ensure we can accommodate you.',
      },
    ],
  },
  {
    category: 'Services & Treatments',
    questions: [
      {
        q: 'What should I expect during my first visit?',
        a: 'Your first visit will include a consultation to understand your skin concerns and goals. Our experts will recommend the best treatments for your needs.',
      },
      {
        q: 'Are your products organic and safe?',
        a: 'Yes, we use premium organic and dermatologist-tested products that are safe for all skin types. We also perform patch tests when needed.',
      },
      {
        q: 'How long do treatments typically last?',
        a: 'Treatment duration varies from 30 minutes to 2 hours depending on the service. Each service listing shows the estimated time.',
      },
    ],
  },
  {
    category: 'Payments & Pricing',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept cash, credit/debit cards, bank transfers, and popular e-wallets including Apple Pay and Google Pay.',
      },
      {
        q: 'Do you offer package deals or memberships?',
        a: 'Yes, we offer various packages and membership programs that provide significant savings. Contact us for more details.',
      },
      {
        q: 'What is your refund policy?',
        a: 'Refunds are available for cancellations made 24+ hours in advance. Services cancelled within 24 hours may be subject to a fee.',
      },
    ],
  },
  {
    category: 'General Questions',
    questions: [
      {
        q: 'What are your operating hours?',
        a: 'We are open Monday through Sunday from 9:00 AM to 9:00 PM, including holidays.',
      },
      {
        q: 'Do you have parking available?',
        a: 'Yes, we provide complimentary parking for all our clients. Parking is available at the rear of the building.',
      },
      {
        q: 'Is gift card available?',
        a: 'Yes, we offer gift cards in various denominations. They make perfect gifts for birthdays, holidays, or special occasions.',
      },
    ],
  },
];

