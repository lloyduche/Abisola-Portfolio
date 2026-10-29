import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-20 lg:pb-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Folio Header of the Manuscript Sheet */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b text-xs font-mono tracking-widest uppercase" style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink-muted)' }}>
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ CHAPTER I</span>
            <span>/</span>
            <span>THE OPENING LINE</span>
            <span className="hidden sm:inline">· WORKING DRAFT NO. 04</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="proof-stamp">
              PROOFREAD &amp; REVISED
            </span>
          </div>
        </div>

        {/* 2-Column Manuscript Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: The Typeset Text & Red Marginalia */}
          <div className="lg:col-span-8 flex flex-col justify-center">

            {/* Editorial Correction Marker */}
            <div className="mb-4">
              <div className="flex items-center gap-2 font-hand text-base sm:text-lg" style={{ color: 'var(--red-pencil)' }}>
                <span>^</span>
                <span className="italic">draft note: start directly with the conviction —</span>
              </div>
              <div className="font-mono text-xs strike-edit mt-0.5" style={{ color: 'var(--ink-muted)' }}>
                ~~Every brand has something to say, but few know how to say it.~~
              </div>
            </div>

            {/* The Opening Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8" style={{ color: 'var(--ink)' }}>
              Language with intent. <br />
              <span className="italic font-normal" style={{ color: 'var(--red-pencil)' }}>
                Strategy with soul.
              </span>
            </h1>

            {/* Main Editorial Paragraph with Literary Drop Cap */}
            <div className="relative mb-8">
              {/* Floating Marginal Note in Desktop Margin */}
              <div className="hidden xl:block absolute -left-28 top-3 w-24 font-hand text-sm leading-tight text-right select-none" style={{ color: 'var(--red-pencil)' }}>
                <span>[stet. author's core premise]</span>
                <span className="block text-xs mt-1 text-ink/40 font-mono">§ 01</span>
              </div>

              <p className="font-serif text-xl sm:text-2xl lg:text-2xl text-ink leading-relaxed font-normal drop-cap">
                {HERO_DATA.lede}
              </p>
            </div>

            {/* Areas of Expertise Introduced with Handwritten Marginal Annotations */}
            <div className="mb-10">
              <div className="flex items-center gap-2 font-hand text-sm sm:text-base mb-3" style={{ color: 'var(--red-pencil)' }}>
                <span>✦</span>
                <span>editorial focus &amp; core disciplines under revision:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HERO_DATA.roles.map((role, i) => {
                  const notes = [
                    'internal, external & executive voice',
                    '₦1.07Q volume & e-invoicing hooks',
                    'authentic culture & brand framing',
                    'essays on craft, culture & womanhood',
                  ];

                  return (
                    <div
                      key={role}
                      className="p-3.5 rounded border paper-sheet transition-all hover:border-[var(--red-pencil)]"
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--ink)' }}>
                        <span>0{i + 1} // {role}</span>
                      </div>
                      <div className="font-hand text-sm sm:text-base leading-tight" style={{ color: 'var(--red-pencil)' }}>
                        ~ {notes[i]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons styled like classical book links */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 sm:px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-sm"
                style={{
                  background: 'var(--ink)',
                  color: 'var(--paper)',
                }}
              >
                <span>Read the Galley Proofs</span>
                <ArrowDown className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
              </a>

              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 rounded border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all hover:bg-black/5"
                style={{
                  borderColor: 'var(--ink-rule-strong)',
                  color: 'var(--ink)',
                }}
              >
                <span>Read Essays on Substack</span>
                <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
              </a>
            </div>
          </div>

          {/* Right Column: Author's Plate & Editorial Marginalia Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Author's Mounted Photographic Plate */}
            <div className="paper-sheet p-3.5 rounded-lg border relative">
              {/* Corner Mount Graphic Embellishments */}
              <div className="w-full aspect-[4/5] rounded overflow-hidden relative border" style={{ borderColor: 'var(--ink-rule)' }}>
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin - Author Portrait"
                  className="w-full h-full object-cover"
                />

                {/* Archival Label Tag */}
                <div
                  className="absolute bottom-2 left-2 right-2 p-2.5 rounded text-[11px] font-mono border backdrop-blur-md"
                  style={{
                    background: 'rgba(255,255,255,0.85)',
                    borderColor: 'var(--ink-rule)',
                    color: 'var(--ink)',
                  }}
                >
                  <div className="font-bold flex items-center justify-between">
                    <span>PLATE I: THE AUTHOR</span>
                    <span style={{ color: 'var(--red-pencil)' }}>LAGOS, NG</span>
                  </div>
                  <div className="font-hand text-sm mt-0.5" style={{ color: 'var(--ink)' }}>
                    Abisola Oluwatoyin — writer &amp; strategist
                  </div>
                </div>
              </div>

              {/* Handwritten Note underneath */}
              <div className="mt-3 text-center font-hand text-base" style={{ color: 'var(--red-pencil)' }}>
                "in love with language, syntax &amp; commercial meaning"
              </div>
            </div>

            {/* Margin Proofs & Verified Numbers Box */}
            <div
              className="p-5 rounded-lg border paper-sheet space-y-4"
              style={{ borderColor: 'var(--ink-rule)' }}
            >
              <div className="flex items-center justify-between pb-2 border-b text-[11px] font-mono font-bold uppercase tracking-wider" style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink-muted)' }}>
                <span>MARGINAL NOTES // VERIFIED STATS</span>
                <span style={{ color: 'var(--red-pencil)' }}>REF: 2026</span>
              </div>

              <div className="space-y-3 font-serif">
                <div className="border-b pb-2" style={{ borderColor: 'var(--ink-rule)' }}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-black text-2xl" style={{ color: 'var(--red-pencil)' }}>
                      ₦1.07Q
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-ink/60">Fintech Hook</span>
                  </div>
                  <p className="font-hand text-sm leading-tight mt-0.5" style={{ color: 'var(--ink)' }}>
                    ~ 11.2B NIP transactions anchor for product positioning
                  </p>
                </div>

                <div className="border-b pb-2" style={{ borderColor: 'var(--ink-rule)' }}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-black text-2xl" style={{ color: 'var(--red-pencil)' }}>
                      12%
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-ink/60">Conversion</span>
                  </div>
                  <p className="font-hand text-sm leading-tight mt-0.5" style={{ color: 'var(--ink)' }}>
                    ~ lead-to-active rate, exceeding 5% benchmark by 240%
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-black text-2xl" style={{ color: 'var(--red-pencil)' }}>
                      1,469+
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-ink/60">Subscribers</span>
                  </div>
                  <p className="font-hand text-sm leading-tight mt-0.5" style={{ color: 'var(--ink)' }}>
                    ~ 28k+ reads across published essays on Abisola Writes
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
