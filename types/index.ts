// Service types
export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  duration: number; // in minutes
  image: string;
  category: ServiceCategory;
  benefits: string[];
  featured: boolean;
}

export type ServiceCategory = 
  | 'facial'
  | 'massage'
  | 'body-treatment'
  | 'hair-spa'
  | 'nail-care'
  | 'waxing';

// Product types
export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: ProductCategory;
  skinType: SkinType[];
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
}

export type ProductCategory = 
  | 'cleanser'
  | 'toner'
  | 'serum'
  | 'moisturizer'
  | 'sunscreen'
  | 'mask'
  | 'eye-cream'
  | 'treatment';

export type SkinType = 
  | 'normal'
  | 'dry'
  | 'oily'
  | 'combination'
  | 'sensitive'
  | 'all';

// Booking types
export interface Booking {
  id: string;
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: string;
  time: string;
  notes?: string;
  status: BookingStatus;
}

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  image?: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
}

// Blog types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: BlogCategory;
  tags: string[];
  readTime: number; // in minutes
}

export type BlogCategory = 
  | 'skincare-tips'
  | 'beauty-trends'
  | 'wellness'
  | 'product-reviews'
  | 'spa-treatments';

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Newsletter types
export interface NewsletterSubscription {
  email: string;
  name?: string;
}

// Cart types
export interface CartItem {
  productId: string;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

