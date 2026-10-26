import React, { useState, useEffect } from 'react';
import { usePalette } from '../context/PaletteContext';
import { Menu, X } from 'lucide-react';

export const Masthead: React.FC = () => {
  const { palette, toggle } = usePalette();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { label: 'Work',     href: '#work'   },
    { label: 'Writing',  href: '#writing' },
    { label: 'Story',    href: '#about'  },
    { label: 'Resume',   href: '#resume' },
  ];

  const today = new Date().toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric',
  });

  return (
    <header className="masthead" style={{ boxShadow: scrolled ? '0 2px 20px rgba(72,33,63,0.08)' : 'none' }}>
      {/* Top micro-bar */}
      <div
        className="flex items-center justify-between px-5 sm:px-10 py-1.5 text-[10px] font-bold uppercase tracking-widest"
        style={{ borderBottom: '1px solid var(--border)', opacity: 0.6 }}
      >
        <span>Est. 2023 · Words That Inform &amp; Move</span>
        <span>{today} · Issue No. 001</span>
      </div>

      {/* Main masthead row */}
      <div className="flex items-center justify-between px-5 sm:px-10 py-3 gap-4">
        {/* Left nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.slice(0, 2).map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>

        {/* Centre wordmark */}
        <a
          href="#home"
          className="flex-1 text-center font-serif font-black leading-none tracking-tight"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)', color: 'var(--ink)', textDecoration: 'none' }}
        >
          The Editorial
        </a>

        {/* Right nav + toggle */}
        <div className="hidden md:flex items-center gap-7">
          {links.slice(2).map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}

          {/* Palette toggle */}
          <button
            onClick={toggle}
            className="palette-toggle flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider"
            style={{ color: 'var(--ink-muted)', border: 'none', background: 'none', cursor: 'pointer' }}
            title="Switch palette"
          >
            <span>{palette === 'lilac' ? '🟣 Lilac' : '🟢 Pistachio'}</span>
            <div className={`toggle-track ${palette === 'pistachio' ? 'on' : ''}`}>
              <div className="toggle-thumb" />
            </div>
          </button>

          <a href="#contact" className="pill-btn primary text-[12px] py-2 px-5">Hire Me ↗</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full border-2"
          style={{ borderColor: 'var(--border)', background: 'var(--bg-card)' }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-3">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="nav-link py-2 text-base">{l.label}</a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button onClick={toggle} className="palette-toggle flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider"
              style={{ color: 'var(--ink-muted)', border: 'none', background: 'none', cursor: 'pointer' }}>
              <span>{palette === 'lilac' ? '🟣 Icy Lilac' : '🟢 Pistachio Milk'}</span>
              <div className={`toggle-track ${palette === 'pistachio' ? 'on' : ''}`}>
                <div className="toggle-thumb" />
              </div>
            </button>
          </div>
          <a href="#contact" className="pill-btn primary text-center mt-1">Hire Me ↗</a>
        </div>
      )}
    </header>
  );
};
