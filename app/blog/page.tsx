import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Section padding="lg" background="gradient-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600">
              Expert tips, beauty trends, and wellness advice from our team
            </p>
          </div>
        </Container>
      </Section>

      {/* Blog Posts */}
      <Section padding="xl" background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} hover padding="none" className="overflow-hidden">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <span className="text-primary-600 font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-primary-600 transition cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    Read More →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}

