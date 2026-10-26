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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: 'rgba(72,33,63,0.6)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-12"
        style={{
          background: 'var(--bg-card)',
          border: '2.5px solid var(--border)',
          boxShadow: '12px 12px 0 var(--border)',
          color: 'var(--ink)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{
            border: '2px solid var(--border)',
            background: 'var(--ribbon)',
            color: 'var(--ink)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = 'var(--ribbon)';
            (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)';
          }}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Resume Sheet */}
        <div className="print:p-0">
          {/* Header */}
          <div
            className="pb-6 mb-8"
            style={{ borderBottom: '2px solid var(--border)' }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Abisola Oluwatoyin
            </h2>
            <p
              className="text-base sm:text-lg font-semibold mt-1"
              style={{ color: 'var(--accent)' }}
            >
              Writer | Marketing, Communications & Brand Storytelling
            </p>
            <p
              className="text-xs sm:text-sm mt-2"
              style={{ color: 'var(--ink-muted)' }}
            >
              Email: abisolaaoluwatoyin@gmail.com &bull; LinkedIn: linkedin.com/in/abisola-oluwatoyin &bull; Substack: abisolawrites.substack.com
            </p>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3
              className="font-display text-xl font-bold pb-2 mb-3"
              style={{ borderBottom: '1px solid var(--ribbon)' }}
            >
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed font-normal" style={{ opacity: 0.85 }}>
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3
              className="font-display text-xl font-bold pb-2 mb-4"
              style={{ borderBottom: '1px solid var(--ribbon)' }}
            >
              Professional Experience
            </h3>
            <div className="space-y-6">
              {RESUME_DATA.experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="font-bold text-base">{exp.role}</h4>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <div
                    className="text-xs font-semibold mb-2"
                    style={{ color: 'var(--ink-muted)' }}
                  >
                    {exp.company}
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm leading-relaxed font-normal" style={{ opacity: 0.85 }}>
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
            <h3
              className="font-display text-xl font-bold pb-2 mb-3"
              style={{ borderBottom: '1px solid var(--ribbon)' }}
            >
              Education
            </h3>
            <div>
              <div className="font-bold text-sm">{RESUME_DATA.education.degree}</div>
              <div className="text-xs" style={{ color: 'var(--ink-muted)' }}>
                {RESUME_DATA.education.school}
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mb-8">
            <h3
              className="font-display text-xl font-bold pb-2 mb-3"
              style={{ borderBottom: '1px solid var(--ribbon)' }}
            >
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {RESUME_DATA.areasOfExpertise.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--ink)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div
            className="flex justify-end gap-3 pt-6"
            style={{ borderTop: '1px solid var(--ribbon)' }}
          >
            <button
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ background: 'var(--accent)' }}
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-colors"
              style={{
                border: '2px solid var(--border)',
                background: 'var(--bg-card)',
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
