export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    role: 'Chief Dermatologist',
    image: '/images/team-1.jpg',
    bio: '15+ years of experience in dermatology and skincare',
    specialties: ['Medical Facials', 'Skin Analysis', 'Anti-Aging'],
  },
  {
    id: '2',
    name: 'Emily Chen',
    role: 'Senior Esthetician',
    image: '/images/team-2.jpg',
    bio: 'Certified esthetician specializing in holistic skincare',
    specialties: ['Organic Treatments', 'Facial Massage', 'Acne Care'],
  },
  {
    id: '3',
    name: 'Michael Rodriguez',
    role: 'Massage Therapist',
    image: '/images/team-3.jpg',
    bio: 'Licensed massage therapist with expertise in various techniques',
    specialties: ['Deep Tissue', 'Hot Stone', 'Aromatherapy'],
  },
  {
    id: '4',
    name: 'Lisa Anderson',
    role: 'Beauty Specialist',
    image: '/images/team-4.jpg',
    bio: 'Expert in nail care and beauty treatments',
    specialties: ['Manicure', 'Pedicure', 'Nail Art'],
  },
];

