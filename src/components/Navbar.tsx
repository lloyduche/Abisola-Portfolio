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
    { num: 'I.', label: 'The Author', href: '#about' },
    { num: 'II.', label: 'Capabilities', href: '#skills' },
    { num: 'III.', label: 'Selected Works', href: '#work' },
    { num: 'IV.', label: 'Case Studies', href: '#case-studies' },
    { num: 'V.', label: 'Credentials', href: '#resume' },
    { num: 'VI.', label: 'Correspondence', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[var(--paper)]/95 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.03)]'
          : 'bg-[var(--paper)]'
      }`}
      style={{ borderColor: 'var(--ink-rule)' }}
    >
      {/* Broadsheet Running Head Strip */}
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
            THE EDITORIAL ARCHIVE // FOLIO 2026
          </span>
          <span className="opacity-30">|</span>
          <span>LAGOS, NG: {lagosTime || '10:00'} GMT+1</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-hand text-sm tracking-normal capitalize" style={{ color: 'var(--red-pencil)' }}>
            corporate comms · brand strategy · b2b copywriting
          </span>
          <span className="opacity-30">|</span>
          <span className="text-[10px]">EDITION: WORKING PROOF</span>
        </div>
      </div>

      {/* Main Masthead Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between gap-4">
        {/* Publication Name / Brand */}
        <a href="#home" className="flex items-baseline gap-2.5 group text-decoration-none">
          <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-ink">
            Abisola Oluwatoyin
          </span>
          <span className="font-hand text-base sm:text-lg hidden sm:inline" style={{ color: 'var(--red-pencil)' }}>
            ~ writer &amp; strategist
          </span>
        </a>

        {/* Desktop Chapter Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {chapters.map((c) => (
            <a
              key={c.num}
              href={c.href}
              className="group flex items-baseline gap-1.5 text-xs font-body font-medium tracking-wide transition-colors hover:text-[var(--red-pencil)] text-ink"
            >
              <span className="text-[10px] font-mono opacity-60 group-hover:opacity-100" style={{ color: 'var(--red-pencil)' }}>
                {c.num}
              </span>
              <span>{c.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Paper Stock Switcher + Direct Contact */}
        <div className="flex items-center gap-3">
          {/* Palette Paper Stock Switcher */}
          <button
            onClick={toggle}
            className="flex items-center gap-2 px-3 py-1.5 rounded border text-xs font-mono font-bold tracking-wider transition-all duration-200"
            style={{
              borderColor: 'var(--ink-rule-strong)',
              background: 'var(--paper-leaf)',
              color: 'var(--ink)',
            }}
            title="Toggle between Ivory Vellum and Carbon Nocturne paper stocks"
          >
            <span className="text-xs">
              {palette === 'ivory' ? '📜' : '🌑'}
            </span>
            <span className="hidden sm:inline text-[11px] uppercase">
              Paper: {palette === 'ivory' ? 'Ivory Vellum' : 'Carbon Nocturne'}
            </span>
            <span
              className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold text-white uppercase"
              style={{ background: 'var(--red-pencil)' }}
            >
              Flip
            </span>
          </button>

          {/* Quick Correspondence CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded border transition-all duration-200 shadow-sm"
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
            aria-label="Toggle Navigation"
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
            THE EDITORIAL DIRECTORY
          </div>
          {chapters.map((c) => (
            <a
              key={c.num}
              href={c.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-base font-serif font-medium border-b text-ink"
              style={{ borderColor: 'var(--ink-rule)' }}
            >
              <span>{c.label}</span>
              <span className="font-mono text-xs" style={{ color: 'var(--red-pencil)' }}>{c.num} →</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 text-center text-xs font-mono font-bold uppercase tracking-wider text-white rounded"
            style={{ background: 'var(--ink)' }}
          >
            SEND CORRESPONDENCE ✍
          </a>
        </div>
      )}
    </header>
  );
};

export const Masthead = Navbar;
