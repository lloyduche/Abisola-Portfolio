import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const editorialPhrases = [
    'CORPORATE & BRAND COMMUNICATIONS',
    'B2B FINTECH MESSAGING & POSITIONING',
    'REGULATORY COMPLIANCE HOOKS',
    '12% LEAD-TO-ACTIVE CONVERSION BENCHMARK',
    '₦1.07 QUADRILLION TRANSACTION VOLUME PROOF',
    'ENTERPRISE WEBINAR SEQUENCES & LAUNCHES',
    'SUBSTACK ESSAYIST (ABISOLA WRITES)',
    'INTERNAL CULTURE & EXECUTIVE MESSAGING',
    '823+ ENTERPRISE LEADERS ASSEMBLED',
  ];

  return (
    <div
      className="border-y overflow-hidden select-none py-3"
      style={{
        background: 'var(--paper-aged)',
        borderColor: 'var(--ink-rule-strong)',
        color: 'var(--ink)',
      }}
    >
      <div className="flex items-center">
        {/* Label */}
        <div
          className="px-3.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest shrink-0 ml-4 mr-6 border"
          style={{
            background: 'var(--paper-leaf)',
            borderColor: 'var(--red-pencil)',
            color: 'var(--red-pencil)',
          }}
        >
          BROADSHEET TAPE
        </div>

        {/* Continuous Type Line */}
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee-broadsheet text-xs font-mono font-semibold tracking-widest uppercase">
            {[...editorialPhrases, ...editorialPhrases].map((phrase, idx) => (
              <span key={idx} className="inline-flex items-center gap-6 mr-8">
                <span>{phrase}</span>
                <span className="font-serif italic text-base text-[var(--red-pencil)]">
                  (published &amp; tested)
                </span>
                <span className="opacity-30">/</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
