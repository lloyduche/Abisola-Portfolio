import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { X, Printer } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg p-6 sm:p-12 border paper-sheet"
        style={{
          background: 'var(--paper-leaf)',
          borderColor: 'var(--ink-rule)',
          color: 'var(--ink)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded border flex items-center justify-center transition-all hover:border-[var(--red-pencil)]"
          style={{
            borderColor: 'var(--ink-rule)',
            background: 'var(--paper)',
            color: 'var(--ink)',
          }}
          aria-label="Close CV"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Printable Manuscript CV Sheet */}
        <div className="print:p-0">

          {/* Header */}
          <div className="pb-6 mb-8 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
              Abisola Oluwatoyin
            </h2>
            <p className="font-serif italic text-lg text-[var(--red-pencil)] mt-1 font-semibold">
              Writer | Marketing, Communications &amp; Brand Storytelling
            </p>
            <p className="text-xs font-mono text-ink/70 mt-2">
              Email: abisolaaoluwatoyin@gmail.com &bull; LinkedIn: linkedin.com/in/abisola-oluwatoyin &bull; Substack: abisolawrites.substack.com
            </p>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--red-pencil)] pb-2 mb-3 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
              Professional Summary
            </h3>
            <p className="font-serif text-base leading-relaxed text-ink/90 font-normal">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--red-pencil)] pb-2 mb-4 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-serif font-bold text-lg text-ink">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono font-bold text-[var(--red-pencil)]">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-semibold text-ink/60 mb-2">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 font-serif text-base text-ink/85 leading-relaxed font-normal">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--red-pencil)] pb-2 mb-3 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
              Education &amp; Linguistics Foundation
            </h3>
            <div>
              <div className="font-serif font-bold text-base text-ink">
                {RESUME_DATA.education.degree}
              </div>
              <div className="text-xs font-mono text-ink/60 mt-0.5">
                {RESUME_DATA.education.school}
              </div>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--red-pencil)] pb-2 mb-3 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.areasOfExpertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded text-xs font-mono border"
                  style={{
                    background: 'var(--paper)',
                    borderColor: 'var(--ink-rule)',
                    color: 'var(--ink)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t font-mono text-xs" style={{ borderColor: 'var(--ink-rule)' }}>
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded font-bold uppercase flex items-center gap-2 text-white"
              style={{ background: 'var(--red-pencil)' }}
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save Folio PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded border font-bold uppercase transition-colors"
              style={{
                borderColor: 'var(--ink-rule-strong)',
                background: 'var(--paper)',
                color: 'var(--ink)',
              }}
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
