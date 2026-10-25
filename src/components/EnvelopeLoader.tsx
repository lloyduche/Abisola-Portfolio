import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

interface EnvelopeLoaderProps {
  onComplete?: () => void;
}

export const EnvelopeLoader: React.FC<EnvelopeLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'drawing' | 'opening' | 'done'>('drawing');

  useEffect(() => {
    // 1. Start opening after drawing animation (approx 1.2s)
    const openTimer = setTimeout(() => {
      triggerOpen();
    }, 1400);

    return () => clearTimeout(openTimer);
  }, []);

  const triggerOpen = () => {
    if (stage !== 'drawing') return;

    // Small celebration pop when seal breaks
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { x: 0.5, y: 0.45 },
      colors: ['#C85A32', '#D2DFD7', '#E8DFC8', '#1F2623', '#D93A72'],
    });

    setStage('opening');

    // Complete and remove loader after doors slide open
    setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 1000);
  };

  if (stage === 'done') return null;

  return (
    <div
      onClick={triggerOpen}
      className={`fixed inset-0 z-50 overflow-hidden cursor-pointer select-none transition-opacity duration-300 ${
        stage === 'opening' ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      aria-label="Opening envelope"
    >
      {/* Left Door / Envelope Half */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-[50.5%] bg-theme-ribbon border-r-3 border-theme-border z-10 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)] flex items-center justify-end ${
          stage === 'opening' ? '-translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Subtle envelope fold diagonal line */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line x1="0" y1="0" x2="100" y2="50" stroke="var(--color-border)" strokeWidth="1.5" />
          <line x1="0" y1="100" x2="100" y2="50" stroke="var(--color-border)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Right Door / Envelope Half */}
      <div
        className={`absolute top-0 bottom-0 right-0 w-[50.5%] bg-theme-ribbon border-l-3 border-theme-border z-10 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.18,1)] flex items-center justify-start ${
          stage === 'opening' ? 'translate-x-full' : 'translate-x-0'
        }`}
      >
        {/* Subtle envelope fold diagonal line */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line x1="100" y1="0" x2="0" y2="50" stroke="var(--color-border)" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="0" y2="50" stroke="var(--color-border)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Center Seal / Bow & Opening Text */}
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          stage === 'opening' ? 'scale-0 opacity-0 rotate-180' : 'scale-100 opacity-100'
        }`}
      >
        {/* Envelope Center Badge / Bow SVG */}
        <div className="relative w-44 sm:w-56 h-auto drop-shadow-xl animate-wiggle">
          <svg viewBox="0 0 120 84" className="w-full h-auto block">
            {/* Ribbon Tails */}
            <path
              d="M56 44 L38 80 L49 75 L53 84 L60 46 Z"
              fill="var(--color-accent)"
              stroke="var(--color-border)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="M64 44 L82 80 L71 75 L67 84 L60 46 Z"
              fill="var(--color-accent)"
              stroke="var(--color-border)"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            {/* Left Loop */}
            <path
              d="M60 40 C40 8, 6 10, 9 34 C12 58, 40 56, 60 40 Z"
              fill="var(--color-accent)"
              stroke="var(--color-border)"
              strokeWidth="3"
            />
            {/* Right Loop */}
            <path
              d="M60 40 C80 8, 114 10, 111 34 C108 58, 80 56, 60 40 Z"
              fill="var(--color-accent)"
              stroke="var(--color-border)"
              strokeWidth="3"
            />
            {/* Inner loop crease accents */}
            <path
              d="M24 30 C30 24, 40 26, 46 32"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M96 30 C90 24, 80 26, 74 32"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Center knot */}
            <ellipse
              cx="60"
              cy="40"
              rx="11"
              ry="13"
              fill="var(--color-secondary)"
              stroke="var(--color-border)"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Handwritten text */}
        <div className="mt-6 flex flex-col items-center">
          <span className="hand text-3xl sm:text-4xl md:text-5xl font-bold text-theme-ink tracking-wide drop-shadow-sm">
            untying the bow &amp; opening the letter...
          </span>
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-theme-muted mt-2 opacity-75">
            (click anywhere to open)
          </span>
        </div>
      </div>
    </div>
  );
};
