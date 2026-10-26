import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      className="py-8 px-4 sm:px-8 md:px-12"
      style={{ background: 'var(--bg)', borderTop: '2.5px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div style={{ color: 'var(--ink)' }}>
            &copy; {new Date().getFullYear()} Abisola Oluwatoyin. All rights reserved.
          </div>

          <div
            className="font-hand text-lg sm:text-xl italic"
            style={{ color: 'var(--accent)' }}
          >
            tied together with words, strategy &amp; storytelling ♡
          </div>

          <a
            href="#home"
            className="flex items-center gap-1.5 font-bold transition-colors"
            style={{ color: 'var(--ink)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)';
            }}
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>

        {/* Colophon */}
        <div
          className="mt-5 pt-4 text-center text-[10px] font-bold uppercase tracking-[0.25em]"
          style={{
            borderTop: '1px solid var(--border)',
            color: 'var(--ink-muted)',
            opacity: 0.55,
          }}
        >
          The Editorial · Vol. 01 · Published by Abisola Oluwatoyin · Lagos, Nigeria
        </div>
      </div>
    </footer>
  );
};
