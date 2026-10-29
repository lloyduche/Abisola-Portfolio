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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 sm:p-14 rounded-sm border border-[var(--cabinet-brass)]"
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
            <BookOpen className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
            <span>ARCHIVAL PROOF // {project.tagCategory}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[var(--ink-secondary)] hover:text-[var(--cabinet-burgundy)] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl sm:text-4xl text-[var(--cabinet-burgundy)] leading-snug mb-6">
          {project.title}
        </h3>

        {/* Strategic Direction / Commercial Hook */}
        {project.hook && (
          <div className="mb-8 pb-6 border-b border-[var(--cabinet-rule)]">
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--cabinet-brass)] mb-1 font-bold">
              COMMERCIAL HOOK &amp; POSITIONING
            </div>
            <div className="font-serif italic text-xl text-[var(--cabinet-burgundy)] font-bold">
              "{project.hook}"
            </div>
          </div>
        )}

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div className="p-4 mb-8 border-l-2 border-[var(--cabinet-brass)] bg-[var(--cabinet-cream-dark)] font-mono text-xs space-y-1.5">
            <div>
              <span className="font-bold text-[var(--cabinet-burgundy)] uppercase">SUBJECT: </span>
              <span className="text-[var(--ink)]">{project.fullContent.subject}</span>
            </div>
            {project.fullContent.preheader && (
              <div>
                <span className="font-bold text-[var(--ink-secondary)] uppercase">PREHEADER: </span>
                <span className="text-[var(--ink-secondary)]">{project.fullContent.preheader}</span>
              </div>
            )}
          </div>
        )}

        {/* Printed Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-8">
            <div className="flex items-center justify-between pb-2 mb-4 border-b border-[var(--cabinet-rule)]">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-secondary)]">
                PRODUCTION COPY EXCERPT
              </span>
              <span className="dossier-stamp text-[8px]">VERIFIED PROOF</span>
            </div>

            <div className="space-y-4 font-serif text-lg leading-relaxed text-[var(--ink)]/90">
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Editorial Notes */}
        {project.fullContent?.details && (
          <div className="mb-8 pt-6 border-t border-[var(--cabinet-rule)]">
            <span className="font-mono text-xs uppercase tracking-widest block mb-2 text-[var(--cabinet-brass)] font-bold">
              STRATEGIC CONTEXT &amp; RATIONALE
            </span>
            <div className="font-serif text-base text-[var(--ink)]/85 leading-relaxed whitespace-pre-line">
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--cabinet-rule)] font-mono text-xs">
          <div>
            {project.fullContent?.substackLink && (
              <a
                href={project.fullContent.substackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Read Full Essay on Substack</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 border border-[var(--cabinet-rule)] text-[var(--ink)] font-bold uppercase tracking-wider hover:border-[var(--cabinet-burgundy)] transition-colors"
          >
            Close Dossier
          </button>
        </div>

      </div>
    </div>
  );
};
