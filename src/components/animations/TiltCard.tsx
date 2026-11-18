import React, { ReactNode } from 'react';
import { use3DTilt } from '../../hooks/use3DTilt';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'persimmon' | 'petrol' | 'sapphire' | 'bordeaux' | 'cyan' | 'blue' | 'purple' | 'rose' | 'gold';
  maxTilt?: number;
  scale?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'persimmon',
  maxTilt = 12,
  scale = 1.02,
  onClick,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, style, glareStyle, onMouseMove, onMouseLeave } = use3DTilt({
    maxTilt: prefersReducedMotion ? 0 : maxTilt,
    scale: prefersReducedMotion ? 1 : scale,
    glare: !prefersReducedMotion,
  });

  const glowBorderMap = {
    persimmon: 'hover:border-[#FF5E36]/50 hover:shadow-[0_12px_36px_rgba(255,94,54,0.2)]',
    petrol: 'hover:border-[#18303D]/40 hover:shadow-[0_12px_36px_rgba(24,48,61,0.15)]',
    sapphire: 'hover:border-[#FF5E36]/50 hover:shadow-[0_12px_36px_rgba(255,94,54,0.2)]',
    bordeaux: 'hover:border-[#18303D]/40 hover:shadow-[0_12px_36px_rgba(24,48,61,0.15)]',
    cyan: 'hover:border-[#FF5E36]/50 hover:shadow-[0_12px_36px_rgba(255,94,54,0.2)]',
    blue: 'hover:border-[#FF5E36]/50 hover:shadow-[0_12px_36px_rgba(255,94,54,0.2)]',
    purple: 'hover:border-[#18303D]/40 hover:shadow-[0_12px_36px_rgba(24,48,61,0.15)]',
    rose: 'hover:border-[#FF5E36]/40 hover:shadow-[0_12px_36px_rgba(255,94,54,0.15)]',
    gold: 'hover:border-[#FF5E36]/40 hover:shadow-[0_12px_36px_rgba(255,94,54,0.18)]',
  };

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`relative rounded-2xl sm:rounded-3xl transition-all duration-300 transform-gpu overflow-hidden ${glowBorderMap[glowColor]} ${className}`}
    >
      {children}
      {glareStyle && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[inherit]"
          style={glareStyle}
        />
      )}
    </div>
  );
};
