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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border-3 border-theme-border p-6 sm:p-12 shadow-[12px_12px_0_var(--color-border)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-theme-border bg-theme-ribbon flex items-center justify-center text-theme-ink hover:bg-theme-accent hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Resume Sheet */}
        <div className="print:p-0">
          {/* Header */}
          <div className="border-b-2 border-theme-border pb-6 mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-theme-ink">
              Abisola Oluwatoyin
            </h2>
            <p className="text-base sm:text-lg font-semibold text-theme-accent mt-1">
              Writer | Marketing, Communications &amp; Brand Storytelling
            </p>
            <p className="text-xs sm:text-sm text-theme-muted mt-2">
              Email: abisolaaoluwatoyin@gmail.com &bull; LinkedIn: linkedin.com/in/abisola-oluwatoyin &bull; Substack: abisolawrites.substack.com
            </p>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="font-display text-xl font-bold text-theme-ink border-b border-theme-bg pb-2 mb-3">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-theme-ink/85 font-normal">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="font-display text-xl font-bold text-theme-ink border-b border-theme-bg pb-2 mb-4">
              Professional Experience
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-bold text-base text-theme-ink">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-semibold text-theme-accent">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-theme-muted mb-2">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-theme-ink/85 leading-relaxed font-normal">
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
            <h3 className="font-display text-xl font-bold text-theme-ink border-b border-theme-bg pb-2 mb-3">
              Education
            </h3>
            <div>
              <div className="font-bold text-sm text-theme-ink">
                {RESUME_DATA.education.degree}
              </div>
              <div className="text-xs text-theme-muted">
                {RESUME_DATA.education.school}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-8">
            <h3 className="font-display text-xl font-bold text-theme-ink border-b border-theme-bg pb-2 mb-3">
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.areasOfExpertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-theme-bg border border-theme-border/40 text-xs font-semibold text-theme-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t border-theme-bg">
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded-full bg-theme-accent text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:opacity-90"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full border-2 border-theme-border bg-white text-theme-ink font-semibold text-xs sm:text-sm hover:bg-theme-bg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
