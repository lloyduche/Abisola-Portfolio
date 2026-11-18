import React, { useState, useRef } from 'react';
import { Sparkles, Eye, Move } from 'lucide-react';

export const LiquidGlassLens: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lensPos, setLensPos] = useState({ x: 180, y: 110 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(50, Math.min(rect.width - 50, e.clientX - rect.left));
    const y = Math.max(50, Math.min(rect.height - 50, e.clientY - rect.top));
    setLensPos({ x, y });
  };

  return (
    <div className="relative rounded-3xl apple-liquid-glass p-5 overflow-hidden shadow-lg border border-white/80">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-full bg-[#4A0E1C]/10 text-[#4A0E1C]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5B86B]" />
          </span>
          <span className="font-headline font-semibold text-sm text-[#4A0E1C]">
            Apple Liquid Glass &bull; Optical Refraction
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-hand text-[#D995A9] font-bold">
          <Move className="w-3 h-3" />
          <span>Move mouse to refract</span>
        </div>
      </div>

      {/* Interactive Refraction Playground Canvas */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAF4EC] via-white to-[#F5ECE1] border border-[#4A0E1C]/10 cursor-crosshair select-none flex items-center justify-center p-6"
      >
        {/* Colorful fluid backdrop underneath that gets refracted */}
        <div
          className="absolute w-40 h-40 rounded-full blur-2xl opacity-70 animate-liquid-blob-1 pointer-events-none"
          style={{
            top: '20%',
            left: '25%',
            background: 'radial-gradient(circle, #D995A9, #E5B86B)',
          }}
        />
        <div
          className="absolute w-44 h-44 rounded-full blur-2xl opacity-60 animate-liquid-blob-2 pointer-events-none"
          style={{
            bottom: '15%',
            right: '20%',
            background: 'radial-gradient(circle, #E5B86B, #4A0E1C)',
          }}
        />

        {/* Content Under the Glass (Words and Metrics that bend) */}
        <div className="relative z-0 text-center space-y-2 pointer-events-none">
          <div className="font-headline font-bold text-2xl sm:text-3xl text-[#4A0E1C] tracking-tight">
            Words That Convert
          </div>
          <p className="font-body text-xs sm:text-sm text-[#38272D]/75 max-w-sm mx-auto">
            Storytelling &bull; Brand Messaging &bull; High-Impact Communications
          </p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#4A0E1C] text-white">
              12% Lift
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#D995A9] text-white">
              28k+ Views
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#E5B86B] text-[#4A0E1C]">
              Fintech &bull; B2B
            </span>
          </div>
        </div>

        {/* The Movable Apple Liquid Glass Refraction Lens */}
        <div
          className="absolute pointer-events-none z-20 rounded-full transition-transform duration-75 ease-out"
          style={{
            width: '110px',
            height: '110px',
            left: `${lensPos.x - 55}px`,
            top: `${lensPos.y - 55}px`,
            backdropFilter: 'blur(3px) brightness(1.15) contrast(1.1) saturate(200%)',
            WebkitBackdropFilter: 'blur(3px) brightness(1.15) contrast(1.1) saturate(200%)',
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(217, 149, 169, 0.1) 100%)',
            border: '1.5px solid rgba(255, 255, 255, 0.85)',
            boxShadow: `
              inset 0 3px 6px rgba(255, 255, 255, 0.9),
              inset 0 -3px 8px rgba(74, 14, 28, 0.15),
              0 16px 32px -8px rgba(74, 14, 28, 0.22),
              0 0 0 1px rgba(229, 184, 107, 0.3)
            `,
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          {/* Specular curved reflection glint */}
          <div
            className="absolute inset-1.5 rounded-full pointer-events-none opacity-85"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%, rgba(229, 184, 107, 0.25) 100%)',
              maskImage: 'radial-gradient(circle, transparent 60%, black 85%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 60%, black 85%)',
            }}
          />

          {/* Micro center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9px] font-hand font-bold text-[#4A0E1C]/80 bg-white/60 px-2 py-0.5 rounded-full border border-white/80 shadow-xs">
              liquid glass ✦
            </span>
          </div>
        </div>
      </div>

      {/* Footer caption */}
      <div className="flex items-center justify-between mt-3 text-[11px] font-body text-[#38272D]/70 px-1">
        <span className="flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-[#E5B86B]" />
          <span>Real-time optical refraction, specular rim &amp; chromatic sheen</span>
        </span>
        <span className="font-semibold text-[#4A0E1C]">VisionOS Aesthetic</span>
      </div>
    </div>
  );
};

export default LiquidGlassLens;
