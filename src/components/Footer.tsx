import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-theme-border py-8 px-4 sm:px-8 md:px-12 bg-theme-bg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-theme-ink">
        <div>
          &copy; {new Date().getFullYear()} Abisola Oluwatoyin. All rights reserved.
        </div>
        <div className="hand text-lg sm:text-xl text-theme-accent">
          tied together with words, strategy &amp; storytelling &lt;3
        </div>
        <a
          href="#home"
          className="flex items-center gap-1.5 font-bold text-theme-ink hover:text-theme-accent transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </a>
      </div>
    </footer>
  );
};
