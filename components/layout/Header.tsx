'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Phone, Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { config, getContactLinks } from '@/lib/config';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const contactLinks = getContactLinks();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300',
        scrolled ? 'shadow-lg' : 'shadow-md'
      )}
    >

      {/* Main Navigation */}
      <Container>
        <nav className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl lg:text-3xl font-serif font-bold text-primary-600">
              {config.business.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-base font-medium transition-colors relative group',
                    active 
                      ? 'text-primary-600' 
                      : 'text-gray-700 hover:text-primary-600'
                  )}
                >
                  {item.name}
                  <span className={clsx(
                    'absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all',
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/cart">
              <Button variant="ghost" size="md" icon={<ShoppingBag size={18} />}>
                Cart
              </Button>
            </Link>
            <Link href="/booking">
              <Button variant="primary" size="md">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <Container>
            <div className="py-4 space-y-3">
              {navigation.map((item) => {
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      'block py-2 text-base font-medium transition',
                      active 
                        ? 'text-primary-600 font-semibold' 
                        : 'text-gray-700 hover:text-primary-600'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Link href="/cart" className="block">
                  <Button variant="outline" size="md" fullWidth icon={<ShoppingBag size={18} />}>
                    Cart
                  </Button>
                </Link>
                <Link href="/booking" className="block">
                  <Button variant="primary" size="md" fullWidth>
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};

