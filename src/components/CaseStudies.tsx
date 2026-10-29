import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, Bookmark } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  const editorialMarginNotes: Record<string, { decision: string; rationale: string }> = {
    cs1: {
      decision: 'Lead with the ₦200,000 regulatory penalty under Section 104.',
      rationale: 'CFOs and enterprise heads ignore generic sales pitches, but they immediately open audit-risk notices.',
    },
    cs2: {
      decision: 'Anchor product positioning in Nigeria\'s ₦1.07 quadrillion transfer data.',
      rationale: 'Made virtual accounts and smart POS terminals feel like an inevitable infrastructure upgrade rather than just another vendor pitch.',
    },
    cs3: {
      decision: 'Segment invitation copy by industry-specific operational pain points.',
      rationale: 'Generated 823+ registrations and 520+ attendees by addressing hospitality and tax sectors with bespoke copy.',
    },
    cs4: {
      decision: 'Pair vulnerable, authentic prose with sharp observational essays.',
      rationale: 'Grew to 1,469+ subscribers and 28,000+ views by treating the audience with intellectual respect.',
    },
  };

  const currentAnnotation = editorialMarginNotes[activeCase.id] || editorialMarginNotes.cs1;

  return (
    <section id="case-studies" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-10 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2" style={{ color: 'var(--ink-muted)' }}>
              <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ CHAPTER V</span>
              <span>/</span>
              <span>EDITORIAL SPREADS &amp; STRATEGY MEMORANDUMS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight" style={{ color: 'var(--ink)' }}>
              Case Studies in the Margins.
            </h2>
          </div>
          <div className="font-hand text-lg max-w-md" style={{ color: 'var(--red-pencil)' }}>
            ~ "Key decisions, strategic pivots and verified business results highlighted as editorial margin notes."
          </div>
        </div>

        {/* Bookmark Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(cs.id)}
              className="p-4 rounded border text-left transition-all duration-200"
              style={
                activeTab === cs.id
                  ? {
                      background: 'var(--ink)',
                      color: 'var(--paper)',
                      borderColor: 'var(--ink)',
                    }
                  : {
                      background: 'var(--paper-leaf)',
                      color: 'var(--ink)',
                      borderColor: 'var(--ink-rule)',
                    }
              }
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5" style={{ color: activeTab === cs.id ? 'var(--red-pencil)' : 'var(--ink-muted)' }}>
                <Bookmark className="w-3 h-3" />
                <span>SPREAD 0{idx + 1}</span>
              </div>
              <div className="font-serif font-bold text-base leading-snug line-clamp-1">
                {cs.title.split(':')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* The 2-Page Editorial Spread Sheet */}
        <div className="paper-sheet p-7 sm:p-12 rounded-lg border">

          {/* Spread Running Head */}
          <div className="pb-6 mb-8 border-b flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase" style={{ borderColor: 'var(--ink-rule)' }}>
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>SPREAD: {activeCase.discipline}</span>
            </div>
            <div className="text-ink/60">
              DOCUMENT IDENTIFIER // {activeCase.id.toUpperCase()}
            </div>
          </div>

          <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink leading-tight mb-10">
            {activeCase.title}
          </h3>

          {/* Verso & Recto 2-Column Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Verso: Narrative & Architecture */}
            <div className="lg:col-span-8 space-y-8 font-serif text-lg leading-relaxed">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--red-pencil)' }}>
                  01 // THE COMMERCIAL CONTEXT &amp; PROBLEM
                </h4>
                <p className="text-ink/90 font-normal">
                  {activeCase.project}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--red-pencil)' }}>
                  02 // STRATEGIC APPROACH &amp; AUDIENCE FRAMING
                </h4>
                <p className="text-ink/90 font-normal">
                  {activeCase.approach}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--red-pencil)' }}>
                  03 // EXECUTION HIGHLIGHTS
                </h4>
                <ul className="space-y-3 font-serif">
                  {activeCase.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-ink/90 font-normal">
                      <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'var(--red-pencil)' }} />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t font-mono text-xs" style={{ borderColor: 'var(--ink-rule)' }}>
                <span className="text-ink/50 uppercase block mb-1">AUTHOR'S CAPACITY</span>
                <span className="font-bold text-ink">{activeCase.role}</span>
              </div>
            </div>

            {/* Recto / Margin: Key Decisions & Verified Results */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">

              {/* Editorial Decision in the Margin */}
              <div
                className="p-5 rounded border border-dashed font-hand text-base leading-snug"
                style={{
                  background: 'var(--paper)',
                  borderColor: 'var(--red-pencil)',
                  color: 'var(--ink)',
                }}
              >
                <div className="font-mono text-[10px] uppercase font-bold tracking-wider mb-1" style={{ color: 'var(--red-pencil)' }}>
                  ^ [KEY EDITORIAL DECISION]
                </div>
                <div className="font-bold mb-1" style={{ color: 'var(--red-pencil)' }}>
                  "{currentAnnotation.decision}"
                </div>
                <div className="text-sm opacity-90 font-serif italic">
                  {currentAnnotation.rationale}
                </div>
              </div>

              {/* Verified Results Ledger */}
              <div className="p-6 rounded border space-y-4" style={{ background: 'var(--paper)', borderColor: 'var(--ink-rule)' }}>
                <div className="font-mono text-[10px] font-bold uppercase tracking-wider border-b pb-2" style={{ borderColor: 'var(--ink-rule)', color: 'var(--red-pencil)' }}>
                  VERIFIED COMMERCIAL IMPACT
                </div>

                {activeCase.results.map((r, idx) => (
                  <div key={idx} className="border-b last:border-0 pb-3 last:pb-0" style={{ borderColor: 'var(--ink-rule)' }}>
                    <div className="font-display font-black text-3xl" style={{ color: 'var(--red-pencil)' }}>
                      {r.stat}
                    </div>
                    <div className="font-serif text-sm font-semibold text-ink mt-0.5">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {activeCase.quote && (
                <div className="p-5 rounded border text-sm italic font-serif leading-relaxed" style={{ background: 'var(--paper)', borderColor: 'var(--ink-rule)', color: 'var(--ink)' }}>
                  "{activeCase.quote}"
                </div>
              )}

              {activeCase.link && (
                <a
                  href={activeCase.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 text-white"
                  style={{ background: 'var(--ink)' }}
                >
                  <span>{activeCase.link.label}</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
