import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const wireItems = [
    'CORPORATE & BRAND COMMUNICATIONS',
    'REGULATORY COMPLIANCE E-INVOICING HOOKS',
    'B2B FINTECH MESSAGING & POSITIONING',
    'HIGH-CONVERTING EMAIL SEQUENCES',
    'ENTERPRISE WEBINAR LAUNCH FUNNELS',
    'EXECUTIVE CULTURE & WORKPLACE STORYTELLING',
    'SUBSTACK ESSAYIST (ABISOLA WRITES)',
    '12% LEAD-TO-ACTIVE CONVERSION RATE',
    '₦1.07 QUADRILLION TRANSACTION HOOK',
  ];

  return (
    <div
      className="border-y overflow-hidden select-none"
      style={{
        background: 'var(--bg-dark)',
        borderColor: 'var(--border-strong)',
        color: '#FFFFFF',
      }}
    >
      {/* Top Stream */}
      <div className="py-2.5 flex items-center border-b border-white/10">
        <div className="px-4 py-0.5 bg-accent text-white text-[10px] font-mono font-extrabold uppercase tracking-widest shrink-0 mr-4 ml-2">
          LIVE FEED
        </div>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee-wire text-xs font-mono font-bold tracking-widest uppercase text-white/90">
            {[...wireItems, ...wireItems].map((item, idx) => (
              <span key={idx} className="inline-flex items-center gap-6 mr-6">
                <span>{item}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Reverse Stream */}
      <div className="py-2 bg-black/40 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee-wire-rev text-[11px] font-mono font-medium tracking-wider uppercase text-white/60">
          {[...wireItems, ...wireItems].reverse().map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-6 mr-6">
              <span>{item}</span>
              <span className="text-accent2 opacity-80">//</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
