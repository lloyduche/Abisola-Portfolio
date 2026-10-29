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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-3xl bg-white border border-[#72213A]/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio & Close Button */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#72213A]/10 text-xs font-semibold uppercase tracking-wider text-[#72213A]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#E5B86B]" />
            <span>{project.tagCategory}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF4EC] text-[#38272D]/70 hover:text-[#72213A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-[#72213A] leading-snug mb-4">
          {project.title}
        </h3>

        {/* Hook */}
        {project.hook && (
          <div className="mb-6 p-4 rounded-xl bg-[#FAF4EC] border-l-4 border-[#72213A] text-sm font-body text-[#38272D]">
            <span className="font-semibold text-[#72213A] block text-xs uppercase mb-1">
              Strategic Hook:
            </span>
            {project.hook}
          </div>
        )}

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div className="p-4 mb-6 rounded-xl bg-[#FAF4EC] text-xs font-body space-y-1.5 border border-[#72213A]/10">
            <div>
              <span className="font-semibold text-[#72213A] uppercase">Subject Line: </span>
              <span className="text-[#38272D] font-medium">{project.fullContent.subject}</span>
            </div>
            {project.fullContent.preheader && (
              <div>
                <span className="font-semibold text-[#38272D]/70 uppercase">Preheader: </span>
                <span className="text-[#38272D]/85">{project.fullContent.preheader}</span>
              </div>
            )}
          </div>
        )}

        {/* Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38272D]/60 block mb-3">
              Selected Copy Excerpt
            </span>
            <div className="p-6 rounded-2xl bg-[#FAF4EC]/60 border border-[#72213A]/10 space-y-3 font-body text-base text-[#38272D]/90 leading-relaxed">
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Details */}
        {project.fullContent?.details && (
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38272D]/60 block mb-2">
              Context &amp; Results
            </span>
            <div className="p-4 rounded-xl bg-[#FAF4EC] font-body text-sm leading-relaxed text-[#38272D]/85 whitespace-pre-line border border-[#72213A]/10">
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#72213A]/10 font-body text-sm">
          <div>
            {project.fullContent?.substackLink && (
              <a
                href={project.fullContent.substackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#72213A] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Full Essay on Substack</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-[#72213A]/20 text-[#72213A] font-semibold hover:bg-[#FAF4EC] transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
