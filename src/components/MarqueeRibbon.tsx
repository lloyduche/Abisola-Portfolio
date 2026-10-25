import React from 'react';
import { ConfettiBow } from './ConfettiBow';

export const MarqueeRibbon: React.FC = () => {
  const itemsA = [
    'marketing comms',
    'brand storytelling',
    'b2b copywriting',
    'email strategy',
    'regulatory compliance',
    'lead generation',
  ];

  const itemsB = [
    'fintech messaging',
    'hospitality webinars',
    'workplace stories',
    'substack essays',
    'luxury property copy',
    'pipeline reactivation',
  ];

  return (
    <div className="relative py-12 -my-6 overflow-hidden pointer-events-none select-none">
      {/* Top Ribbon */}
      <div className="w-[110%] -left-[5%] relative bg-theme-accent text-white border-y-2 border-theme-border py-3 transform -rotate-2 z-10 shadow-sm">
        <div className="flex gap-8 whitespace-nowrap animate-marquee font-display text-lg sm:text-2xl font-bold">
          {[...itemsA, ...itemsA, ...itemsA].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <ConfettiBow size="mini" fill="#FFFFFF" stroke="#1F2623" />
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Ribbon */}
      <div className="w-[110%] -left-[5%] relative bg-theme-ribbon text-theme-ink border-y-2 border-theme-border py-3 transform rotate-2 -mt-4 shadow-sm">
        <div className="flex gap-8 whitespace-nowrap animate-marquee-rev font-display text-lg sm:text-2xl font-bold">
          {[...itemsB, ...itemsB, ...itemsB].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <ConfettiBow size="mini" fill="var(--color-accent)" stroke="#1F2623" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
