// Centralized configuration using environment variables

export const config = {
  business: {
    name: process.env.NEXT_PUBLIC_BUSINESS_NAME || 'LuxeSpa',
    tagline: process.env.NEXT_PUBLIC_BUSINESS_TAGLINE || 'Premium Beauty & Skincare',
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+1 (234) 567-890',
    phoneRaw: process.env.NEXT_PUBLIC_PHONE_RAW || '+1234567890',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@luxespa.com',
    address: process.env.NEXT_PUBLIC_ADDRESS || '123 Wellness Boulevard, Los Angeles, CA 90028',
    hours: process.env.NEXT_PUBLIC_HOURS || 'Monday - Sunday: 9:00 AM - 9:00 PM',
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || 'https://facebook.com/luxespa',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/luxespa',
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || 'https://youtube.com/@luxespa',
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com/luxespa',
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || 'https://tiktok.com/@luxespa',
  },
  maps: {
    embedUrl: process.env.NEXT_PUBLIC_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.176913473815!2d-118.32625852346564!3d34.09845391587134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf3ec8b1f3f1%3A0x1e2d8b3e8f1e3e8f!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s',
    linkUrl: process.env.NEXT_PUBLIC_MAPS_LINK_URL || 'https://maps.google.com/?q=Los+Angeles+CA',
  },
  seo: {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://luxespa.com',
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || 'Discover the ultimate spa experience with premium skincare treatments and luxury beauty products.',
  },
} as const;

// Helper function to get contact links
export const getContactLinks = () => ({
  phone: `tel:${config.contact.phoneRaw}`,
  email: `mailto:${config.contact.email}`,
  maps: config.maps.linkUrl,
});

// Helper function to check if social link is available
export const hasSocialLink = (platform: keyof typeof config.social): boolean => {
  return !!config.social[platform];
};

