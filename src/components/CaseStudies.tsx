import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { RedArrow, EditorialStamp } from './ManuscriptMarks';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  const editorialMarginNotes: Record<string, { decision: string; rationale: string; stamp: string }> = {
    cs1: {
      decision: 'Lead with the ₦200,000 regulatory penalty under Section 104.',
      rationale: 'CFOs and enterprise heads ignore generic sales pitches, but they immediately answer audit-risk notices.',
      stamp: 'REGULATORY AUDIT',
    },
    cs2: {
      decision: 'Anchor product positioning in Nigeria\'s ₦1.07 quadrillion transfer data.',
      rationale: 'Made virtual accounts and smart POS terminals feel like an inevitable infrastructure upgrade rather than just another vendor pitch.',
      stamp: 'INFRASTRUCTURE',
    },
    cs3: {
      decision: 'Segment invitation copy by industry-specific operational pain points.',
      rationale: 'Generated 823+ registrations and 520+ attendees by addressing hospitality and tax sectors with bespoke copy.',
      stamp: 'CONVERSION FUNNEL',
    },
    cs4: {
      decision: 'Pair vulnerable, authentic prose with sharp observational essays.',
      rationale: 'Grew to 1,469+ subscribers and 28,000+ views by treating the audience with intellectual respect.',
      stamp: 'LITERARY ESSAY',
    },
  };

  const currentAnnotation = editorialMarginNotes[activeCase.id] || editorialMarginNotes.cs1;

  return (
    <section id="case-studies" className="py-20 lg:py-32 border-b border-[var(--rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Broadsheet Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-10 border-b border-[var(--rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--red-pencil)]">&para; CHAPTER IV</span>
              <span>/</span>
              <span>IN-DEPTH STRATEGIC CASE SPREADS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--ink)]">
              Strategic Case Studies.
            </h2>
          </div>
          <div className="font-serif italic text-lg max-w-md text-[var(--ink)]/80">
            A deeper look into messaging architecture, audience psychology, execution funnels, and verified business results.
          </div>
        </div>

        {/* Typographic Case Index (NO BOXES, clean typographic tabs) */}
        <div className="flex items-center gap-8 overflow-x-auto pb-4 mb-16 scrollbar-none border-b border-[var(--rule)] text-xs font-mono uppercase tracking-wider">
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = activeTab === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`text-left pb-3 transition-colors relative whitespace-nowrap ${
                  isActive
                    ? 'text-[var(--ink)] font-bold'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <span className="text-[10px] block font-mono text-[var(--red-pencil)] mb-1">
                  SPREAD 0{idx + 1}
                </span>
                <span className="text-sm font-serif">{cs.title.split(':')[0]}</span>
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--red-pencil)]"
                    style={{ bottom: '-1px' }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Double-Page Spread: Verso (Left) & Recto (Right) — NO BOXES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Verso (Left 7 Cols): Narrative & Execution Analysis */}
          <div className="lg:col-span-7 space-y-10">

            {/* Headline & Subhead */}
            <div className="border-b border-[var(--rule)] pb-6">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[var(--red-pencil)] mb-3">
                <EditorialStamp text={currentAnnotation.stamp} />
                <span>DISCIPLINE // {activeCase.discipline}</span>
              </div>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)] leading-tight">
                {activeCase.title}
              </h3>
            </div>

            {/* 01: The Problem */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider mb-3 text-[var(--red-pencil)]">
                <span>01 // THE COMMERCIAL CONTEXT &amp; MANDATE</span>
              </div>
              <p className="font-serif text-lg text-[var(--ink)]/90 leading-relaxed font-normal">
                {activeCase.project}
              </p>
            </div>

            {/* 02: Strategic Framing */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider mb-3 text-[var(--red-pencil)]">
                <span>02 // STRATEGIC FRAMING &amp; AUDIENCE PSYCHOLOGY</span>
              </div>
              <p className="font-serif text-lg text-[var(--ink)]/90 leading-relaxed font-normal">
                {activeCase.approach}
              </p>
            </div>

            {/* 03: Execution Architecture */}
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider mb-4 text-[var(--red-pencil)]">
                <span>03 // EXECUTION ARCHITECTURE</span>
              </div>
              <div className="space-y-4">
                {activeCase.execution.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 font-serif text-base text-[var(--ink)]/90">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-[var(--red-pencil)]" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author's Capacity */}
            <div className="pt-6 border-t border-[var(--rule)] font-mono text-xs flex items-center justify-between">
              <div>
                <span className="text-[var(--ink-secondary)] uppercase block mb-1">AUTHOR'S CAPACITY</span>
                <span className="font-bold text-[var(--ink)]">{activeCase.role}</span>
              </div>
              <span className="text-[var(--red-pencil)] font-hand text-base">
                ~ verified engagement
              </span>
            </div>

          </div>

          {/* Recto (Right 5 Cols): Editorial Marginalia & Quantified Impact — Divided by hairline rule */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--rule)] lg:pl-12 space-y-10">

            {/* Editorial Decision Note (Manuscript Marginalia style) */}
            <div className="border-b border-[var(--rule)] pb-8">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--red-pencil)] mb-2">
                <RedArrow direction="right" />
                <span>EDITORIAL DECISION // MARGIN NOTE</span>
              </div>
              <p className="font-hand text-xl text-[var(--red-pencil)] font-bold mb-2">
                "{currentAnnotation.decision}"
              </p>
              <p className="font-serif italic text-base text-[var(--ink)]/85 leading-relaxed">
                {currentAnnotation.rationale}
              </p>
            </div>

            {/* Quantified Business Impact (Clean typography, NO BOXES) */}
            <div className="border-b border-[var(--rule)] pb-8">
              <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink-secondary)] mb-6">
                QUANTIFIED COMMERCIAL OUTCOMES
              </div>

              <div className="space-y-6">
                {activeCase.results.map((r, idx) => (
                  <div key={idx} className="border-b border-[var(--rule)]/60 pb-4 last:border-0 last:pb-0">
                    <div className="font-display font-black text-4xl sm:text-5xl text-[var(--red-pencil)] leading-none mb-1">
                      {r.stat}
                    </div>
                    <div className="font-serif text-base text-[var(--ink)] font-medium">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pull Quote */}
            {activeCase.quote && (
              <div className="border-b border-[var(--rule)] pb-8">
                <blockquote className="font-serif italic text-lg sm:text-xl text-[var(--ink)]/90 leading-relaxed pl-4 border-l-2 border-[var(--red-pencil)]">
                  "{activeCase.quote}"
                </blockquote>
              </div>
            )}

            {/* Link if available */}
            {activeCase.link && (
              <div className="pt-2">
                <a
                  href={activeCase.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--red-pencil)] hover:underline"
                >
                  <span>{activeCase.link.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
