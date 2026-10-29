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
        background: 'var(--paper-dark)',
        color: '#FFFFFF',
        borderColor: 'var(--ink-rule-strong)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Folio Chapter Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-8 mb-14 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-white/50">
              <span className="font-bold text-[var(--red-pencil)]">¶ CHAPTER VI</span>
              <span>/</span>
              <span>CAREER CHRONOLOGY &amp; CREDENTIALS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
              The Career Ledger.
            </h2>
            <p className="font-serif text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed mt-3">
              A chronological record of writing, marketing communications, content development, and brand storytelling leadership.
            </p>
          </div>

          {/* Featured Role Proof Card */}
          <div className="lg:col-span-5 p-6 rounded-lg bg-white/5 border border-white/10 relative">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--red-pencil)]">
                ACTIVE APPOINTMENT · 2025–2026
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-[var(--red-pencil)] text-white">
                VERIFIED
              </span>
            </div>
            <h4 className="font-display font-bold text-xl text-white">
              Brand Marketing &amp; Corporate Comms
            </h4>
            <div className="text-xs font-mono text-[var(--red-pencil)] mt-0.5 mb-2">
              Redtech Limited
            </div>
            <p className="font-serif text-sm text-white/75 leading-relaxed">
              Multi-channel campaign architecture, e-invoicing conversion funnels, and enterprise sales pipeline reactivation.
            </p>
          </div>
        </div>

        {/* 3 Impact Seals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--red-pencil)]/20 border border-[var(--red-pencil)]/40 flex items-center justify-center font-display font-black text-xl text-[var(--red-pencil)] shrink-0">
              12%
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white">Lead-to-Active Rate</div>
              <div className="text-xs text-white/60 font-mono mt-0.5">Exceeded 5% benchmark by 240%</div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-display font-black text-xl text-white shrink-0">
              28k+
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white">Substack Views</div>
              <div className="text-xs text-white/60 font-mono mt-0.5">Across published personal essays</div>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[var(--red-pencil)]/20 border border-[var(--red-pencil)]/40 flex items-center justify-center font-display font-black text-xl text-[var(--red-pencil)] shrink-0">
              823+
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white">Webinar Registrations</div>
              <div className="text-xs text-white/60 font-mono mt-0.5">Hospitality &amp; fiscal taxation events</div>
            </div>
          </div>
        </div>

        {/* Chronological Record */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--red-pencil)] block mb-2">
                  {exp.period}
                </span>
                <h4 className="font-serif font-bold text-lg text-white mb-1">
                  {exp.role}
                </h4>
                <div className="text-xs font-mono text-white/60 mb-3">
                  {exp.company}
                </div>
                <p className="font-serif text-sm text-white/75 leading-relaxed font-normal">
                  {exp.points[0]}
                </p>
              </div>
            </div>
          ))}

          {/* Academic Foundation */}
          <div className="p-6 rounded-lg bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 block mb-2">
                ACADEMIC FOUNDATION
              </span>
              <h4 className="font-serif font-bold text-lg text-white mb-1">
                B.A. English Language
              </h4>
              <div className="text-xs font-mono text-[var(--red-pencil)] mb-3">
                Kwara State University (2:1)
              </div>
              <p className="font-serif text-sm text-white/75 leading-relaxed font-normal">
                Second Class Upper Division. Rigorous training in syntactic analysis, linguistics, and communicative impact.
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout to View Complete CV */}
        <div className="p-6 sm:p-8 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
              Inspect the Complete Manuscript Curriculum Vitae
            </h4>
            <p className="font-serif text-sm text-white/70">
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
