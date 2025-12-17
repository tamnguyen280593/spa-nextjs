import { LucideIcon } from 'lucide-react';
import { Briefcase, Heart, TrendingUp, Users } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance and wellness programs',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Continuous training and development opportunities',
  },
  {
    icon: Users,
    title: 'Great Culture',
    description: 'Work with passionate professionals in a supportive environment',
  },
  {
    icon: Briefcase,
    title: 'Competitive Pay',
    description: 'Market-leading compensation and benefits packages',
  },
];

export const openings: JobOpening[] = [
  {
    id: '1',
    title: 'Licensed Esthetician',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    description: 'Join our team of skincare experts providing premium facial treatments.',
  },
  {
    id: '2',
    title: 'Massage Therapist',
    type: 'Full-time',
    location: 'Los Angeles, CA',
    description: 'Seeking experienced massage therapist specializing in various techniques.',
  },
  {
    id: '3',
    title: 'Front Desk Coordinator',
    type: 'Part-time',
    location: 'Los Angeles, CA',
    description: 'Provide exceptional customer service and manage spa operations.',
  },
];

