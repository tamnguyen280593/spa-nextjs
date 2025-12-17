export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Skincare Tips for Healthy, Glowing Skin',
    excerpt: 'Discover the essential skincare routine steps that will transform your complexion and give you that coveted healthy glow.',
    image: '/images/product-cleanser.jpg',
    category: 'Skincare Tips',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'The Benefits of Regular Spa Treatments',
    excerpt: 'Learn how regular spa visits can improve your overall health, reduce stress, and enhance your well-being.',
    image: '/images/service-massage.jpg',
    category: 'Wellness',
    date: 'Dec 12, 2024',
    readTime: '4 min read',
  },
  {
    id: '3',
    title: 'How to Choose the Right Facial Treatment',
    excerpt: 'A comprehensive guide to help you select the perfect facial treatment based on your skin type and concerns.',
    image: '/images/service-basic-facial.jpg',
    category: 'Beauty Trends',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Understanding Your Skin Type',
    excerpt: 'Identify your skin type and learn which products and treatments will work best for your unique needs.',
    image: '/images/product-eyecream.jpg',
    category: 'Skincare Tips',
    date: 'Dec 8, 2024',
    readTime: '5 min read',
  },
  {
    id: '5',
    title: 'The Power of Natural Ingredients',
    excerpt: 'Explore the benefits of natural and organic ingredients in your skincare routine and why they matter.',
    image: '/images/product-toner.jpg',
    category: 'Product Reviews',
    date: 'Dec 5, 2024',
    readTime: '4 min read',
  },
  {
    id: '6',
    title: 'Stress Relief Through Massage Therapy',
    excerpt: 'Discover how different massage techniques can help you relax, reduce tension, and improve your quality of life.',
    image: '/images/blog-massage-therapy.jpg',
    category: 'Wellness',
    date: 'Dec 3, 2024',
    readTime: '5 min read',
  },
];

