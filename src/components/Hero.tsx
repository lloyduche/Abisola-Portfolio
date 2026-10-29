import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [hoveredDrawer, setHoveredDrawer] = useState<number | null>(null);

  const drawers = [
    {
      num: 'I',
      title: 'The Author',
      subtitle: 'Biography & Career Ledger',
      peek: 'Philosophy, education in English Language, and enterprise appointments at Redtech, UBA & Estatelinks.',
      href: '#about',
    },
    {
      num: 'II',
      title: 'Campaign Proofs',
      subtitle: 'Marketing & Conversion Copy',
      peek: 'Filed proofs: Section 104 tax compliance sequences, fintech payment infrastructure, and webinar invitations.',
      href: '#campaigns',
    },
    {
      num: 'III',
      title: 'The Editorial Room',
      subtitle: 'Strategic Project Dossiers',
      peek: 'Deep-dive analytical dossiers: The Commercial Mandate, Audience Framing, and Quantified Outcomes.',
      href: '#editorial-room',
    },
    {
      num: 'IV',
      title: 'Personal Writing',
      subtitle: 'Abisola Writes on Substack',
      peek: 'Literary essays, cultural observations, and fiction read by 1,469+ subscribers across 28k+ views.',
      href: '#personal-writing',
    },
    {
      num: 'V',
      title: 'Correspondence',
      subtitle: 'Open Inquiry Dispatch',
      peek: 'Direct inquiry channel for communications mandates, content strategy, and editorial commissions.',
      href: '#correspondence',
    },
  ];

  return (
    <section id="home" className="pt-10 sm:pt-16 pb-20 lg:pb-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Archival Folio Masterhead */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-3 mb-10 border-b border-[var(--cabinet-rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--cabinet-burgundy)]">&para; CATALOGUE MASTER INDEX</span>
            <span>/</span>
            <span>CLASSIFICATION REF: AO-2026 // DRAWER COLLECTION</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="dossier-stamp">ARCHIVE VERIFIED</span>
          </div>
        </div>

        {/* Monumental Editorial Headline & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12 mb-16 border-b border-[var(--cabinet-rule)]">
          <div className="lg:col-span-8">
            <h1
              className="font-display font-black tracking-tight leading-[0.92] text-[var(--cabinet-burgundy)] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7.8vw, 6.8rem)' }}
            >
              Words that persuade. <br />
              <span className="font-serif italic font-normal text-[var(--cabinet-brass)]">
                Ideas that endure.
              </span>
            </h1>

            <p className="font-serif text-xl sm:text-2xl text-[var(--ink)]/85 max-w-3xl leading-relaxed font-normal">
              Inside this curated cabinet lives the marketing strategy, conversion copywriting, executive narratives, and literary essays of <strong className="font-semibold text-[var(--cabinet-burgundy)]">Abisola Oluwatoyin</strong>.
            </p>
          </div>

          {/* Author Portrait Plate (Archival Mounted Photograph) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="relative p-2.5 rounded-sm border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] shadow-sm max-w-[260px]">
              <div className="brass-screw absolute top-1.5 left-1.5" />
              <div className="brass-screw absolute top-1.5 right-1.5" />
              <div className="brass-screw absolute bottom-1.5 left-1.5" />
              <div className="brass-screw absolute bottom-1.5 right-1.5" />

              <div className="aspect-[4/5] overflow-hidden border border-[var(--cabinet-rule)]">
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin"
                  className="w-full h-full object-cover filter contrast-[1.05]"
                />
              </div>

              <div className="pt-2 text-center">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--ink-secondary)] block">
                  AUTHOR DOSSIER PLATE // 2026
                </span>
                <span className="font-serif italic text-xs text-[var(--cabinet-burgundy)]">
                  Abisola Oluwatoyin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Cabinet Drawers Row (Vintage Library Catalogue, Contemporary Styling) */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--cabinet-rule)] text-xs font-mono uppercase tracking-widest text-[var(--ink-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--cabinet-brass)]" />
              <span>THE FIVE DRAWERS // HOVER TO REVEAL CONTENTS</span>
            </div>
            <span className="hidden sm:inline">CLICK TO OPEN COMPARTMENT &darr;</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {drawers.map((drawer, idx) => {
              const isHovered = hoveredDrawer === idx;
              return (
                <a
                  key={drawer.num}
                  href={drawer.href}
                  onMouseEnter={() => setHoveredDrawer(idx)}
                  onMouseLeave={() => setHoveredDrawer(null)}
                  className="group relative p-5 rounded-sm border transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                  style={{
                    background: isHovered
                      ? 'var(--cabinet-burgundy)'
                      : 'var(--cabinet-cream-dark)',
                    borderColor: isHovered
                      ? 'var(--cabinet-brass)'
                      : 'var(--cabinet-rule)',
                    color: isHovered ? '#FAF7F2' : 'var(--ink)',
                    transform: isHovered ? 'translateY(-4px)' : 'none',
                    boxShadow: isHovered
                      ? '0 12px 24px rgba(42, 8, 19, 0.25)'
                      : 'none',
                  }}
                >
                  {/* Top Drawer Index Label */}
                  <div>
                    <div className="flex items-center justify-between pb-2 mb-3 border-b text-[10px] font-mono tracking-wider uppercase" style={{ borderColor: isHovered ? 'rgba(200, 158, 83, 0.3)' : 'var(--cabinet-rule)' }}>
                      <span className="font-bold text-[var(--cabinet-brass)]">
                        DRAWER {drawer.num}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--cabinet-brass)]" />
                    </div>

                    <h3 className="font-serif font-bold text-lg leading-snug mb-1">
                      {drawer.title}
                    </h3>

                    <div className="text-xs font-serif italic opacity-75 mb-3">
                      {drawer.subtitle}
                    </div>

                    {/* Peek View on Hover */}
                    <p className={`text-xs font-serif leading-relaxed transition-opacity duration-200 ${
                      isHovered ? 'opacity-90' : 'opacity-65'
                    }`}>
                      {drawer.peek}
                    </p>
                  </div>

                  {/* Brass Pull Handle at Bottom */}
                  <div className="pt-4 mt-auto">
                    <div
                      className="w-12 h-2.5 mx-auto rounded-t-sm border border-b-0 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(to bottom, #DFBF7B, #C89E53)',
                        borderColor: '#9A722C',
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                      }}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* 3 Archival Verification Plates (Quantified Credentials) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[var(--cabinet-rule)]">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--cabinet-brass)] font-bold block">
              VERIFIED IMPACT // 01
            </span>
            <div className="font-display font-black text-4xl sm:text-5xl text-[var(--cabinet-burgundy)] leading-none">
              12%
            </div>
            <div className="font-serif font-bold text-lg text-[var(--ink)]">
              Lead-to-Active Conversion Rate
            </div>
            <div className="text-xs font-serif text-[var(--ink-secondary)] leading-relaxed">
              Exceeded the 5% fintech industry target by 240% during e-invoicing rollout.
            </div>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--cabinet-brass)] font-bold block">
              VERIFIED IMPACT // 02
            </span>
            <div className="font-display font-black text-4xl sm:text-5xl text-[var(--cabinet-burgundy)] leading-none">
              28,100+
            </div>
            <div className="font-serif font-bold text-lg text-[var(--ink)]">
              Substack Essay Readership
            </div>
            <div className="text-xs font-serif text-[var(--ink-secondary)] leading-relaxed">
              1,469+ organic global subscribers reading cultural commentary &amp; personal prose.
            </div>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--cabinet-brass)] font-bold block">
              VERIFIED IMPACT // 03
            </span>
            <div className="font-display font-black text-4xl sm:text-5xl text-[var(--cabinet-burgundy)] leading-none">
              823+
            </div>
            <div className="font-serif font-bold text-lg text-[var(--ink)]">
              Enterprise Webinar Registrants
            </div>
            <div className="text-xs font-serif text-[var(--ink-secondary)] leading-relaxed">
              Over 520+ attendees engaged across fiscal taxation and hospitality activations.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
