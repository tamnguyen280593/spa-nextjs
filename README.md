# LuxeSpa - Premium Beauty & Skincare Website

![LuxeSpa Website](full-screen.png)

Professional Next.js website for luxury spa, skincare treatments, and premium beauty products.

## ✨ Features

- 🎨 **Beautiful UI**: Modern design, fully responsive on all devices
- 🔧 **TypeScript**: Type-safe with TypeScript
- 🎭 **Component-based**: Reusable components, easy to maintain
- 🎨 **Tailwind CSS**: Fast and flexible styling
- 📱 **Responsive Design**: Optimized for mobile, tablet, and desktop
- 🚀 **Next.js 14**: Using latest App Router
- 💅 **Modern UI**: Smooth animations, beautiful transitions
- 🌿 **Fresh Green Theme**: Refreshing green color palette for a natural spa feel

## 📦 Project Structure

```
spa-nextjs/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── services/            # Services page
│   ├── products/            # Products page
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── booking/             # Booking page
│   ├── blog/                # Blog page
│   ├── team/                # Team page
│   ├── cart/                # Shopping cart
│   ├── careers/             # Careers page
│   ├── faq/                 # FAQ page
│   ├── privacy/             # Privacy policy
│   └── terms/               # Terms of service
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── spa/                 # Spa-specific components
│   │   ├── ServiceCard.tsx
│   │   ├── ProductCard.tsx
│   │   └── TestimonialCard.tsx
│   └── home/                # Homepage components
│       └── HeroSwiper.tsx
├── types/                   # TypeScript types
│   └── index.ts
├── data/                    # Mock data & resources
│   ├── services.ts          # Spa services data
│   ├── products.ts          # Skincare products data
│   ├── testimonials.ts      # Customer testimonials
│   ├── features.ts          # Homepage features
│   ├── blog.ts              # Blog posts
│   ├── team.ts              # Team members
│   ├── values.ts            # Company values
│   ├── faqs.ts              # FAQ data
│   └── careers.ts           # Career benefits & job openings
├── lib/                     # Utility functions
│   └── config.ts
└── public/                  # Static assets
    └── images/              # Local images

```

## 🚀 Installation

1. Clone repository or create new project:

```bash
npx create-next-app@latest spa-nextjs --typescript
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual values:
- Business information
- Contact details
- Social media links
- Google Maps URLs

4. Run development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Main Components

### UI Components

- **Button**: Button component with multiple variants (primary, secondary, outline, ghost, accent)
- **Card**: Flexible card component with padding, shadow, and rounded options
- **Input**: Input field with label, error handling, and icon support
- **Textarea**: Textarea with validation
- **Badge**: Badge component for labels and tags
- **Container**: Container component with responsive max-width
- **Section**: Section wrapper with padding and background options

### Spa Components

- **ServiceCard**: Display spa services with 3 variants (default, compact, featured)
- **ProductCard**: Display skincare products with rating, price, and discount
- **TestimonialCard**: Display customer reviews and testimonials

### Layout Components

- **Header**: Navigation bar with scroll effect, active states, and mobile menu
- **Footer**: Footer with links, newsletter signup, and social media
- **MainLayout**: Main layout wrapper for all pages

### Home Components

- **HeroSwiper**: Hero banner carousel with Swiper.js integration

## 🎯 Main Pages

1. **Home** (`/`): Hero carousel, featured services, products, testimonials
2. **Services** (`/services`): All services with category filters (mobile dropdown, desktop buttons)
3. **Products** (`/products`): Product listings with advanced filters (category, skin type, price) and sorting
4. **About** (`/about`): About the spa, our story, core values
5. **Contact** (`/contact`): Contact form, business information, embedded Google Maps
6. **Booking** (`/booking`): Appointment booking form with service selection
7. **Blog** (`/blog`): Blog posts and articles
8. **Team** (`/team`): Team members and professionals
9. **Cart** (`/cart`): Shopping cart (coming soon)
10. **Careers** (`/careers`): Career opportunities
11. **FAQ** (`/faq`): Frequently asked questions
12. **Privacy** (`/privacy`): Privacy policy
13. **Terms** (`/terms`): Terms of service

## 🎨 Color Palette

- **Primary**: Fresh green tones (natural, rejuvenating, spa-like)
- **Secondary**: Teal/Turquoise tones (calming, tranquil, wellness)
- **Accent**: Emerald green tones (organic, luxurious, fresh)

## 📝 Customization

### Environment Variables

Edit `.env.local` to customize:

```env
# Business Information
NEXT_PUBLIC_BUSINESS_NAME=LuxeSpa
NEXT_PUBLIC_PHONE=(123) 456-7890
NEXT_PUBLIC_PHONE_RAW=1234567890
NEXT_PUBLIC_EMAIL=info@luxespa.com
NEXT_PUBLIC_ADDRESS=123 Spa Street, Los Angeles, CA 90028

# Social Media
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/luxespa
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/luxespa
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/luxespa
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@luxespa

# Google Maps
NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=...
NEXT_PUBLIC_MAPS_LINK=https://goo.gl/maps/...
```

See `env.example` for all available variables.

### Change Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: { /* Fresh green tones */ },
  secondary: { /* Teal/turquoise tones */ },
  accent: { /* Emerald green tones */ },
}
```

### Add New Services/Products

Edit `data/services.ts` and `data/products.ts` to add or modify data.

### Customize Images

All images are stored locally in `public/images/` for optimal performance:
- Product images: `product-*.jpg`
- Service images: `service-*.jpg`
- Hero banners: `hero-*.jpg`
- Team photos: `team-*.jpg`

### Customize Components

All components have flexible props for customization according to your needs.

## 🔧 Scripts

- `npm run dev`: Run development server
- `npm run build`: Build for production
- `npm start`: Run production server
- `npm run lint`: Lint code
- `npm run type-check`: Check TypeScript types

## 📱 Responsive Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🌟 Key Features

- ✅ SEO-friendly with Next.js metadata
- ✅ Performance optimized with local images
- ✅ Accessibility (WCAG compliant)
- ✅ Modern animations and smooth transitions
- ✅ Mobile-first responsive design
- ✅ Type-safe with TypeScript
- ✅ Reusable component architecture
- ✅ Clean and maintainable code structure
- ✅ Fresh green theme for natural spa ambiance
- ✅ Advanced filtering and sorting
- ✅ Mobile-optimized filters with modal/dropdown UI
- ✅ Swiper carousel integration
- ✅ Environment variable configuration
- ✅ Active navigation states
- ✅ Dynamic routing for service categories

## 📄 License

MIT License - Free to use for personal and commercial projects.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📞 Support

If you need support, please contact:
- Email: dev@luxespa.com
- GitHub Issues: [Create an issue](https://github.com/yourusername/spa-nextjs/issues)

---

Made with ❤️ by LuxeSpa Team

