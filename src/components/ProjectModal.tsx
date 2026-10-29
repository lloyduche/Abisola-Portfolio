import React from 'react';
import { Project } from '../types';
import { RedArrow, EditorialStamp } from './ManuscriptMarks';
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
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 sm:p-14 border border-[var(--rule)]"
        style={{
          background: 'var(--paper)',
          color: 'var(--ink)',
          boxShadow: '0 25px 70px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio & Close Button */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[var(--rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[var(--red-pencil)]" />
            <span>GALLEY PROOF // {project.tagCategory}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[var(--ink-secondary)] hover:text-[var(--red-pencil)] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)] leading-snug mb-6">
          {project.title}
        </h3>

        {/* Hook / Strategic Direction Note */}
        {project.hook && (
          <div className="mb-8 pb-6 border-b border-[var(--rule)]">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--red-pencil)] mb-2">
              <RedArrow direction="right" />
              <span>COMMERCIAL CORE HOOK</span>
            </div>
            <div className="font-hand text-2xl text-[var(--red-pencil)] font-bold">
              "{project.hook}"
            </div>
          </div>
        )}

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div className="p-4 mb-8 border-l-2 border-[var(--red-pencil)] bg-[var(--rule)]/20 font-mono text-xs space-y-1.5">
            <div>
              <span className="font-bold text-[var(--red-pencil)] uppercase">SUBJECT: </span>
              <span className="text-[var(--ink)]">{project.fullContent.subject}</span>
            </div>
            {project.fullContent.preheader && (
              <div>
                <span className="font-bold text-[var(--ink-secondary)] uppercase">PREHEADER: </span>
                <span className="text-[var(--ink)]/80">{project.fullContent.preheader}</span>
              </div>
            )}
          </div>
        )}

        {/* Printed Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-8">
            <div className="flex items-center justify-between pb-2 mb-4 border-b border-[var(--rule)]">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-secondary)]">
                TYPESET EXCERPT
              </span>
              <EditorialStamp text="final approved copy" />
            </div>

            <div className="space-y-4 font-serif text-lg sm:text-xl leading-relaxed text-[var(--ink)]/90">
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Editorial Notes */}
        {project.fullContent?.details && (
          <div className="mb-8 pt-6 border-t border-[var(--rule)]">
            <span className="font-mono text-xs uppercase tracking-widest block mb-2 text-[var(--ink-secondary)]">
              STRATEGIC CONTEXT &amp; RATIONALE
            </span>
            <div className="font-serif text-base text-[var(--ink)]/85 leading-relaxed whitespace-pre-line">
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--rule)] font-mono text-xs">
          <div>
            {project.fullContent?.substackLink && (
              <a
                href={project.fullContent.substackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider text-[var(--red-pencil)] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Full Essay on Substack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2 border border-[var(--rule)] text-[var(--ink)] font-bold uppercase tracking-wider hover:border-[var(--ink)] transition-colors"
          >
            Close Proof
          </button>
        </div>

      </div>
    </div>
  );
};
