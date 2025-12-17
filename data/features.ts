import { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

import { Award, Sparkles, Users, Clock } from 'lucide-react';

export const features: Feature[] = [
  {
    icon: Award,
    title: 'Expert Professionals',
    description: 'Certified international experts with over 10 years of experience',
  },
  {
    icon: Sparkles,
    title: 'Premium Products',
    description: 'Using 100% organic products, safe and effective',
  },
  {
    icon: Users,
    title: '10,000+ Customers',
    description: 'Trusted and loved by thousands of satisfied clients',
  },
  {
    icon: Clock,
    title: 'Open 9 AM - 9 PM',
    description: 'Flexible hours, serving weekends and holidays',
  },
];

