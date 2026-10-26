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
        background: 'var(--bg-dark)',
        color: '#FFFFFF',
        borderColor: 'var(--border-strong)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header & Verified Experience Stub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-8 mb-14 border-b border-white/10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-accent">[ 05 ]</span>
              <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-white/60">
                CAREER RECORD &amp; CREDENTIALS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Executive Career Ledger.
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl font-normal leading-relaxed mt-3">
              An overview of my professional experience across writing, marketing communications, content development, and brand storytelling.
            </p>
          </div>

          {/* Featured Role Badge */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                FEATURED ENGAGEMENT · 2025–2026
              </span>
              <span className="px-2 py-0.5 rounded bg-accent text-[9px] font-mono font-bold uppercase text-white">
                CURRENT
              </span>
            </div>
            <h4 className="font-display font-bold text-xl text-white">
              Brand Marketing &amp; Corporate Comms
            </h4>
            <div className="text-xs font-mono text-accent mt-0.5 mb-2">
              Redtech Limited
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Multi-channel campaign architecture, e-invoicing conversion funnels, and enterprise sales pipeline reactivation.
            </p>
          </div>
        </div>

        {/* 3 Impact Rosettes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center font-display font-black text-xl text-accent shrink-0">
              12%
            </div>
            <div>
              <div className="font-display font-bold text-base text-white">Lead-to-Active</div>
              <div className="text-xs text-white/60 font-mono mt-0.5">Exceeded 5% target benchmark</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-accent2/20 border border-accent2/40 flex items-center justify-center font-display font-black text-xl text-accent2 shrink-0">
              28k+
            </div>
            <div>
              <div className="font-display font-bold text-base text-white">Substack Views</div>
              <div className="text-xs text-white/60 font-mono mt-0.5">Across published essays</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center font-display font-black text-xl text-white shrink-0">
              823+
            </div>
            <div>
              <div className="font-display font-bold text-base text-white">Webinar Registrations</div>
              <div className="text-xs text-white/60 font-mono mt-0.5">Hospitality &amp; tax events</div>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent block mb-2">
                  {exp.period}
                </span>
                <h4 className="font-display font-bold text-lg text-white mb-1">
                  {exp.role}
                </h4>
                <div className="text-xs font-mono text-white/60 mb-3">
                  {exp.company}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {exp.points[0]}
                </p>
              </div>
            </div>
          ))}

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent2 block mb-2">
                ACADEMIC FOUNDATION
              </span>
              <h4 className="font-display font-bold text-lg text-white mb-1">
                B.A. English Language
              </h4>
              <div className="text-xs font-mono text-white/60 mb-3">
                Kwara State University
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-normal">
                Second Class Upper Division (2:1). Rigorous focus on syntax, linguistics, storytelling, and communication.
              </p>
            </div>
          </div>
        </div>

        {/* Full CV Trigger Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white mb-1">
              Want the full curriculum vitae breakdown?
            </h4>
            <p className="text-xs sm:text-sm text-white/60 font-mono">
              View comprehensive role details, achievements, and access a printable version.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-7 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all duration-200 shrink-0"
            style={{
              background: 'var(--accent)',
              color: '#FFFFFF',
            }}
          >
            <FileText className="w-4 h-4" />
            <span>VIEW &amp; PRINT FULL RESUME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
