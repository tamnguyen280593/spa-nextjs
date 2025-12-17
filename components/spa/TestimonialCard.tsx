import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';
import { Card } from '@/components/ui/Card';

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card padding="lg" className="h-full relative">
      <div className="absolute top-6 right-6 text-primary-100">
        <Quote size={48} fill="currentColor" />
      </div>
      
      <div className="relative">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          "{testimonial.comment}"
        </p>

        {/* Customer Info */}
        <div className="flex items-center gap-4">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-primary-600 font-semibold text-lg">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            {testimonial.service && (
              <p className="text-sm text-gray-500">{testimonial.service}</p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

