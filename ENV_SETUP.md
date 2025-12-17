# Environment Variables Setup Guide

## Quick Setup

1. **Copy the example file:**
   ```bash
   cp env.example .env.local
   ```

2. **Edit `.env.local`** with your actual values

## Environment Variables Reference

### Business Information
- `NEXT_PUBLIC_BUSINESS_NAME`: Your spa/business name (default: LuxeSpa)
- `NEXT_PUBLIC_BUSINESS_TAGLINE`: Your tagline (default: Premium Beauty & Skincare)

### Contact Information
- `NEXT_PUBLIC_PHONE`: Formatted phone number for display (e.g., +1 (234) 567-890)
- `NEXT_PUBLIC_PHONE_RAW`: Raw phone number for tel: links (e.g., +1234567890)
- `NEXT_PUBLIC_EMAIL`: Business email address
- `NEXT_PUBLIC_ADDRESS`: Full business address
- `NEXT_PUBLIC_HOURS`: Business hours text

### Social Media Links
- `NEXT_PUBLIC_FACEBOOK_URL`: Facebook page URL
- `NEXT_PUBLIC_INSTAGRAM_URL`: Instagram profile URL
- `NEXT_PUBLIC_YOUTUBE_URL`: YouTube channel URL
- `NEXT_PUBLIC_TWITTER_URL`: Twitter profile URL
- `NEXT_PUBLIC_TIKTOK_URL`: TikTok profile URL

### Google Maps
- `NEXT_PUBLIC_MAPS_EMBED_URL`: Google Maps embed iframe URL
- `NEXT_PUBLIC_MAPS_LINK_URL`: Google Maps direct link URL

### SEO
- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `NEXT_PUBLIC_SITE_DESCRIPTION`: Site meta description

## How to Get Google Maps URLs

### Embed URL:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your business location
3. Click "Share" button
4. Click "Embed a map" tab
5. Copy the iframe src URL

### Link URL:
1. Go to [Google Maps](https://maps.google.com)
2. Search for your business location
3. Click "Share" button
4. Copy the link

## Example .env.local

```env
# Business Information
NEXT_PUBLIC_BUSINESS_NAME=Serenity Spa
NEXT_PUBLIC_BUSINESS_TAGLINE=Where Wellness Meets Luxury

# Contact Information
NEXT_PUBLIC_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_PHONE_RAW=+15551234567
NEXT_PUBLIC_EMAIL=hello@serenityspa.com
NEXT_PUBLIC_ADDRESS=456 Spa Avenue, Miami, FL 33139

# Business Hours
NEXT_PUBLIC_HOURS=Mon-Fri: 10:00 AM - 8:00 PM, Sat-Sun: 9:00 AM - 9:00 PM

# Social Media Links
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/serenityspa
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/serenityspa
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@serenityspa
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/serenityspa
NEXT_PUBLIC_TIKTOK_URL=https://tiktok.com/@serenityspa

# Google Maps
NEXT_PUBLIC_MAPS_EMBED_URL=https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE
NEXT_PUBLIC_MAPS_LINK_URL=https://maps.google.com/?q=Your+Location

# SEO
NEXT_PUBLIC_SITE_URL=https://serenityspa.com
NEXT_PUBLIC_SITE_DESCRIPTION=Experience ultimate relaxation at Serenity Spa with our premium treatments.
```

## Important Notes

- ⚠️ Never commit `.env.local` to Git (it's already in .gitignore)
- ✅ Always use `NEXT_PUBLIC_` prefix for client-side environment variables
- 🔄 Restart development server after changing environment variables
- 📝 Update `env.example` when adding new variables
- 🔒 Keep sensitive information in `.env.local` only

## Where Variables Are Used

### Header Component
- Phone number (top bar)
- Email (top bar)
- Business hours (top bar)
- Business name (logo)

### Footer Component
- Business name (logo)
- Address with Maps link
- Phone number
- Email
- Social media links

### Contact Page
- All contact information
- Google Maps embed
- Maps link for address

### Other Pages
- Phone number in CTA sections
- Business information throughout the site

## Troubleshooting

### Changes not appearing?
1. Make sure you restarted the dev server: `npm run dev`
2. Clear browser cache
3. Check that variable name starts with `NEXT_PUBLIC_`

### Maps not loading?
1. Verify the embed URL is correct
2. Check if there are any console errors
3. Make sure the URL is properly encoded

### Social links not working?
1. Verify URLs start with `https://`
2. Test each link individually in browser
3. Check for typos in the URLs

