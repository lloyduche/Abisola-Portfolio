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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-12 border"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border)',
          color: 'var(--ink)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-accent hover:text-accent"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--bg)',
            color: 'var(--ink)',
          }}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Resume Sheet */}
        <div className="print:p-0">
          {/* Header */}
          <div className="pb-6 mb-8 border-b" style={{ borderColor: 'var(--border)' }}>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink">
              Abisola Oluwatoyin
            </h2>
            <p className="text-base sm:text-lg font-mono font-bold mt-1 text-accent">
              Writer | Marketing, Communications &amp; Brand Storytelling
            </p>
            <p className="text-xs sm:text-sm font-mono text-ink/60 mt-2">
              Email: abisolaaoluwatoyin@gmail.com &bull; LinkedIn: linkedin.com/in/abisola-oluwatoyin &bull; Substack: abisolawrites.substack.com
            </p>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent pb-2 mb-3 border-b" style={{ borderColor: 'var(--border)' }}>
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed text-ink/85 font-normal">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent pb-2 mb-4 border-b" style={{ borderColor: 'var(--border)' }}>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-display font-bold text-base text-ink">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono font-bold text-accent">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-semibold text-ink/60 mb-2">
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm leading-relaxed text-ink/85 font-normal">
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
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent pb-2 mb-3 border-b" style={{ borderColor: 'var(--border)' }}>
              Education
            </h3>
            <div>
              <div className="font-display font-bold text-sm text-ink">{RESUME_DATA.education.degree}</div>
              <div className="text-xs font-mono text-ink/60">
                {RESUME_DATA.education.school}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-accent pb-2 mb-3 border-b" style={{ borderColor: 'var(--border)' }}>
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.areasOfExpertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded text-xs font-mono font-semibold border"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--ink)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded font-mono font-bold text-xs uppercase flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{
                background: 'var(--accent)',
                color: '#FFFFFF',
              }}
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded border font-mono font-bold text-xs uppercase transition-colors"
              style={{
                borderColor: 'var(--border-strong)',
                background: 'var(--bg)',
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
