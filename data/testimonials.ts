export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing service! My skin has improved noticeably after the premium facial treatment at LuxeSpa. The staff is very professional and attentive.',
    date: '2024-01-15',
    service: 'Premium Facial Treatment',
  },
  {
    id: '2',
    name: 'Emily Chen',
    rating: 5,
    comment: 'Luxurious and relaxing spa atmosphere. The massage was professional and helped me relieve stress after long work days.',
    date: '2024-01-10',
    service: 'Relaxation Body Massage',
  },
  {
    id: '3',
    name: 'Jessica Williams',
    rating: 5,
    comment: 'The skincare products here are top quality. I bought the vitamin C serum and noticed brighter skin in just 2 weeks of use.',
    date: '2024-01-05',
  },
];

