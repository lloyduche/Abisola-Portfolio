import React, { useState } from 'react';
import { usePalette } from '../context/PaletteContext';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { palette, toggle } = usePalette();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { label: 'The Author', href: '#about' },
    { label: 'Capabilities', href: '#skills' },
    { label: 'Selected Works', href: '#work' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Chronology', href: '#resume' },
    { label: 'Correspondence', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--rule)] transition-colors duration-300">
      {/* Editorial Micro-Folio Strip */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-2 text-[11px] font-mono tracking-widest uppercase border-b border-[var(--rule)] text-[var(--ink-secondary)]">
        <div>THE EDITORIAL ARCHIVE &bull; VOL. XXVI</div>
        <div className="font-serif italic capitalize text-[13px] text-[var(--red-pencil)]">
          corporate comms, brand strategy &amp; b2b copywriting
        </div>
        <div>LAGOS &bull; GLOBAL</div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-5 flex items-center justify-between gap-6">
        {/* Publication Name */}
        <a href="#home" className="text-decoration-none">
          <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[var(--ink)]">
            Abisola Oluwatoyin
          </span>
        </a>

        {/* Minimal Typographic Links (NO BOXES, NO BUTTONS) */}
        <nav className="hidden lg:flex items-center gap-8">
          {sections.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm font-serif tracking-wide text-[var(--ink)]/80 hover:text-[var(--red-pencil)] transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          {/* Subtle Tone Switcher */}
          <button
            onClick={toggle}
            className="text-xs font-mono tracking-wider uppercase text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
            title="Toggle between Ivory Vellum and Carbon Nocturne"
          >
            [{palette === 'ivory' ? 'Ivory' : 'Nocturne'}]
          </button>

          {/* Quick Contact Link */}
          <a
            href="#contact"
            className="hidden sm:inline text-xs font-mono font-bold tracking-widest uppercase text-[var(--red-pencil)] hover:underline"
          >
            Write ✍
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[var(--ink)]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-8 py-6 border-b border-[var(--rule)] bg-[var(--paper)] flex flex-col gap-4">
          {sections.map((s) => (
            <a
              key={s.label}
              href={s.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[var(--ink)] hover:text-[var(--red-pencil)] border-b border-[var(--rule)] pb-2"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--red-pencil)] pt-2"
          >
            WRITE TO ABISOLA &rarr;
          </a>
        </div>
      )}
    </header>
  );
};

export const Masthead = Navbar;
