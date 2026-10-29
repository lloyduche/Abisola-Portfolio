import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { RedArrow, EditorialStamp } from './ManuscriptMarks';
import { ArrowUpRight } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: () => void;
}

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 lg:py-32 border-b border-[var(--rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Broadsheet Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--red-pencil)]">&para; CHAPTER V</span>
              <span>/</span>
              <span>EXECUTIVE CHRONOLOGY &amp; CREDENTIALS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--ink)]">
              The Career Ledger.
            </h2>
          </div>
          <div className="font-serif italic text-lg max-w-md text-[var(--ink)]/80">
            A chronological ledger of marketing communications, editorial leadership, content development, and brand storytelling.
          </div>
        </div>

        {/* 3 Impact Numbers Across Columns with Vertical Hairline Dividers (NO BOXES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-14 mb-16 border-b border-[var(--rule)]">
          <div className="md:pr-8 md:border-r md:border-[var(--rule)]">
            <div className="font-display font-black text-5xl sm:text-6xl text-[var(--red-pencil)] leading-none mb-3">
              12%
            </div>
            <div className="font-serif font-bold text-xl text-[var(--ink)] mb-1">
              Lead-to-Active Conversion
            </div>
            <div className="font-mono text-xs text-[var(--ink-secondary)] leading-relaxed">
              Exceeded the 5% fintech industry benchmark by 240% during e-invoicing campaign.
            </div>
          </div>

          <div className="md:px-8 md:border-r md:border-[var(--rule)]">
            <div className="font-display font-black text-5xl sm:text-6xl text-[var(--ink)] leading-none mb-3">
              28k+
            </div>
            <div className="font-serif font-bold text-xl text-[var(--ink)] mb-1">
              Total Substack Essay Views
            </div>
            <div className="font-mono text-xs text-[var(--ink-secondary)] leading-relaxed">
              1,469+ global organic subscribers reading long-form personal &amp; cultural commentary.
            </div>
          </div>

          <div className="md:pl-8">
            <div className="font-display font-black text-5xl sm:text-6xl text-[var(--red-pencil)] leading-none mb-3">
              823+
            </div>
            <div className="font-serif font-bold text-xl text-[var(--ink)] mb-1">
              Enterprise Webinar Registrations
            </div>
            <div className="font-mono text-xs text-[var(--ink-secondary)] leading-relaxed">
              520+ live attendees for fiscal taxation &amp; hospitality tech thought leadership.
            </div>
          </div>
        </div>

        {/* Chronological Ledger Rows (NO BOXES — Clean Lines) */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
            <span>PERIOD &bull; INSTITUTION</span>
            <span className="hidden sm:inline">STRATEGIC FOCUS &bull; DELIVERABLES</span>
          </div>

          <div className="divide-y divide-[var(--rule)]">
            {RESUME_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Column 1: Period & Stamp */}
                <div className="lg:col-span-3 space-y-2">
                  <span className="font-mono text-xs font-bold text-[var(--red-pencil)] block">
                    {exp.period}
                  </span>
                  <div className="font-display font-bold text-xl text-[var(--ink)]">
                    {exp.company}
                  </div>
                  <div className="text-xs font-mono text-[var(--ink-secondary)] uppercase">
                    Lagos, Nigeria
                  </div>
                  {idx === 0 && (
                    <div className="pt-2">
                      <EditorialStamp text="active mandate" />
                    </div>
                  )}
                </div>

                {/* Column 2: Role Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-serif font-bold text-2xl text-[var(--ink)] leading-snug mb-2">
                    {exp.role}
                  </h3>
                  <div className="font-hand text-base text-[var(--red-pencil)]">
                    ~ primary communications lead
                  </div>
                </div>

                {/* Column 3: Responsibilities & Impact */}
                <div className="lg:col-span-5 font-serif text-base text-[var(--ink)]/85 leading-relaxed space-y-2">
                  <ul className="space-y-2.5">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-[var(--red-pencil)] font-mono text-xs mt-1">&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education Row */}
            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-3 space-y-2">
                <span className="font-mono text-xs font-bold text-[var(--ink-secondary)] block">
                  ALMA MATER
                </span>
                <div className="font-display font-bold text-xl text-[var(--ink)]">
                  {RESUME_DATA.education.school}
                </div>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-serif font-bold text-2xl text-[var(--ink)] leading-snug">
                  {RESUME_DATA.education.degree}
                </h3>
                <div className="font-mono text-xs text-[var(--ink-secondary)] uppercase mt-1">
                  Department of English
                </div>
              </div>

              <div className="lg:col-span-5 font-serif text-base text-[var(--ink)]/85 leading-relaxed">
                Foundational training in literary criticism, textual analysis, rhetoric, and syntactic composition.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Action */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--rule)]">
          <div className="flex items-center gap-3">
            <RedArrow direction="right" />
            <span className="font-serif italic text-lg text-[var(--ink)]/80">
              Complete professional references and curriculum vitae available upon request.
            </span>
          </div>

          <button
            onClick={onOpenResume}
            className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink)] hover:text-[var(--red-pencil)] transition-colors inline-flex items-center gap-2 underline underline-offset-4"
          >
            <span>Open Verified Curriculum Vitae Sheet</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--red-pencil)]" />
          </button>
        </div>

      </div>
    </section>
  );
};
