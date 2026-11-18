import React, { ReactNode } from 'react';
import { use3DTilt } from '../../hooks/use3DTilt';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'sapphire' | 'bordeaux' | 'cyan' | 'blue' | 'purple' | 'rose' | 'gold';
  maxTilt?: number;
  scale?: number;
  onClick?: () => void;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  glowColor = 'sapphire',
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
    sapphire: 'hover:border-[#0D5BEB]/50 hover:shadow-[0_12px_36px_rgba(13,91,235,0.2)]',
    bordeaux: 'hover:border-[#4A0E1C]/40 hover:shadow-[0_12px_36px_rgba(74,14,28,0.15)]',
    cyan: 'hover:border-[#0D5BEB]/50 hover:shadow-[0_12px_36px_rgba(13,91,235,0.2)]',
    blue: 'hover:border-[#0D5BEB]/50 hover:shadow-[0_12px_36px_rgba(13,91,235,0.2)]',
    purple: 'hover:border-[#4A0E1C]/40 hover:shadow-[0_12px_36px_rgba(74,14,28,0.15)]',
    rose: 'hover:border-[#4A0E1C]/40 hover:shadow-[0_12px_36px_rgba(74,14,28,0.15)]',
    gold: 'hover:border-[#0D5BEB]/40 hover:shadow-[0_12px_36px_rgba(13,91,235,0.18)]',
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
