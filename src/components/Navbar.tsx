import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Featured Work', href: '#featured-work' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Skills & Tools', href: '#skills-tools' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF4EC]/95 backdrop-blur-md border-b border-[#4A0E1C]/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">

        {/* Brand Name & Positioning */}
        <a href="#home" className="group">
          <div className="font-headline font-bold text-2xl sm:text-2xl text-[#4A0E1C] tracking-tight group-hover:opacity-85 transition-opacity">
            Abisola Oluwatoyin
          </div>
          <div className="text-xs text-[#38272D]/70 font-body hidden sm:block">
            Writer | Marketing, Communications &amp; Brand Storytelling
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-body font-medium text-[#38272D]/85 hover:text-[#4A0E1C] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle & Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[#4A0E1C]/15 hover:border-[#4A0E1C]/40 bg-white/80 hover:bg-white text-[#4A0E1C] shadow-xs hover:scale-105 active:scale-95 transition-all"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[#4A0E1C]" />
            ) : (
              <Sun className="w-4 h-4 text-[#E5B86B]" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A0E1C] text-white text-sm font-medium hover:bg-[#340611] shadow-sm hover:shadow transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4A0E1C] hover:bg-[#4A0E1C]/5 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF4EC] border-b border-[#4A0E1C]/15 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-body font-medium text-[#38272D] hover:text-[#4A0E1C]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex-1 py-3 px-4 rounded-full border border-[#4A0E1C]/20 bg-white text-xs font-semibold text-[#4A0E1C] flex items-center justify-center gap-2"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4 text-[#4A0E1C]" />
                  <span>Switch to Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-[#E5B86B]" />
                  <span>Switch to Light Mode</span>
                </>
              )}
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#4A0E1C] text-white text-sm font-medium hover:bg-[#340611]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#E5B86B]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
