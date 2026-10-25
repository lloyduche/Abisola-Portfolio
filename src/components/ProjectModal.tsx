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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-theme-bg border-3 border-theme-border p-6 sm:p-10 shadow-[12px_12px_0_var(--color-border)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-theme-border bg-theme-ribbon flex items-center justify-center text-theme-ink hover:bg-theme-accent hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <span className="text-xs font-bold text-theme-accent uppercase tracking-wider block mb-1">
          {project.badge}
        </span>
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-theme-ink mb-4 pr-10">
          {project.title}
        </h3>

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div className="p-4 rounded-2xl bg-white border-2 border-theme-border mb-5 text-sm space-y-1">
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
            <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block mb-2">
              Selected Email / Story Excerpt
            </span>
            <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-dashed border-theme-border space-y-3 text-sm sm:text-base leading-relaxed text-theme-ink/90 font-normal relative">
              <span className="absolute -top-3 left-4 bg-theme-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-theme-border">
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
            <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block mb-2">
              Strategic Context &amp; Details
            </span>
            <div className="p-4 rounded-2xl bg-white/70 border border-theme-border/30 text-xs sm:text-sm leading-relaxed text-theme-ink/80 whitespace-pre-line font-normal">
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Footer CTAs */}
        <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-theme-border/20 justify-end">
          {project.fullContent?.substackLink && (
            <a
              href={project.fullContent.substackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-theme-accent text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:opacity-90"
            >
              <span>Read on Substack Publication</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border-2 border-theme-border bg-theme-card text-theme-ink font-semibold text-xs sm:text-sm hover:bg-theme-ribbon"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
