import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: 'rgba(72,33,63,0.6)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-10"
        style={{
          background: 'var(--bg)',
          border: '2.5px solid var(--border)',
          boxShadow: '12px 12px 0 var(--border)',
          color: 'var(--ink)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
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

        {/* Modal Header */}
        <span
          className="text-xs font-bold uppercase tracking-wider block mb-1"
          style={{ color: 'var(--accent)' }}
        >
          {project.badge}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4 pr-10">
          {project.title}
        </h3>

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div
            className="p-4 rounded-2xl mb-5 text-sm space-y-1"
            style={{ background: 'var(--bg-card)', border: '2px solid var(--border)' }}
          >
            <p>
              <strong>Subject line:</strong> {project.fullContent.subject}
            </p>
            {project.fullContent.preheader && (
              <p>
                <strong>Preheader:</strong> {project.fullContent.preheader}
              </p>
            )}
          </div>
        )}

        {/* Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-6">
            <span
              className="text-xs font-bold uppercase tracking-wider block mb-2"
              style={{ color: 'var(--ink-muted)' }}
            >
              Selected Email / Story Excerpt
            </span>
            <div
              className="p-5 sm:p-6 rounded-2xl space-y-3 text-sm sm:text-base leading-relaxed relative"
              style={{
                background: 'var(--bg-card)',
                border: '2px dashed var(--border)',
              }}
            >
              <span
                className="absolute -top-3 left-4 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: 'var(--accent)', border: '1px solid var(--border)' }}
              >
                COPY EXCERPT
              </span>
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Rationale & Details */}
        {project.fullContent?.details && (
          <div className="mb-6">
            <span
              className="text-xs font-bold uppercase tracking-wider block mb-2"
              style={{ color: 'var(--ink-muted)' }}
            >
              Strategic Context & Details
            </span>
            <div
              className="p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line"
              style={{
                background: 'rgba(255,255,255,0.5)',
                border: '1px solid var(--border)',
                opacity: 0.85,
              }}
            >
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Footer CTAs */}
        <div
          className="flex flex-wrap gap-3 pt-4 justify-end"
          style={{ borderTop: '2px solid var(--border)' }}
        >
          {project.fullContent?.substackLink && (
            <a
              href={project.fullContent.substackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              style={{ background: 'var(--accent)' }}
            >
              <span>Read on Substack Publication</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
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
  );
};
