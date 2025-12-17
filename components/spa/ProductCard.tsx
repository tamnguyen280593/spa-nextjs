import React from 'react';
import Link from 'next/link';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product,
  variant = 'default'
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  if (variant === 'compact') {
    return (
      <Card hover padding="md" className="h-full">
        <div className="flex gap-4">
          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {discountPercentage > 0 && (
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-bl">
                -{discountPercentage}%
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
            <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Default and featured variants
  return (
    <Card hover padding="none" className="overflow-hidden h-full group">
      <div className="relative">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <Link href={`/products/${product.slug}`}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </Link>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discountPercentage > 0 && (
              <Badge variant="danger" size="sm" className="font-bold">
                -{discountPercentage}%
              </Badge>
            )}
            {product.featured && (
              <Badge variant="warning" size="sm">
                ⭐ Featured
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="default" size="sm">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Favorite Button */}
          <button
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md transition-all hover:scale-110"
            aria-label="Add to favorites"
          >
            <Heart size={18} className="text-gray-600 hover:text-red-500" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/san-pham/${product.slug}`}>
          <div className="mb-1">
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              {product.brand}
            </p>
          </div>
          
          <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-primary-600 transition">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-primary-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

          {/* Action Buttons */}
        <div className="flex gap-2">
          <Link href={`/products/${product.slug}`} className="flex-1">
            <Button 
              variant="outline" 
              size="md" 
              fullWidth
              disabled={!product.inStock}
            >
              View Details
            </Button>
          </Link>
          <Button
            variant="primary"
            size="md"
            icon={<ShoppingCart size={18} />}
            className="flex-shrink-0"
            disabled={!product.inStock}
            aria-label="Add to cart"
          />
        </div>
      </div>
    </Card>
  );
};

