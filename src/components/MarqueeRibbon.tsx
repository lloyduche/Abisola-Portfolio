import React from 'react';

export const MarqueeRibbon: React.FC = () => {
  const manuscriptPhrases = [
    '¶ B2B FINTECH MESSAGING',
    '§ REGULATORY COMPLIANCE HOOKS',
    '❡ 12% LEAD-TO-ACTIVE CONVERSION',
    '¶ ₦1.07 QUADRILLION TRANSACTION PROOF',
    '§ ENTERPRISE WEBINAR SEQUENCES',
    '❡ SUBSTACK ESSAYIST (ABISOLA WRITES)',
    '¶ INTERNAL CULTURE & WORKPLACE STORIES',
    '§ LINGUISTIC PRECISION & EMPATHY',
    '❡ 823+ EXECUTIVES CONVERTED',
  ];

  return (
    <div
      className="border-y overflow-hidden select-none py-2.5"
      style={{
        background: 'var(--paper-aged)',
        borderColor: 'var(--ink-rule-strong)',
        color: 'var(--ink)',
      }}
    >
      <div className="flex items-center">
        {/* Proof Label */}
        <div
          className="px-3.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-widest shrink-0 ml-4 mr-6 border"
          style={{
            background: 'var(--paper-leaf)',
            borderColor: 'var(--red-pencil)',
            color: 'var(--red-pencil)',
          }}
        >
          GALLEY TAPE
        </div>

        {/* Running Text */}
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-manuscript-ticker text-xs font-mono font-semibold tracking-widest uppercase">
            {[...manuscriptPhrases, ...manuscriptPhrases].map((phrase, idx) => (
              <span key={idx} className="inline-flex items-center gap-6 mr-6">
                <span>{phrase}</span>
                <span className="font-hand text-base lowercase" style={{ color: 'var(--red-pencil)' }}>
                  (drafted &amp; tested)
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
