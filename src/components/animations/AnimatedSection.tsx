
"use client";

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // e.g., 'delay-300'
}

export default function AnimatedSection({ children, className, delay = '' }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity duration-1000 ease-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={isVisible ? { animationDelay: delay } : {}}
    >
      <div className={cn('animate-fade-in-up', { 'opacity-0': !isVisible })}>
        {children}
      </div>
    </div>
  );
}
