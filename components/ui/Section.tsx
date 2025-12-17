import React from 'react';
import { clsx } from 'clsx';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'gradient-primary' | 'gradient-secondary';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  padding = 'lg',
  background = 'white',
}) => {
  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-28',
  };

  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    'gradient-primary': 'gradient-bg-primary',
    'gradient-secondary': 'gradient-bg-secondary',
  };

  return (
    <section
      className={clsx(
        paddings[padding],
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
};

