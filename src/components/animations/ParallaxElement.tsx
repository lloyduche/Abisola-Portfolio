import React, { ReactNode } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface ParallaxElementProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

// Parallax via page-level useScroll conflicts with Lenis and causes scroll jitter.
// We keep the component API intact but render children without y-transform.
export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  offset: _offset,
  className = '',
}) => {
  usePrefersReducedMotion(); // keep hook call in case it has side-effects in future
  return <div className={className}>{children}</div>;
};
