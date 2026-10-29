import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: () => void;
}

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section
      id="resume"
      className="py-20 lg:py-28 border-b"
      style={{
        background: 'var(--paper-aged)',
        color: 'var(--ink)',
        borderColor: 'var(--ink-rule-strong)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Broadsheet Folio Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 mb-14 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-ink/60">
              <span className="font-bold text-[var(--red-pencil)]">¶ CHAPTER V</span>
              <span>/</span>
              <span>EXECUTIVE CHRONOLOGY &amp; CREDENTIALS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-ink">
              The Career Ledger.
            </h2>
            <p className="font-serif text-lg sm:text-xl text-ink/80 max-w-xl leading-relaxed mt-3">
              A chronological record of writing, marketing communications, content development, and brand storytelling leadership.
            </p>
          </div>

          {/* Featured Role Card */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-[var(--paper-leaf)] border relative" style={{ borderColor: 'var(--ink-rule)' }}>
            <div className="flex items-center justify-between pb-3 mb-3 border-b text-xs font-mono" style={{ borderColor: 'var(--ink-rule)' }}>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--red-pencil)]">
                ACTIVE APPOINTMENT · 2025–2026
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-[var(--red-pencil)] text-white">
                VERIFIED
              </span>
            </div>
            <h4 className="font-display font-bold text-xl text-ink">
              Brand Marketing &amp; Corporate Comms
            </h4>
            <div className="text-xs font-mono text-[var(--red-pencil)] mt-0.5 mb-2 font-bold">
              Redtech Limited
            </div>
            <p className="font-serif text-sm text-ink/80 leading-relaxed">
              Multi-channel campaign architecture, e-invoicing conversion funnels, and enterprise sales pipeline reactivation.
            </p>
          </div>
        </div>

        {/* 3 Impact Seals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-lg bg-[var(--paper-leaf)] border flex items-center gap-4" style={{ borderColor: 'var(--ink-rule)' }}>
            <div className="w-14 h-14 rounded-full bg-[var(--red-pencil)]/10 border border-[var(--red-pencil)]/30 flex items-center justify-center font-display font-black text-xl text-[var(--red-pencil)] shrink-0">
              12%
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-ink">Lead-to-Active Rate</div>
              <div className="text-xs text-ink/60 font-mono mt-0.5">Exceeded 5% benchmark by 240%</div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[var(--paper-leaf)] border flex items-center gap-4" style={{ borderColor: 'var(--ink-rule)' }}>
            <div className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/10 border flex items-center justify-center font-display font-black text-xl text-ink shrink-0" style={{ borderColor: 'var(--ink-rule)' }}>
              28k+
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-ink">Substack Views</div>
              <div className="text-xs text-ink/60 font-mono mt-0.5">Across published personal essays</div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[var(--paper-leaf)] border flex items-center gap-4" style={{ borderColor: 'var(--ink-rule)' }}>
            <div className="w-14 h-14 rounded-full bg-[var(--red-pencil)]/10 border border-[var(--red-pencil)]/30 flex items-center justify-center font-display font-black text-xl text-[var(--red-pencil)] shrink-0">
              823+
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-ink">Webinar Registrations</div>
              <div className="text-xs text-ink/60 font-mono mt-0.5">Hospitality &amp; fiscal taxation events</div>
            </div>
          </div>
        </div>

        {/* Chronological Record */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-[var(--paper-leaf)] border flex flex-col justify-between"
              style={{ borderColor: 'var(--ink-rule)' }}
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--red-pencil)] block mb-2">
                  {exp.period}
                </span>
                <h4 className="font-serif font-bold text-lg text-ink mb-1">
                  {exp.role}
                </h4>
                <div className="text-xs font-mono text-ink/60 mb-3">
                  {exp.company}
                </div>
                <p className="font-serif text-sm text-ink/80 leading-relaxed font-normal">
                  {exp.points[0]}
                </p>
              </div>
            </div>
          ))}

          {/* Academic Foundation */}
          <div className="p-6 rounded-lg bg-[var(--paper-leaf)] border flex flex-col justify-between" style={{ borderColor: 'var(--ink-rule)' }}>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink/50 block mb-2">
                ACADEMIC FOUNDATION
              </span>
              <h4 className="font-serif font-bold text-lg text-ink mb-1">
                B.A. English Language
              </h4>
              <div className="text-xs font-mono text-[var(--red-pencil)] mb-3 font-bold">
                Kwara State University (2:1)
              </div>
              <p className="font-serif text-sm text-ink/80 leading-relaxed font-normal">
                Second Class Upper Division. Rigorous training in syntactic analysis, linguistics, and communicative impact.
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout to View Complete CV */}
        <div className="p-6 sm:p-8 rounded-lg bg-[var(--paper-leaf)] border flex flex-col sm:flex-row items-center justify-between gap-6" style={{ borderColor: 'var(--ink-rule)' }}>
          <div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1">
              Inspect the Complete Manuscript Curriculum Vitae
            </h4>
            <p className="font-serif text-sm text-ink/70">
              Access comprehensive role histories, quantifiable outcomes, and a printable folio copy.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-7 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all text-white shrink-0"
            style={{ background: 'var(--red-pencil)' }}
          >
            <FileText className="w-4 h-4" />
            <span>Open Complete CV Folio</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
