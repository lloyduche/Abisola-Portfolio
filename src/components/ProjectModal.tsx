import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, BookOpen } from 'lucide-react';

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
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-lg p-6 sm:p-10 border broadsheet-card"
        style={{
          background: 'var(--paper-leaf)',
          borderColor: 'var(--ink-rule)',
          color: 'var(--ink)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded border flex items-center justify-center transition-all hover:border-[var(--red-pencil)]"
          style={{
            borderColor: 'var(--ink-rule)',
            background: 'var(--paper)',
            color: 'var(--ink)',
          }}
          aria-label="Close Preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Heading */}
        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-[var(--red-pencil)]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>GALLEY PROOF EXCERPT // {project.badge}</span>
        </div>

        <h3 className="font-display font-bold text-2xl sm:text-3xl mb-5 pr-8 leading-snug text-ink">
          {project.title}
        </h3>

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div
            className="p-4 rounded mb-6 font-mono text-xs space-y-1.5 border"
            style={{
              background: 'var(--paper)',
              borderColor: 'var(--ink-rule)',
            }}
          >
            <div>
              <span className="font-bold text-[var(--red-pencil)] uppercase">SUBJECT LINE: </span>
              <span className="text-ink">{project.fullContent.subject}</span>
            </div>
            {project.fullContent.preheader && (
              <div>
                <span className="font-bold text-ink/60 uppercase">PREHEADER: </span>
                <span className="text-ink/80">{project.fullContent.preheader}</span>
              </div>
            )}
          </div>
        )}

        {/* Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
                Printed Copy Excerpt
              </span>
              <span className="proof-stamp text-[9px]">FINAL PASS</span>
            </div>

            <div
              className="p-6 rounded space-y-4 font-serif text-lg sm:text-xl leading-relaxed border"
              style={{
                background: 'var(--paper)',
                borderColor: 'var(--ink-rule)',
                borderLeft: '3px solid var(--red-pencil)',
              }}
            >
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i} className="text-ink/90 font-normal">{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Details */}
        {project.fullContent?.details && (
          <div className="mb-6">
            <span className="font-mono text-xs uppercase tracking-wider block mb-2 text-ink/60">
              Editorial Context &amp; Decision Note
            </span>
            <div
              className="p-4 rounded font-serif text-base leading-relaxed border whitespace-pre-line text-ink"
              style={{
                background: 'var(--paper)',
                borderColor: 'var(--ink-rule)',
              }}
            >
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Footer CTAs */}
        <div className="flex flex-wrap gap-3 pt-5 border-t justify-end font-mono text-xs" style={{ borderColor: 'var(--ink-rule)' }}>
          {project.fullContent?.substackLink && (
            <a
              href={project.fullContent.substackLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded text-white font-bold uppercase flex items-center gap-1.5 transition-all"
              style={{ background: 'var(--red-pencil)' }}
            >
              <span>Read on Substack Publication</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded border font-bold uppercase transition-colors"
            style={{
              borderColor: 'var(--ink-rule-strong)',
              background: 'var(--paper)',
              color: 'var(--ink)',
            }}
          >
            Close Galley
          </button>
        </div>

      </div>
    </div>
  );
};
