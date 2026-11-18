import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './animations/MagneticButton';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#2A050F] border-t border-[#4A0E1C] py-16 px-6 sm:px-10 overflow-hidden text-[#FAF3E3]">
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#0D5BEB]/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-[#4A0E1C]/60 pb-12 mb-8 relative z-10">

        {/* Brand Colophon */}
        <div className="space-y-2 max-w-md">
          <div className="flex items-center gap-3">
            {/* Logo Mark in Electric Sapphire 10% */}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0848C4] to-[#1E6BFF] text-white flex items-center justify-center font-headline font-bold text-sm shadow-[0_4px_14px_rgba(13,91,235,0.4)]">
              AO
            </div>
            <div className="font-headline font-semibold text-2xl tracking-tight text-[#FAF3E3]">
              Abisola Oluwatoyin
            </div>
          </div>
          <p className="font-body text-sm text-[#DE93A4] leading-relaxed">
            Writer | Marketing, Communications &amp; Brand Storytelling
          </p>
          <div className="font-headline italic text-xs text-[#FAF3E3]/80 pt-1">
            "Bringing ideas to life through words, strategy and storytelling."
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-mono text-[#DE93A4]">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#featured-work" className="hover:text-white transition-colors">Featured Work</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#skills-tools" className="hover:text-white transition-colors">Skills &amp; Tools</a>
          <a href="#resume" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Return to Top with Magnetic Button (Electric Sapphire 10% on button) */}
        <div>
          <MagneticButton>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full sapphire-btn text-xs font-mono text-white uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-white" />
            </button>
          </MagneticButton>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#DE93A4]/70 relative z-10">
        <div>
          &copy; {new Date().getFullYear()} Abisola Oluwatoyin. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://abisolawrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#DE93A4]"
          >
            <span>Substack</span>
            <ArrowUpRight className="w-3 h-3 text-[#9EBEFD]" />
          </a>
          <span>&bull;</span>
          <a
            href="https://www.linkedin.com/in/abisola-oluwatoyin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#DE93A4]"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-[#9EBEFD]" />
          </a>
        </div>
      </div>
    </footer>
  );
};
