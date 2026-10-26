import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, FileText } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border"
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
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 hover:border-accent hover:text-accent"
          style={{
            borderColor: 'var(--border)',
            background: 'var(--bg)',
            color: 'var(--ink)',
          }}
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <FileText className="w-4 h-4 text-accent" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
            {project.badge}
          </span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 pr-8 text-ink">
          {project.title}
        </h3>

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div
            className="p-4 rounded-xl mb-5 text-sm space-y-1 border font-mono"
            style={{
              background: 'var(--bg)',
              borderColor: 'var(--border)',
            }}
          >
            <p>
              <strong className="text-accent">Subject:</strong> {project.fullContent.subject}
            </p>
            {project.fullContent.preheader && (
              <p>
                <strong className="text-ink/60">Preheader:</strong> {project.fullContent.preheader}
              </p>
            )}
          </div>
        )}

        {/* Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2 text-ink/60">
              Selected Email / Story Excerpt
            </span>
            <div
              className="p-5 sm:p-6 rounded-2xl space-y-3 text-sm sm:text-base leading-relaxed border"
              style={{
                background: 'var(--bg)',
                borderColor: 'var(--border)',
              }}
            >
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i} className="text-ink/85">{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Rationale & Details */}
        {project.fullContent?.details && (
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2 text-ink/60">
              Strategic Context &amp; Details
            </span>
            <div
              className="p-4 rounded-xl text-xs sm:text-sm leading-relaxed whitespace-pre-line border"
              style={{
                background: 'var(--bg)',
                borderColor: 'var(--border)',
                color: 'var(--ink)',
                opacity: 0.85,
              }}
            >
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Footer CTAs */}
        <div className="flex flex-wrap gap-3 pt-4 border-t justify-end" style={{ borderColor: 'var(--border)' }}>
          {project.fullContent?.substackLink && (
            <a
              href={project.fullContent.substackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded text-white font-mono font-bold text-xs uppercase flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              style={{ background: 'var(--accent)' }}
            >
              <span>Read on Substack Publication</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded font-mono font-bold text-xs uppercase border transition-colors"
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
  );
};
