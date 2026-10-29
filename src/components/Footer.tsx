import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#72213A] text-white py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10 pb-12 mb-8">

        {/* Brand Colophon */}
        <div className="space-y-2 max-w-md">
          <div className="font-headline font-semibold text-2xl tracking-tight text-white">
            Abisola Oluwatoyin
          </div>
          <p className="font-body text-sm text-white/80 leading-relaxed">
            Writer | Marketing, Communications &amp; Brand Storytelling
          </p>
          <div className="font-headline italic text-xs text-[#E5B86B] pt-1">
            "Bringing ideas to life through words, strategy and storytelling."
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-body text-white/85">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#featured-work" className="hover:text-white transition-colors">Featured Work</a>
          <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
          <a href="#skills-tools" className="hover:text-white transition-colors">Skills &amp; Tools</a>
          <a href="#resume" className="hover:text-white transition-colors">Resume</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Return to Top */}
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold text-white uppercase tracking-wider transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#E5B86B]" />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body text-white/60">
        <div>
          &copy; {new Date().getFullYear()} Abisola Oluwatoyin. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://abisolawrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>Substack</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <span>&bull;</span>
          <a
            href="https://www.linkedin.com/in/abisola-oluwatoyin/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
};
