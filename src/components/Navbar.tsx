import React, { useState, useEffect } from 'react';
import { ConfettiBow } from './ConfettiBow';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills & Tools', href: '#skills' },
    { label: 'Featured Work', href: '#work' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Resume & Expertise', href: '#resume' },
  ];

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 px-4 sm:px-8 md:px-12 py-3.5 sm:py-4 ${
        isScrolled
          ? 'bg-theme-bg/90 backdrop-blur-md border-b-2 border-theme-border shadow-sm'
          : 'bg-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-2xl sm:text-3xl font-display font-bold text-theme-ink tracking-tight group"
          aria-label="Abisola, back to top"
        >
          <ConfettiBow size="mini" className="group-hover:rotate-[-15deg] transition-transform" />
          <span>abisola.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-[15px] xl:text-[16px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-theme-ink/90 hover:text-theme-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-theme-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-right hover:after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-theme-ink text-theme-card font-semibold text-sm hover:bg-theme-accent hover:text-white transition-all transform hover:-translate-y-0.5 shadow-sm"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border-2 border-theme-border bg-theme-card text-theme-ink hover:bg-theme-ribbon transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-5 rounded-3xl bg-theme-card border-2 border-theme-border shadow-xl space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl font-semibold text-theme-ink hover:bg-theme-ribbon transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 rounded-full bg-theme-accent text-white font-bold text-sm shadow-md"
          >
            Let's Talk 🎀
          </a>
        </div>
      )}
    </nav>
  );
};
