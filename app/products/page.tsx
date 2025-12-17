'use client';

import React, { useState, useMemo } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ProductCard } from '@/components/spa/ProductCard';
import { products } from '@/data/products';

const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'cleanser', name: 'Cleansers', count: products.filter(p => p.category === 'cleanser').length },
  { id: 'toner', name: 'Toners', count: products.filter(p => p.category === 'toner').length },
  { id: 'serum', name: 'Serums', count: products.filter(p => p.category === 'serum').length },
  { id: 'moisturizer', name: 'Moisturizers', count: products.filter(p => p.category === 'moisturizer').length },
  { id: 'sunscreen', name: 'Sunscreens', count: products.filter(p => p.category === 'sunscreen').length },
  { id: 'mask', name: 'Masks', count: products.filter(p => p.category === 'mask').length },
  { id: 'eye-cream', name: 'Eye Creams', count: products.filter(p => p.category === 'eye-cream').length },
  { id: 'treatment', name: 'Treatments', count: products.filter(p => p.category === 'treatment').length },
];

const skinTypes = [
  { id: 'all', name: 'All Skin Types' },
  { id: 'normal', name: 'Normal Skin' },
  { id: 'dry', name: 'Dry Skin' },
  { id: 'oily', name: 'Oily Skin' },
  { id: 'combination', name: 'Combination Skin' },
  { id: 'sensitive', name: 'Sensitive Skin' },
];

const sortOptions = [
  { id: 'newest', name: 'Newest' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'name', name: 'Name: A-Z' },
  { id: 'rating', name: 'Highest Rated' },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkinType, setSelectedSkinType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    // First filter
    let result = products.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSkinType = selectedSkinType === 'all' || product.skinType.includes(selectedSkinType as any);
      return matchesCategory && matchesSkinType;
    });

    // Then sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
      default:
        // Keep original order (newest)
        break;
    }

    return result;
  }, [selectedCategory, selectedSkinType, sortBy]);

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + (selectedSkinType !== 'all' ? 1 : 0);
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Premium Skincare Products
            </h1>
            <p className="text-xl text-gray-600">
              Carefully curated collection of skincare products from trusted brands
            </p>
          </div>
        </Container>
      </Section>

      {/* Products Section */}
      <Section padding="xl" background="white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Category Filter */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const isActive = selectedCategory === category.id;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-primary-500 text-white font-semibold' 
                              : 'hover:bg-primary-50 hover:text-primary-600 text-gray-700'
                          }`}
                        >
                          {category.name} <span className={isActive ? 'text-white/80' : 'text-gray-400'}>({category.count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Skin Type Filter */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Skin Type</h3>
                  <div className="space-y-2">
                    {skinTypes.map((type) => {
                      const isActive = selectedSkinType === type.id;
                      return (
                        <button
                          key={type.id}
                          onClick={() => setSelectedSkinType(type.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-primary-500 text-white font-semibold' 
                              : 'hover:bg-primary-50 hover:text-primary-600 text-gray-700'
                          }`}
                        >
                          {type.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Price Range */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors text-gray-700">
                      Under $30
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors text-gray-700">
                      $30 - $50
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors text-gray-700">
                      $50 - $100
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors text-gray-700">
                      Over $100
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:border-primary-500 hover:text-primary-600 transition-colors font-medium"
                >
                  <Filter size={20} />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Sort & Filter Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredAndSortedProducts.length}</span> products
                </p>
                
                {/* Custom Sort Dropdown */}
                <div className="relative w-full sm:w-auto">
                  <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="w-full sm:w-auto flex items-center gap-3 px-5 py-3 bg-white border-2 border-gray-300 rounded-xl hover:border-primary-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all font-medium text-gray-900 sm:min-w-[240px] justify-between"
                  >
                    <span className="flex items-center gap-2.5 text-sm">
                      <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                      <span className="font-medium">{sortOptions.find(opt => opt.id === sortBy)?.name}</span>
                    </span>
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 text-gray-500 flex-shrink-0 ${isSortOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {isSortOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsSortOpen(false)}
                      />
                      <div className="absolute right-0 mt-2 w-full sm:w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-20 overflow-hidden animate-scale-in">
                        <div className="py-1.5">
                          {sortOptions.map((option, index) => (
                            <button
                              key={option.id}
                              onClick={() => {
                                setSortBy(option.id);
                                setIsSortOpen(false);
                              }}
                              className={`w-full text-left px-5 py-3.5 hover:bg-primary-50 transition-colors ${
                                sortBy === option.id 
                                  ? 'bg-primary-50 text-primary-600 font-semibold' 
                                  : 'text-gray-700 hover:text-primary-600'
                              } ${index !== sortOptions.length - 1 ? 'border-b border-gray-100' : ''}`}
                            >
                              <div className="flex items-center justify-between gap-3">
                                <span className="text-sm">{option.name}</span>
                                {sortBy === option.id && (
                                  <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Products Grid */}
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-xl text-gray-500">No products found with selected filters.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSkinType('all');
                    }}
                    className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[85vh] overflow-hidden flex flex-col animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Filters Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
                  Categories
                  <ChevronDown size={18} />
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-primary-500 text-white font-semibold' 
                            : 'bg-gray-50 hover:bg-primary-50 hover:text-primary-600 text-gray-700'
                        }`}
                      >
                        {category.name} <span className={isActive ? 'text-white/80' : 'text-gray-400'}>({category.count})</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Skin Type Filter */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
                  Skin Type
                  <ChevronDown size={18} />
                </h3>
                <div className="space-y-2">
                  {skinTypes.map((type) => {
                    const isActive = selectedSkinType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedSkinType(type.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-primary-500 text-white font-semibold' 
                            : 'bg-gray-50 hover:bg-primary-50 hover:text-primary-600 text-gray-700'
                        }`}
                      >
                        {type.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-gray-200 bg-gray-50 space-y-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSkinType('all');
                }}
                className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-semibold"
              >
                Show {filteredAndSortedProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

