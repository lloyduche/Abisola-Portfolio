import React, { useState } from 'react';
import { usePalette } from '../context/PaletteContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { palette, togglePalette } = usePalette();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const drawers = [
    { num: 'I', label: 'The Author', sub: 'Bio & Ledger', href: '#about' },
    { num: 'II', label: 'Campaigns', sub: 'Filed Proofs', href: '#campaigns' },
    { num: 'III', label: 'Editorial Room', sub: 'Dossiers', href: '#editorial-room' },
    { num: 'IV', label: 'Personal Writing', sub: 'Abisola Writes', href: '#personal-writing' },
    { num: 'V', label: 'Correspondence', sub: 'Inquiries', href: '#correspondence' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[var(--cabinet-cream)]/95 backdrop-blur-md border-b border-[var(--cabinet-rule)] transition-colors duration-300">
      {/* Top Archival Folio Ribbon */}
      <div className="border-b border-[var(--cabinet-rule)] py-1.5 px-6 sm:px-12 text-[10px] font-mono tracking-widest uppercase flex items-center justify-between text-[var(--ink-secondary)]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--cabinet-brass)]" />
          <span>THE WRITER'S CABINET // CLASSIFICATION REF: AO-2026</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">LAGOS, NIGERIA &bull; REMOTE GLOBAL</span>
          <button
            onClick={togglePalette}
            className="text-[10px] font-mono uppercase tracking-wider text-[var(--cabinet-brass)] hover:underline flex items-center gap-1 font-bold"
          >
            <span>{palette === 'nocturne' ? 'Burgundy Cloth' : 'Nocturne View'}</span>
          </button>
        </div>
      </div>

      {/* Main Masthead & Cabinet Drawers Navigation */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-3 flex items-center justify-between gap-6">

        {/* Brand / Cabinet Identification Plate */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm brass-label-holder flex items-center justify-center font-display font-black text-xs text-[var(--cabinet-burgundy)] shrink-0">
            AO
          </div>
          <div>
            <div className="font-display font-black text-xl sm:text-2xl tracking-tight text-[var(--cabinet-burgundy)] leading-none group-hover:opacity-85 transition-opacity">
              Abisola Oluwatoyin
            </div>
            <div className="font-serif italic text-xs text-[var(--ink-secondary)] mt-0.5">
              The Writer's Cabinet &bull; Archive 01
            </div>
          </div>
        </a>

        {/* Desktop Drawer Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-2">
          {drawers.map((drawer) => (
            <a
              key={drawer.num}
              href={drawer.href}
              className="px-3.5 py-2 rounded-sm border border-[var(--cabinet-rule)] hover:border-[var(--cabinet-brass)] hover:bg-[var(--cabinet-cream-dark)] transition-all text-left group"
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--cabinet-brass)] font-bold">
                DRAWER {drawer.num}
              </div>
              <div className="font-serif text-sm font-bold text-[var(--ink)] leading-none group-hover:text-[var(--cabinet-burgundy)]">
                {drawer.label}
              </div>
            </a>
          ))}
        </nav>

        {/* Quick Dispatch CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#correspondence"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-sm font-mono text-xs uppercase font-bold tracking-wider text-[var(--cabinet-cream)] bg-[var(--cabinet-burgundy)] hover:opacity-90 transition-opacity"
          >
            <span>Dispatch Inquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--ink)] hover:text-[var(--cabinet-burgundy)]"
            aria-label="Toggle Drawer Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--cabinet-cream-dark)] border-t border-[var(--cabinet-rule)] px-6 py-6 space-y-3 animate-fadeIn">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--cabinet-brass)] font-bold mb-2">
            SELECT CABINET COMPARTMENT //
          </div>
          {drawers.map((drawer) => (
            <a
              key={drawer.num}
              href={drawer.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 rounded-sm border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream)] hover:border-[var(--cabinet-brass)] transition-colors"
            >
              <div className="font-mono text-[10px] text-[var(--cabinet-brass)] font-bold">
                DRAWER {drawer.num} // {drawer.sub}
              </div>
              <div className="font-serif text-lg font-bold text-[var(--ink)] mt-0.5">
                {drawer.label}
              </div>
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
