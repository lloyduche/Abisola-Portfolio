import React from 'react';

/** Hand-drawn red pencil / ink circle around words (inspired by García Márquez draft Image 1) */
export const RedCircle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`relative inline-block px-1 ${className}`}>
    <span className="relative z-10">{children}</span>
    <svg
      className="absolute -inset-1 w-[calc(100%+8px)] h-[calc(100%+8px)] pointer-events-none overflow-visible"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
    >
      <path
        d="M 5,20 C 5,6 30,3 55,4 C 80,5 98,10 96,22 C 94,34 72,37 45,36 C 18,35 2,28 8,16"
        fill="none"
        stroke="var(--red-pencil)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  </span>
);

/** Wavy red pen strike-through across words (inspired by Image 1) */
export const RedWavyStrike: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="relative z-10 opacity-70">{children}</span>
    <svg
      className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-4 pointer-events-none overflow-visible"
      viewBox="0 0 120 16"
      preserveAspectRatio="none"
    >
      <path
        d="M 0,8 Q 15,2 30,8 T 60,8 T 90,8 T 120,8"
        fill="none"
        stroke="var(--red-pencil)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  </span>
);

/** Red margin arrow pointing from note to text */
export const RedArrow: React.FC<{ direction?: 'left' | 'right' | 'down'; className?: string }> = ({ direction = 'right', className = '' }) => {
  const rot = direction === 'left' ? 'scale-x-[-1]' : direction === 'down' ? 'rotate-90' : '';
  return (
    <svg
      className={`inline-block w-8 h-4 overflow-visible pointer-events-none ${rot} ${className}`}
      viewBox="0 0 40 16"
      fill="none"
      stroke="var(--red-pencil)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 2,8 C 12,6 24,10 36,8" />
      <path d="M 30,3 L 37,8 L 30,13" />
    </svg>
  );
};

/** Authentic red-pencil editorial stamps (e.g. OJO, STET, NO, ?) */
export const EditorialStamp: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <span
    className={`font-hand text-base font-bold tracking-wider inline-block px-2 py-0.5 border border-dashed rounded rotate-[-2deg] select-none ${className}`}
    style={{
      borderColor: 'var(--red-pencil)',
      color: 'var(--red-pencil)',
      background: 'rgba(224, 6, 43, 0.05)',
    }}
  >
    {text}
  </span>
);
