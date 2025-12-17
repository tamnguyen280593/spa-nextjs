import { LucideIcon } from 'lucide-react';
import { Heart, Award, Users, Target } from 'lucide-react';

export interface Value {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: Heart,
    title: 'Dedication',
    description: 'We always put customer satisfaction first',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Committed to providing the highest quality services and products',
  },
  {
    icon: Users,
    title: 'Professional',
    description: 'Well-trained team of experts with extensive experience',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Constantly updating latest technologies and trends',
  },
];

