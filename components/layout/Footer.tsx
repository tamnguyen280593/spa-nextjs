import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { config, getContactLinks } from '@/lib/config';

const footerLinks = {
  services: [
    { name: 'Facial Treatments', href: '/services/facial' },
    { name: 'Body Massage', href: '/services/massage' },
    { name: 'Hair Removal', href: '/services/waxing' },
    { name: 'Nail Care', href: '/services/nail-care' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: config.social.facebook },
  { name: 'Instagram', icon: Instagram, href: config.social.instagram },
  { name: 'YouTube', icon: Youtube, href: config.social.youtube },
  { name: 'Twitter', icon: Twitter, href: config.social.twitter },
];

export const Footer: React.FC = () => {
  const contactLinks = getContactLinks();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <Container>
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-2">
                  Subscribe to Newsletter
                </h3>
                <p className="text-gray-400">
                  Get special offers and skincare tips from our experts
                </p>
              </div>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                />
                <Button variant="accent" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="text-3xl font-serif font-bold text-white">
                  {config.business.name}
                </span>
              </Link>
              <p className="text-gray-400 mb-6">
                Where beauty and relaxation unite. We deliver premium spa experiences with specialized skincare treatments and luxury beauty products.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary-400 mt-1 flex-shrink-0" />
                  <a href={contactLinks.maps} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary-400 transition">
                    {config.contact.address}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary-400 flex-shrink-0" />
                  <a href={contactLinks.phone} className="text-sm hover:text-primary-400 transition">
                    {config.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary-400 flex-shrink-0" />
                  <a href={contactLinks.email} className="text-sm hover:text-primary-400 transition">
                    {config.contact.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-500 text-gray-400 hover:text-white transition-all"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Column */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container>
          <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© 2024 {config.business.name}. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-primary-400 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

