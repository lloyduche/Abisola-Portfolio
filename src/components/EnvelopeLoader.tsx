import React, { useState, useEffect } from 'react';
import { usePalette } from '../context/PaletteContext';

type Stage = 'sealed' | 'bursting' | 'opening' | 'done';

export const EnvelopeLoader: React.FC = () => {
  const [stage, setStage] = useState<Stage>('sealed');
  const { palette } = usePalette();

  useEffect(() => {
    // Auto-open after 1.8s
    const t1 = setTimeout(() => open(), 1800);
    return () => clearTimeout(t1);
  }, []);

  const open = () => {
    if (stage !== 'sealed') return;
    setStage('bursting');
    setTimeout(() => setStage('opening'), 300);
    setTimeout(() => setStage('done'), 1500);
  };

  if (stage === 'done') return null;

  const isOpen = stage === 'opening';
  const bg = palette === 'lilac' ? '#E5E5F5' : '#DDF0E4';
  const accent = palette === 'lilac' ? '#F10F35' : '#F70F35';
  const pink = '#FF63B5';
  const plum = '#48213F';

  return (
    <div
      onClick={open}
      className="fixed inset-0 z-[200] flex items-center justify-center cursor-pointer select-none"
      aria-hidden="true"
    >
      {/* Left flap */}
      <div
        className="envelope-left absolute left-0 top-0 bottom-0 w-[50.5%] flex items-center justify-end"
        style={{
          background: bg,
          borderRight: `3px solid ${plum}`,
          transform: isOpen ? 'translateX(-105%)' : 'translateX(0)',
          transition: 'transform 1s cubic-bezier(0.77, 0, 0.18, 1)',
        }}
      >
        {/* Diagonal letter-fold lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100" y2="50" stroke={plum} strokeWidth="1" />
          <line x1="0" y1="100" x2="100" y2="50" stroke={plum} strokeWidth="1" />
        </svg>
      </div>

      {/* Right flap */}
      <div
        className="envelope-right absolute right-0 top-0 bottom-0 w-[50.5%] flex items-center justify-start"
        style={{
          background: bg,
          borderLeft: `3px solid ${plum}`,
          transform: isOpen ? 'translateX(105%)' : 'translateX(0)',
          transition: 'transform 1s cubic-bezier(0.77, 0, 0.18, 1)',
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="100" y1="0" x2="0" y2="50" stroke={plum} strokeWidth="1" />
          <line x1="100" y1="100" x2="0" y2="50" stroke={plum} strokeWidth="1" />
        </svg>
      </div>

      {/* Center seal content */}
      <div
        className="relative z-10 flex flex-col items-center gap-6 text-center px-6"
        style={{
          transform: isOpen ? 'scale(0) rotate(180deg)' : 'scale(1)',
          opacity: isOpen ? 0 : 1,
          transition: 'transform 0.5s ease, opacity 0.3s ease',
        }}
      >
        {/* Wax-seal SVG */}
        <div
          className="w-36 h-36 rounded-full flex items-center justify-center"
          style={{
            background: accent,
            border: `4px solid ${plum}`,
            boxShadow: `0 0 0 8px ${pink}40, 6px 6px 0 ${plum}`,
          }}
        >
          <svg viewBox="0 0 120 84" width="80" height="auto">
            <path d="M56 44 L38 80 L49 75 L53 84 L60 46 Z" fill="#fff" stroke={plum} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M64 44 L82 80 L71 75 L67 84 L60 46 Z" fill="#fff" stroke={plum} strokeWidth="2.5" strokeLinejoin="round" />
            <path d="M60 40 C40 8, 6 10, 9 34 C12 58, 40 56, 60 40 Z" fill="#fff" stroke={plum} strokeWidth="2.5" />
            <path d="M60 40 C80 8, 114 10, 111 34 C108 58, 80 56, 60 40 Z" fill="#fff" stroke={plum} strokeWidth="2.5" />
            <ellipse cx="60" cy="40" rx="10" ry="12" fill={pink} stroke={plum} strokeWidth="2.5" />
          </svg>
        </div>

        {/* Text */}
        <div>
          <p className="font-hand text-4xl sm:text-5xl font-bold" style={{ color: plum }}>
            a letter for you
          </p>
          <p
            className="text-xs font-bold uppercase tracking-widest mt-2"
            style={{ color: plum, opacity: 0.55 }}
          >
            tap to open · or wait
          </p>
        </div>
      </div>
    </div>
  );
};
