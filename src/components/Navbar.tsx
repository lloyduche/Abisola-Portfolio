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
          second: '2-digit',
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

  const navItems = [
    { num: '01', label: 'STATEMENT', href: '#about' },
    { num: '02', label: 'CAPABILITIES', href: '#skills' },
    { num: '03', label: 'ARCHIVE', href: '#work' },
    { num: '04', label: 'CASE STUDIES', href: '#case-studies' },
    { num: '05', label: 'CREDENTIALS', href: '#resume' },
    { num: '06', label: 'INQUIRY', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 dark:bg-[#120514]/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ borderColor: 'var(--border)' }}
    >
      {/* Broadcast Meta Strip */}
      <div
        className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1.5 text-[11px] font-mono tracking-wider border-b"
        style={{
          borderColor: 'var(--border)',
          background: 'rgba(0,0,0,0.03)',
          color: 'var(--ink-muted)',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            LIVE DISPATCH // STRATEGIC WIRE
          </span>
          <span>·</span>
          <span>LAGOS, NG [GMT+1]: {lagosTime || '10:00:00'}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden lg:inline">OPEN FOR EXECUTIVE COMMS, B2B MESSAGING & ADVISORY</span>
          <span>REF: AO-2026</span>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <a href="#home" className="flex items-baseline gap-2 group">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-ink">
            ABISOLA OLUWATOYIN
          </span>
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase hidden sm:inline">
            // COMMS & STRATEGY
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider text-ink/75 hover:text-accent transition-colors"
            >
              <span className="text-[10px] text-accent font-bold opacity-60 group-hover:opacity-100">
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions: Palette Switcher + Contact Button */}
        <div className="flex items-center gap-3">
          {/* Dual Palette Toggle Switcher */}
          <button
            onClick={toggle}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono font-bold tracking-wider transition-all duration-200 hover:border-accent"
            style={{
              borderColor: 'var(--border-strong)',
              background: 'var(--bg-card)',
              color: 'var(--ink)',
            }}
            title="Toggle between Icy Lilac and Pistachio Milk themes"
          >
            <span className="text-sm">
              {palette === 'lilac' ? '🟣' : '🟢'}
            </span>
            <span className="hidden sm:inline uppercase text-[11px]">
              {palette === 'lilac' ? 'Icy Lilac' : 'Pistachio Milk'}
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-accent text-white font-mono">
              SWITCH
            </span>
          </button>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded border transition-all duration-200 shadow-sm"
            style={{
              background: 'var(--accent)',
              color: '#FFFFFF',
              borderColor: 'var(--accent)',
            }}
          >
            <span>DISPATCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--bg-card)',
              color: 'var(--ink)',
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden px-6 py-6 border-b flex flex-col gap-4 animate-fadeIn"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          <div className="text-[11px] font-mono text-accent font-bold pb-2 border-b" style={{ borderColor: 'var(--border)' }}>
            INDEX // NAVIGATION DIRECTORY
          </div>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-sm font-mono font-bold text-ink hover:text-accent border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <span>{item.label}</span>
              <span className="text-accent text-xs">{item.num} →</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 text-center text-xs font-mono font-bold uppercase tracking-wider text-white bg-accent rounded"
          >
            INITIATE COMMUNICATIONS →
          </a>
        </div>
      )}
    </header>
  );
};

export const Masthead = Navbar;
