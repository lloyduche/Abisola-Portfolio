import React from 'react';
import { EditorialStamp } from './ManuscriptMarks';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 sm:px-12 text-xs font-mono text-[var(--ink-secondary)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Colophon Note */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="font-bold uppercase tracking-widest text-[var(--ink)]">
              COLOPHON &bull; THE LIVING MANUSCRIPT
            </span>
            <EditorialStamp text="archival proof" />
          </div>
          <p className="font-serif text-sm text-[var(--ink)]/80">
            Typeset in Bodoni Moda, EB Garamond, and Courier Prime on Archival Vellum.
          </p>
          <div className="text-[11px] text-[var(--ink-secondary)]">
            &copy; {new Date().getFullYear()} Abisola Oluwatoyin. All rights reserved.
          </div>
        </div>

        {/* Centered Editorial Emblem */}
        <div className="font-serif italic text-lg sm:text-xl text-[var(--ink)]/85 text-left md:text-center">
          "words that persuade &bull; ideas that endure"
        </div>

        {/* Back to Top Link */}
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--ink)] hover:text-[var(--red-pencil)] transition-colors underline underline-offset-4"
          >
            <span>Return to Title Folio</span>
            <ArrowUp className="w-4 h-4 text-[var(--red-pencil)]" />
          </a>
        </div>

      </div>
    </footer>
  );
};
