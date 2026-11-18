import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './animations/MagneticButton';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Featured Work', href: '#featured-work', id: 'featured-work' },
    { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { label: 'Skills & Tools', href: '#skills-tools', id: 'skills-tools' },
    { label: 'Resume', href: '#resume', id: 'resume' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-3 sm:top-5 z-50 px-4 sm:px-8 max-w-7xl mx-auto transition-all duration-300">
      <div
        className={`rounded-full px-5 sm:px-8 h-16 sm:h-18 flex items-center justify-between gap-4 transition-all duration-300 ${
          scrolled ? 'cyber-nav' : 'cyber-glass bg-[#F7F5F0]/90'
        }`}
      >
        {/* Brand Name & Positioning */}
        <a href="#home" className="group flex flex-col justify-center shrink-0">
          <span className="font-headline font-semibold text-lg sm:text-xl text-[#0F1D24] tracking-tight group-hover:text-[#FF5E36] transition-colors leading-tight">
            Abisola Oluwatoyin
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#59707E] font-medium hidden xl:block leading-tight mt-0.5">
            Writer &bull; Marketing Comms &bull; Brand Storytelling
          </span>
        </a>

        {/* Desktop Navigation Links with Active Indicator (No text wrapping) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-xs xl:text-sm font-medium px-3 xl:px-3.5 py-2 rounded-full whitespace-nowrap transition-all inline-flex items-center justify-center leading-none ${
                  isActive
                    ? 'text-[#FF5E36] font-semibold'
                    : 'text-[#18303D]/80 hover:text-[#0F1D24] hover:bg-[#18303D]/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-[#FF5E36]/12 border border-[#FF5E36]/25 -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Contact CTA with Magnetic Physics (Persimmon Spark 10%) */}
        <div className="flex items-center gap-3 shrink-0">
          <MagneticButton>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full persimmon-btn text-white text-xs sm:text-sm font-bold shadow-[0_4px_18px_rgba(255,94,54,0.38)] transition-all whitespace-nowrap leading-none"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white shrink-0" />
            </a>
          </MagneticButton>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0F1D24] hover:text-[#FF5E36] rounded-lg cyber-pill flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Spring Physics */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-2 bg-[#FCFBF9] rounded-2xl px-6 py-6 space-y-3 border border-[#18303D]/14 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-body text-[#243A47] hover:text-[#FF5E36] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#18303D]/12">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl persimmon-btn text-white text-sm font-bold shadow-[0_4px_18px_rgba(255,94,54,0.38)]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
