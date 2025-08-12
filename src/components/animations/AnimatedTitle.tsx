
"use client";

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedTitle({ children, className }: AnimatedTitleProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5, triggerOnce: true });

  return (
    <h2
      ref={ref}
      className={cn(
        'transition-opacity duration-700 ease-out',
        isVisible ? 'opacity-100 animate-fade-in-left' : 'opacity-0',
        className
      )}
    >
      {children}
    </h2>
  );
}
