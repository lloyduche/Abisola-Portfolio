import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { X, Printer, ArrowUpRight } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto p-8 sm:p-14 rounded-sm border border-[var(--cabinet-brass)]"
        style={{
          background: 'var(--cabinet-cream)',
          color: 'var(--ink)',
          boxShadow: '0 25px 70px rgba(0,0,0,0.6)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio & Close Button */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[var(--cabinet-rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--cabinet-brass)]">&para; OFFICIAL DOSSIER</span>
            <span>/</span>
            <span>CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase text-[var(--ink-secondary)] hover:text-[var(--cabinet-burgundy)]"
            >
              <Printer className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
              <span>Print Dossier</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[var(--ink-secondary)] hover:text-[var(--cabinet-burgundy)] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Masterhead */}
        <div className="pb-8 mb-10 border-b border-[var(--cabinet-rule)]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[var(--cabinet-burgundy)]">
                Abisola Oluwatoyin
              </h2>
              <div className="font-serif italic text-xl text-[var(--cabinet-brass)] mt-1 font-semibold">
                Writer &bull; Marketing &amp; Corporate Communications Specialist
              </div>
            </div>
            <span className="dossier-stamp">ARCHIVE VERIFIED</span>
          </div>

          <div className="font-mono text-xs text-[var(--ink-secondary)] mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <span>Email: abisolaaoluwatoyin@gmail.com</span>
            <span>Location: Lagos, Nigeria</span>
            <span>Substack: abisolawrites.substack.com</span>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-10 pb-8 border-b border-[var(--cabinet-rule)]">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--cabinet-brass)] mb-3">
            EXECUTIVE SUMMARY
          </h3>
          <p className="font-serif text-lg leading-relaxed text-[var(--ink)]/90 font-normal">
            {RESUME_DATA.summary}
          </p>
        </div>

        {/* Experience Chronology */}
        <div className="mb-10 pb-8 border-b border-[var(--cabinet-rule)] space-y-8">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--cabinet-brass)] mb-4">
            PROFESSIONAL APPOINTMENTS
          </h3>

          <div className="space-y-8 divide-y divide-[var(--cabinet-rule)]">
            {RESUME_DATA.experiences.map((exp, idx) => (
              <div key={idx} className={idx === 0 ? '' : 'pt-8'}>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div className="font-serif font-bold text-2xl text-[var(--cabinet-burgundy)]">
                    {exp.role}
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--cabinet-brass)]">
                    {exp.period}
                  </span>
                </div>

                <div className="font-serif italic text-base text-[var(--ink-secondary)] mb-4">
                  {exp.company} &bull; Lagos, Nigeria
                </div>

                <ul className="space-y-2.5 font-serif text-base text-[var(--ink)]/85">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="text-[var(--cabinet-brass)] font-mono text-xs mt-1.5">&bull;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Credentials */}
        <div className="mb-10 pb-8 border-b border-[var(--cabinet-rule)]">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--cabinet-brass)] mb-4">
            ACADEMIC CREDENTIALS
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <div>
              <div className="font-serif font-bold text-xl text-[var(--cabinet-burgundy)]">
                {RESUME_DATA.education.degree}
              </div>
              <div className="font-serif italic text-base text-[var(--ink-secondary)]">
                {RESUME_DATA.education.school}
              </div>
            </div>
            <span className="font-mono text-xs text-[var(--ink-secondary)] font-bold">
              DEPARTMENT OF ENGLISH
            </span>
          </div>
        </div>

        {/* Core Domains of Expertise */}
        <div className="mb-10 pb-8 border-b border-[var(--cabinet-rule)]">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--cabinet-brass)] mb-4">
            CORE DOMAINS OF EXPERTISE
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {RESUME_DATA.areasOfExpertise.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-mono border border-[var(--cabinet-rule)] text-[var(--ink)] bg-[var(--cabinet-cream-dark)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-4 font-mono text-xs">
          <a
            href="mailto:abisolaaoluwatoyin@gmail.com"
            className="text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] font-bold uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
          >
            <span>Inquire Directly</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
          </a>

          <button
            onClick={onClose}
            className="px-6 py-2 border border-[var(--cabinet-rule)] text-[var(--ink)] font-bold uppercase tracking-wider hover:border-[var(--cabinet-burgundy)] transition-colors"
          >
            Close Sheet
          </button>
        </div>

      </div>
    </div>
  );
};
