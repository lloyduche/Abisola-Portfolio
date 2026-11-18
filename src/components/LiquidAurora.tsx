import React from 'react';

export const LiquidAurora: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* Liquid Organic Gradient Blobs */}
      <div
        className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full opacity-60 mix-blend-multiply blur-3xl animate-liquid-blob-1"
        style={{
          background: 'radial-gradient(circle, rgba(217, 149, 169, 0.55) 0%, rgba(229, 184, 107, 0.25) 60%, transparent 80%)',
        }}
      />
      <div
        className="absolute top-1/4 -right-28 w-[480px] h-[480px] rounded-full opacity-50 mix-blend-multiply blur-3xl animate-liquid-blob-2"
        style={{
          background: 'radial-gradient(circle, rgba(229, 184, 107, 0.5) 0%, rgba(217, 149, 169, 0.3) 60%, transparent 80%)',
        }}
      />
      <div
        className="absolute -bottom-28 left-1/3 w-[520px] h-[520px] rounded-full opacity-45 mix-blend-multiply blur-3xl animate-liquid-blob-3"
        style={{
          background: 'radial-gradient(circle, rgba(74, 14, 28, 0.18) 0%, rgba(217, 149, 169, 0.35) 50%, transparent 80%)',
        }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full opacity-35 mix-blend-multiply blur-3xl animate-liquid-blob-4"
        style={{
          background: 'radial-gradient(circle, rgba(250, 209, 186, 0.6) 0%, rgba(229, 184, 107, 0.2) 60%, transparent 80%)',
        }}
      />
    </div>
  );
};

export default LiquidAurora;
