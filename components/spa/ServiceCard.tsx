import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Service } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'compact' | 'featured';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  service,
  variant = 'default'
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const categoryLabels: Record<string, string> = {
    'facial': 'Facial Treatment',
    'massage': 'Massage',
    'body-treatment': 'Body Treatment',
    'hair-spa': 'Hair Spa',
    'nail-care': 'Nail Care',
    'waxing': 'Hair Removal',
  };

  if (variant === 'compact') {
    return (
      <Card hover padding="md" className="h-full">
        <div className="flex gap-4">
          <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-gray-900 line-clamp-1">
                {service.name}
              </h3>
              {service.featured && (
                <Badge 
                  variant="danger" 
                  size="sm" 
                  className="bg-red-500 text-white shadow-md font-bold flex-shrink-0"
                >
                  🔥
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {service.shortDescription}
            </p>
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary-600">
                {formatPrice(service.price)}
              </span>
              <Link href={`/services/${service.slug}`}>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === 'featured') {
    return (
      <Card hover padding="none" className="overflow-hidden h-full group">
        <div className="relative h-64 overflow-hidden">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {service.featured && (
              <Badge 
                variant="danger" 
                size="md" 
                className="bg-red-500 text-white shadow-lg backdrop-blur-sm font-bold"
              >
                🔥 Hot
              </Badge>
            )}
            <Badge 
              variant="primary" 
              size="md"
              className="bg-white/90 backdrop-blur-sm shadow-md font-semibold"
            >
              {categoryLabels[service.category]}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
            {service.name}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {service.description}
          </p>
          
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{service.duration} min</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold text-primary-600">
                {formatPrice(service.price)}
              </span>
            </div>
          </div>

          {service.benefits && service.benefits.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
              <ul className="space-y-1">
                {service.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-primary-500 mt-0.5">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Link href={`/services/${service.slug}`}>
            <Button variant="primary" size="lg" fullWidth icon={<ArrowRight size={18} />} iconPosition="right">
              Book Now
            </Button>
          </Link>
        </div>
      </Card>
    );
  }

  // Default variant
  return (
    <Card hover padding="none" className="overflow-hidden h-full group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          {service.featured && (
            <Badge 
              variant="danger" 
              size="sm" 
              rounded 
              className="bg-red-500 text-white shadow-lg backdrop-blur-sm font-bold"
            >
              🔥 Hot
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2">
          <Badge variant="primary" size="sm">
            {categoryLabels[service.category]}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {service.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {service.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Clock size={16} />
            <span>{service.duration} min</span>
          </div>
          <span className="text-xl font-bold text-primary-600">
            {formatPrice(service.price)}
          </span>
        </div>

        <Link href={`/services/${service.slug}`}>
          <Button variant="outline" size="md" fullWidth icon={<ArrowRight size={16} />} iconPosition="right">
            View Details
          </Button>
        </Link>
      </div>
    </Card>
  );
};

