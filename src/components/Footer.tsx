import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="py-10 px-4 sm:px-8 border-t"
      style={{
        background: 'var(--bg)',
        borderColor: 'var(--border)',
        color: 'var(--ink)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
        {/* Copyright */}
        <div className="text-ink/70">
          &copy; {new Date().getFullYear()} ABISOLA OLUWATOYIN. ALL RIGHTS RESERVED.
        </div>

        {/* Center Tag */}
        <div className="text-accent font-bold uppercase tracking-widest text-[11px]">
          THE STRATEGIC WIRE // WORDS WITH PURPOSE
        </div>

        {/* Back to top */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold tracking-wider uppercase text-ink hover:text-accent transition-colors"
        >
          <span>TOP OF DISPATCH</span>
          <ArrowUp className="w-4 h-4 text-accent" />
        </a>
      </div>
    </footer>
  );
};
