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

