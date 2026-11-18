import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  id,
  delay = 0,
  // direction kept in interface for backward compat but we no longer translate
  // sections — translation causes layout jitter when Lenis + whileInView fire together
  direction: _direction = 'up',
  ...rest
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: prefersReducedMotion ? 0.1 : 0.6,
        delay,
        ease: 'easeOut',
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
};
