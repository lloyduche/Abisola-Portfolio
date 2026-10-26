import React, { useState, useEffect } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { MapPin, GraduationCap, CheckCircle, Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ABOUT_DATA.typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1900);
        }
      } else {
        setCurrentText(fullText.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % ABOUT_DATA.typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section id="about" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between pb-4 mb-12 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-accent">[ 01 ]</span>
            <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-ink">
              EXECUTIVE STATEMENT &amp; PHILOSOPHY
            </span>
          </div>
          <span className="text-xs font-mono text-ink/50 uppercase hidden sm:inline">
            DISCIPLINE: LANGUAGE, BRAND &amp; COMMERCE
          </span>
        </div>

        {/* 2-Column Strategic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visual & Live Status Terminal */}
          <div className="lg:col-span-5 space-y-6">
            {/* Precision Framed Portrait */}
            <div
              className="p-3 rounded-2xl border"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: '0 15px 35px var(--shadow-color)',
              }}
            >
              <div
                className="aspect-[4/5] rounded-xl overflow-hidden border relative"
                style={{ borderColor: 'var(--border)' }}
              >
                <img
                  src="/abisola-about.svg"
                  alt="Abisola Oluwatoyin - Writer workspace and manuscripts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded bg-black/75 backdrop-blur-md text-white font-mono text-[11px] border border-white/20">
                  <div className="flex items-center justify-between text-accent font-bold mb-1">
                    <span>TRANSMISSION SOURCE</span>
                    <span>LAGOS // REMOTE</span>
                  </div>
                  <div className="text-white/80">
                    B.A. English Language · Kwara State University (2:1)
                  </div>
                </div>
              </div>
            </div>

            {/* Live Terminal Thought-Stream */}
            <div
              className="p-5 rounded-xl border font-mono text-xs"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              <div className="flex items-center justify-between text-[10px] text-ink/50 font-bold uppercase tracking-wider mb-2 pb-2 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="flex items-center gap-1.5 text-accent">
                  <Terminal className="w-3.5 h-3.5" />
                  REAL-TIME FOCUS // NOW ENGAGING
                </span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              </div>

              <div className="text-sm font-bold text-accent min-h-[2.8rem] flex items-center">
                <span>&gt; {currentText}</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-ink animate-pulse" />
              </div>

              <div className="mt-4 pt-3 border-t space-y-2 text-ink/80 text-[11px]" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{ABOUT_DATA.basedIn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{ABOUT_DATA.education}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Architecture */}
          <div className="lg:col-span-7">
            {/* Lead Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink leading-tight tracking-tight mb-8">
              {ABOUT_DATA.headline}
            </h2>

            {/* Pull Quote Box */}
            <div
              className="p-6 rounded-xl border mb-8 relative"
              style={{
                background: 'var(--bg-card)',
                borderLeft: '4px solid var(--accent)',
                borderColor: 'var(--border)',
                borderLeftColor: 'var(--accent)',
              }}
            >
              <p className="font-serif italic text-lg sm:text-xl text-ink leading-relaxed">
                "Effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to communicate information in a way that is relevant, engaging and easy to understand."
              </p>
              <span className="block mt-3 text-xs font-mono font-bold tracking-wider text-accent uppercase">
                — CORE PHILOSOPHY &amp; APPROACH
              </span>
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-base sm:text-lg text-ink/85 leading-relaxed font-normal">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Key Strategic Pillars */}
            <div className="mt-10 pt-8 border-t grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-start gap-3 p-4 rounded border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono font-bold text-xs uppercase tracking-wider text-ink">
                    Linguistic Precision
                  </div>
                  <div className="text-xs text-ink/70 mt-1">
                    English Language syntax grounding every message in clarity and rhythmic force.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded border" style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}>
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-mono font-bold text-xs uppercase tracking-wider text-ink">
                    Commercial Empathy
                  </div>
                  <div className="text-xs text-ink/70 mt-1">
                    B2B and fintech conversion focus that drives measurable revenue and engagement.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
