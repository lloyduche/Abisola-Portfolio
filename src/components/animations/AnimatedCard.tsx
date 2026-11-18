import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  glowColor?: 'sapphire' | 'bordeaux' | 'cyan' | 'blue' | 'purple' | 'rose' | 'gold';
  maxTilt?: number;
  scale?: number;
  onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  glowColor = 'sapphire',
  maxTilt = 10,
  scale = 1.02,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <TiltCard
        className={`h-full ${className}`}
        glowColor={glowColor}
        maxTilt={maxTilt}
        scale={scale}
        onClick={onClick}
      >
        {children}
      </TiltCard>
    </motion.div>
  );
};
