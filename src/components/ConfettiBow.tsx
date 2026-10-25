import React from 'react';
import confetti from 'canvas-confetti';

interface ConfettiBowProps {
  size?: 'mini' | 'medium' | 'big';
  className?: string;
  onClick?: () => void;
  title?: string;
  fill?: string;
  stroke?: string;
}

export const ConfettiBow: React.FC<ConfettiBowProps> = ({
  size = 'medium',
  className = '',
  onClick,
  title = 'Tap for confetti!',
  fill = 'var(--color-accent)',
  stroke = 'var(--color-border)',
}) => {
  const triggerConfetti = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 35,
      spread: 70,
      origin: { x, y },
      colors: ['#C85A32', '#D2DFD7', '#E8DFC8', '#1F2623', '#D93A72'],
    });

    if (onClick) onClick();
  };

  const isMini = size === 'mini';
  const widthClass =
    size === 'mini' ? 'w-8 h-6' : size === 'big' ? 'w-36 md:w-48 h-auto' : 'w-16 h-12';

  return (
    <div
      onClick={triggerConfetti}
      title={title}
      className={`inline-block cursor-pointer transition-transform hover:scale-110 active:scale-95 ${widthClass} ${className}`}
    >
      <svg
        viewBox="0 0 120 84"
        aria-hidden="true"
        className="w-full h-auto block select-none drop-shadow-sm"
      >
        {!isMini && (
          <>
            <path
              d="M56 44 L38 80 L49 75 L53 84 L60 46 Z"
              fill={fill}
              stroke={stroke}
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M64 44 L82 80 L71 75 L67 84 L60 46 Z"
              fill={fill}
              stroke={stroke}
              strokeWidth="3"
              strokeLinejoin="round"
            />
          </>
        )}
        <path
          d="M60 40 C40 8, 6 10, 9 34 C12 58, 40 56, 60 40 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="3"
        />
        <path
          d="M60 40 C80 8, 114 10, 111 34 C108 58, 80 56, 60 40 Z"
          fill={fill}
          stroke={stroke}
          strokeWidth="3"
        />
        <path
          d="M24 30 C30 24, 40 26, 46 32"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M96 30 C90 24, 80 26, 74 32"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <ellipse
          cx="60"
          cy="40"
          rx="10"
          ry="12"
          fill="var(--color-ribbon)"
          stroke={stroke}
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
