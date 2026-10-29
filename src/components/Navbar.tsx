import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 bg-[#FAF4EC]/95 backdrop-blur-md border-b border-[#72213A]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">

        {/* Brand Name & Positioning */}
        <a href="#home" className="group">
          <div className="font-headline font-bold text-2xl sm:text-2xl text-[#72213A] tracking-tight group-hover:opacity-85 transition-opacity">
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
              className="text-sm font-body font-medium text-[#38272D]/85 hover:text-[#72213A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Contact CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#72213A] text-white text-sm font-medium hover:bg-[#54172A] shadow-sm hover:shadow transition-all"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#72213A] hover:bg-[#72213A]/5 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF4EC] border-b border-[#72213A]/15 px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-body font-medium text-[#38272D] hover:text-[#72213A]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-[#72213A] text-white text-sm font-medium hover:bg-[#54172A]"
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
