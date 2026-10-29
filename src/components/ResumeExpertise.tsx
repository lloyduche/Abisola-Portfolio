import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { ArrowUpRight, FileText } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: () => void;
}

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section id="career-ledger" className="py-20 lg:py-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Archival Ledger Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--cabinet-rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--cabinet-brass)]">&para; ARCHIVAL COMPARTMENT</span>
              <span>/</span>
              <span>EXECUTIVE CHRONOLOGY &bull; CAREER LEDGER</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--cabinet-burgundy)]">
              The Career Ledger.
            </h2>
          </div>
          <div className="font-serif italic text-base sm:text-lg max-w-md text-[var(--ink)]/80">
            A chronological ledger of marketing communications, editorial leadership, content development, and brand storytelling.
          </div>
        </div>

        {/* Chronological Ledger Table */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--cabinet-rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
            <span>PERIOD &bull; INSTITUTION</span>
            <span className="hidden sm:inline">STRATEGIC FOCUS &bull; DELIVERABLES</span>
          </div>

          <div className="divide-y divide-[var(--cabinet-rule)]">
            {RESUME_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Period & Company */}
                <div className="lg:col-span-3 space-y-1.5">
                  <span className="font-mono text-xs font-bold text-[var(--cabinet-brass)] block">
                    {exp.period}
                  </span>
                  <div className="font-serif font-bold text-xl text-[var(--cabinet-burgundy)]">
                    {exp.company}
                  </div>
                  <div className="text-xs font-mono text-[var(--ink-secondary)] uppercase">
                    Lagos, Nigeria
                  </div>
                  {idx === 0 && (
                    <div className="pt-2">
                      <span className="dossier-stamp text-[9px]">ACTIVE MANDATE</span>
                    </div>
                  )}
                </div>

                {/* Role Title */}
                <div className="lg:col-span-4">
                  <h3 className="font-serif font-bold text-2xl text-[var(--ink)] leading-snug">
                    {exp.role}
                  </h3>
                  <div className="font-serif italic text-xs text-[var(--ink-secondary)] mt-1">
                    Primary Communications Lead
                  </div>
                </div>

                {/* Accomplishments */}
                <div className="lg:col-span-5 font-serif text-base text-[var(--ink)]/85 leading-relaxed space-y-2">
                  <ul className="space-y-2">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="text-[var(--cabinet-brass)] font-mono text-xs mt-1">&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

            {/* Academic Credential Row */}
            <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-3 space-y-1.5">
                <span className="font-mono text-xs font-bold text-[var(--cabinet-brass)] block">
                  ACADEMIC RECORD
                </span>
                <div className="font-serif font-bold text-xl text-[var(--cabinet-burgundy)]">
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
                Foundational study in English syntax, rhetoric, literary criticism, and persuasive textual analysis.
              </div>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-[var(--cabinet-rule)]">
          <div className="font-serif italic text-base text-[var(--ink-secondary)]">
            Complete curriculum vitae and references verified in cabinet records.
          </div>

          <button
            onClick={onOpenResume}
            className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] transition-colors inline-flex items-center gap-2 underline underline-offset-4"
          >
            <FileText className="w-4 h-4 text-[var(--cabinet-brass)]" />
            <span>Open Verified Curriculum Vitae Sheet</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--cabinet-brass)]" />
          </button>
        </div>

      </div>
    </section>
  );
};
