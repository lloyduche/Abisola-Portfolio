import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  const dossierNotes: Record<string, { decision: string; rationale: string; callSign: string }> = {
    cs1: {
      decision: 'Lead with the ₦200,000 regulatory penalty under Section 104.',
      rationale: 'CFOs and enterprise heads ignore generic sales pitches, but they immediately answer audit-risk notices.',
      callSign: 'DOSSIER-TAX-104',
    },
    cs2: {
      decision: 'Anchor product positioning in Nigeria\'s ₦1.07 quadrillion transfer data.',
      rationale: 'Made virtual accounts and smart POS terminals feel like an inevitable infrastructure upgrade rather than just another vendor pitch.',
      callSign: 'DOSSIER-FINTECH-RAILS',
    },
    cs3: {
      decision: 'Position luxury property as a holistic architectural story rather than an amenities checklist.',
      rationale: 'Generated direct inquiries within 48h and increased DM engagement by 40% for ₦1.3B Old Ikoyi listing.',
      callSign: 'DOSSIER-REALESTATE-IKOYI',
    },
    cs4: {
      decision: 'Pair vulnerable, authentic prose with sharp observational essays.',
      rationale: 'Grew to 1,469+ subscribers and 28,000+ views by treating the audience with intellectual respect.',
      callSign: 'DOSSIER-SUBSTACK-WRITING',
    },
  };

  const currentNote = dossierNotes[activeCase.id] || dossierNotes.cs1;

  return (
    <section id="editorial-room" className="py-20 lg:py-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Archival Drawer Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-10 border-b border-[var(--cabinet-rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--cabinet-brass)]">&para; DRAWER III</span>
              <span>/</span>
              <span>THE EDITORIAL ROOM &bull; STRATEGIC PROJECT DOSSIERS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--cabinet-burgundy)]">
              The Project Dossiers.
            </h2>
          </div>
          <div className="font-serif italic text-base sm:text-lg max-w-md text-[var(--ink)]/80">
            Comprehensive breakdowns detailing the commercial brief, author contribution, and verified results.
          </div>
        </div>

        {/* Dossier Tabs Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[var(--cabinet-rule)]">
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = activeTab === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`folder-tab px-4 py-2.5 text-xs font-mono whitespace-nowrap text-left ${
                  isActive
                    ? 'active text-[var(--cabinet-burgundy)] font-bold'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <div className="text-[9px] text-[var(--cabinet-brass)] font-bold">
                  DOSSIER 0{idx + 1}
                </div>
                <div>{cs.title.split(':')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Active Dossier Portfolio Spread */}
        <div className="border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] p-8 sm:p-14 rounded-sm shadow-sm relative">

          {/* Dossier Header Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--cabinet-rule)] font-mono text-xs uppercase">
            <div className="flex items-center gap-3">
              <span className="dossier-stamp">CONFIDENTIAL DOSSIER</span>
              <span className="text-[var(--cabinet-burgundy)] font-bold">
                REF // {currentNote.callSign}
              </span>
            </div>
            <div className="text-[var(--ink-secondary)] text-right">
              DISCIPLINE: {activeCase.discipline}
            </div>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-4xl text-[var(--cabinet-burgundy)] leading-tight mb-10">
            {activeCase.title}
          </h3>

          {/* Two-Column Dossier Content: Brief & Contribution vs. Impact & Note */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left 7 Columns: Brief, Strategy & Execution */}
            <div className="lg:col-span-7 space-y-8 font-serif text-lg leading-relaxed text-[var(--ink)]/90">

              {/* 01: The Brief */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 text-[var(--cabinet-brass)]">
                  01 // THE COMMERCIAL BRIEF &amp; MANDATE
                </h4>
                <p className="font-normal">
                  {activeCase.project}
                </p>
              </div>

              {/* 02: The Strategic Contribution */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2 text-[var(--cabinet-brass)]">
                  02 // AUTHOR'S STRATEGIC CONTRIBUTION
                </h4>
                <p className="font-normal">
                  {activeCase.approach}
                </p>
              </div>

              {/* 03: Execution Highlights */}
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-3 text-[var(--cabinet-brass)]">
                  03 // EXECUTION HIGHLIGHTS
                </h4>
                <div className="space-y-3">
                  {activeCase.execution.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3 font-serif text-base font-normal">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[var(--cabinet-brass)]" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Capacity */}
              <div className="pt-4 border-t border-[var(--cabinet-rule)] font-mono text-xs">
                <span className="text-[var(--ink-secondary)] uppercase block mb-1">CAPACITY:</span>
                <span className="font-bold text-[var(--cabinet-burgundy)]">{activeCase.role}</span>
              </div>
            </div>

            {/* Right 5 Columns: Verified Business Impact & Editorial Margin Note */}
            <div className="lg:col-span-5 lg:border-l lg:border-[var(--cabinet-rule)] lg:pl-10 space-y-8">

              {/* Strategic Editorial Decision Note */}
              <div className="p-5 rounded-sm border border-[var(--cabinet-brass)] bg-[var(--cabinet-cream)] space-y-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--cabinet-brass)] block">
                  KEY EDITORIAL DECISION //
                </span>
                <div className="font-serif italic font-bold text-lg text-[var(--cabinet-burgundy)]">
                  "{currentNote.decision}"
                </div>
                <p className="font-serif text-sm text-[var(--ink)]/80 leading-relaxed">
                  {currentNote.rationale}
                </p>
              </div>

              {/* Quantified Business Impact */}
              <div className="p-6 rounded-sm border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream)] space-y-4">
                <div className="font-mono text-xs font-bold uppercase tracking-wider border-b border-[var(--cabinet-rule)] pb-2 text-[var(--cabinet-brass)]">
                  VERIFIED COMMERCIAL RESULTS
                </div>

                {activeCase.results.map((r, idx) => (
                  <div key={idx} className="border-b border-[var(--cabinet-rule)]/60 pb-3 last:border-0 last:pb-0">
                    <div className="font-display font-black text-3xl sm:text-4xl text-[var(--cabinet-burgundy)]">
                      {r.stat}
                    </div>
                    <div className="font-serif text-sm font-semibold text-[var(--ink)] mt-0.5">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote if available */}
              {activeCase.quote && (
                <blockquote className="p-4 rounded-sm border-l-2 border-[var(--cabinet-brass)] bg-[var(--cabinet-cream)] font-serif italic text-base text-[var(--ink)]/85">
                  "{activeCase.quote}"
                </blockquote>
              )}

              {/* Direct Link */}
              {activeCase.link && (
                <div>
                  <a
                    href={activeCase.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] transition-colors underline"
                  >
                    <span>{activeCase.link.label}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
