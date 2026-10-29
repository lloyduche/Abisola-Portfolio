import React, { useState, useEffect } from 'react';
import { usePalette } from '../context/PaletteContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { palette, toggle } = usePalette();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lagosTime, setLagosTime] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const updateTime = () => {
      const now = new Date();
      setLagosTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const chapters = [
    { num: 'Prologue', label: 'Opening', href: '#home' },
    { num: 'I.', label: 'The Author', href: '#about' },
    { num: 'II.', label: 'Lexicon', href: '#skills' },
    { num: 'III.', label: 'Galleys', href: '#work' },
    { num: 'IV.', label: 'Spreads', href: '#case-studies' },
    { num: 'V.', label: 'Colophon', href: '#resume' },
    { num: 'Epilogue', label: 'Inquiry', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[var(--paper)]/95 backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.04)]'
          : 'bg-[var(--paper)]'
      }`}
      style={{ borderColor: 'var(--ink-rule)' }}
    >
      {/* Running Head Archival Folio Strip */}
      <div
        className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1.5 text-[11px] font-mono tracking-widest border-b uppercase"
        style={{
          borderColor: 'var(--ink-rule)',
          background: 'rgba(0,0,0,0.02)',
          color: 'var(--ink-muted)',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold" style={{ color: 'var(--red-pencil)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-pencil)] animate-pulse-dot" />
            FOLIO MS-2026 // THE LIVING MANUSCRIPT
          </span>
          <span className="opacity-40">|</span>
          <span>LAGOS, NG: {lagosTime || '10:00'} GMT+1</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-hand text-sm tracking-normal capitalize" style={{ color: 'var(--red-pencil)' }}>
            drafts, proofs &amp; finished pieces
          </span>
          <span className="opacity-40">|</span>
          <span className="text-[10px]">EDITION: WORKING PROOF</span>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Author Title / Book Identity */}
        <a href="#home" className="flex items-baseline gap-2.5 group text-decoration-none">
          <span className="font-display font-bold text-xl sm:text-2xl tracking-tight" style={{ color: 'var(--ink)' }}>
            Abisola Oluwatoyin
          </span>
          <span className="font-hand text-base sm:text-lg hidden sm:inline" style={{ color: 'var(--red-pencil)' }}>
            ~ author &amp; strategist
          </span>
        </a>

        {/* Chapters Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {chapters.map((c) => (
            <a
              key={c.num}
              href={c.href}
              className="group flex items-baseline gap-1.5 text-xs font-body font-medium tracking-wide transition-colors hover:text-[var(--red-pencil)]"
              style={{ color: 'var(--ink)' }}
            >
              <span className="text-[10px] font-mono opacity-50 group-hover:opacity-100" style={{ color: 'var(--red-pencil)' }}>
                {c.num}
              </span>
              <span>{c.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Paper Stock Switcher + Correspondence */}
        <div className="flex items-center gap-3">
          {/* Paper Stock Switcher */}
          <button
            onClick={toggle}
            className="flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono font-bold tracking-wider transition-all duration-200"
            style={{
              borderColor: 'var(--ink-rule-strong)',
              background: 'var(--paper-leaf)',
              color: 'var(--ink)',
            }}
            title="Switch between Icy Lilac and Pistachio Milk paper stocks"
          >
            <span className="text-xs">
              {palette === 'lilac' ? '🟣' : '🟢'}
            </span>
            <span className="hidden sm:inline text-[11px] uppercase">
              Paper: {palette === 'lilac' ? 'Icy Lilac' : 'Pistachio Milk'}
            </span>
            <span
              className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold text-white uppercase"
              style={{ background: 'var(--red-pencil)' }}
            >
              Flip
            </span>
          </button>

          {/* Correspondence CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-body font-semibold tracking-wider rounded border transition-all duration-200 shadow-sm"
            style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              borderColor: 'var(--ink)',
            }}
          >
            <span>Write to Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" style={{ color: 'var(--red-pencil)' }} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border"
            style={{
              borderColor: 'var(--ink-rule)',
              background: 'var(--paper-leaf)',
              color: 'var(--ink)',
            }}
            aria-label="Toggle Table of Contents"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden px-6 py-6 border-b flex flex-col gap-3"
          style={{
            background: 'var(--paper-leaf)',
            borderColor: 'var(--ink-rule)',
          }}
        >
          <div className="text-[11px] font-mono font-bold uppercase tracking-widest pb-2 border-b" style={{ borderColor: 'var(--ink-rule)', color: 'var(--red-pencil)' }}>
            TABLE OF CONTENTS // CHAPTER DIRECTORY
          </div>
          {chapters.map((c) => (
            <a
              key={c.num}
              href={c.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-sm font-serif font-medium border-b"
              style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink)' }}
            >
              <span>{c.label}</span>
              <span className="font-mono text-xs" style={{ color: 'var(--red-pencil)' }}>{c.num} →</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-2.5 text-center text-xs font-mono font-bold uppercase tracking-wider text-white rounded"
            style={{ background: 'var(--ink)' }}
          >
            OPEN CORRESPONDENCE ✍
          </a>
        </div>
      )}
    </header>
  );
};

export const Masthead = Navbar;
