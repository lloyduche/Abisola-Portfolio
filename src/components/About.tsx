import React, { useState, useEffect } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { MapPin, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ABOUT_DATA.typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
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
    <section id="about" className="py-20 px-4 sm:px-8 md:px-12 bg-theme-ribbon/30 border-y-2 border-theme-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Polaroid Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] bg-white border-2 border-theme-border p-4 pb-12 rounded-2xl shadow-[10px_10px_0_var(--color-border)] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border-2 border-dashed border-theme-border bg-theme-bg">
                <img
                  src="/abisola-about.svg"
                  alt="Abisola Oluwatoyin writer workspace and manuscripts"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="hand text-center text-xl text-theme-ink mt-3">
                in love with language &amp; meaning &lt;3
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7">
            <span className="hand text-2xl text-theme-accent">behind the craft</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-theme-ink mt-1 mb-6 leading-tight">
              {ABOUT_DATA.headline}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-theme-ink/90 leading-relaxed font-normal">
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Status / Now Ticker */}
            <div className="mt-8 p-6 rounded-3xl bg-theme-card border-2 border-theme-border shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block mb-1">
                  Right now i'm
                </span>
                <div className="font-display text-base sm:text-lg font-bold text-theme-accent min-h-[3.2rem]">
                  <span>{currentText}</span>
                  <span className="animate-pulse inline-block text-theme-ink ml-1">|</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block mb-1">
                  Location &amp; Education
                </span>
                <div className="text-sm sm:text-base font-semibold text-theme-ink space-y-1">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-theme-accent flex-shrink-0" />
                    <span>{ABOUT_DATA.basedIn}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-theme-muted">
                    <GraduationCap className="w-4 h-4 text-theme-accent flex-shrink-0 mt-0.5" />
                    <span>{ABOUT_DATA.education}</span>
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
