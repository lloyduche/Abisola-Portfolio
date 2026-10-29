import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="py-12 px-4 sm:px-8 border-t text-xs font-mono"
      style={{
        background: 'var(--paper)',
        borderColor: 'var(--ink-rule)',
        color: 'var(--ink)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Colophon Note */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-bold uppercase tracking-wider text-ink/80">
            THE LIVING MANUSCRIPT // COLOPHON
          </div>
          <p className="font-serif text-sm text-ink/60">
            Typeset in Playfair Display &amp; EB Garamond with Caveat editorial marginalia.
          </p>
          <div className="text-[11px] text-ink/50">
            &copy; {new Date().getFullYear()} Abisola Oluwatoyin. All rights reserved.
          </div>
        </div>

        {/* Centered Editorial Emblem */}
        <div className="font-hand text-xl italic text-center" style={{ color: 'var(--red-pencil)' }}>
          "words that persuade, ideas that endure"
        </div>

        {/* Back to Top */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold uppercase tracking-widest text-ink hover:text-[var(--red-pencil)] transition-colors"
        >
          <span>Title Page</span>
          <ArrowUp className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
        </a>

      </div>
    </footer>
  );
};
