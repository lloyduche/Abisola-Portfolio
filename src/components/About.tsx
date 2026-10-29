import React, { useState, useEffect } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { MapPin, GraduationCap, Feather } from 'lucide-react';

export const About: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ABOUT_DATA.typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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
    <section id="about" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Folio Chapter Line */}
        <div className="flex items-center justify-between pb-3 mb-12 border-b text-xs font-mono tracking-widest uppercase" style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink-muted)' }}>
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ CHAPTER II</span>
            <span>/</span>
            <span>THE AUTHOR'S NOTE &amp; PHILOSOPHY</span>
          </div>

          <div className="flex items-center gap-2 font-hand text-sm capitalize" style={{ color: 'var(--red-pencil)' }}>
            ~ "behind the craft"
          </div>
        </div>

        {/* 2-Column Manuscript Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Author's Workspace Plate & Editorial Notes */}
          <div className="lg:col-span-5 space-y-6">

            {/* Mounted Visual Plate */}
            <div className="paper-sheet p-3.5 rounded-lg border">
              <div className="aspect-[4/5] rounded overflow-hidden relative border" style={{ borderColor: 'var(--ink-rule)' }}>
                <img
                  src="/abisola-about.svg"
                  alt="Abisola Oluwatoyin writer workspace and manuscripts"
                  className="w-full h-full object-cover"
                />

                <div
                  className="absolute bottom-2 left-2 right-2 p-2.5 rounded text-[11px] font-mono border backdrop-blur-md"
                  style={{
                    background: 'rgba(255,255,255,0.88)',
                    borderColor: 'var(--ink-rule)',
                    color: 'var(--ink)',
                  }}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>PLATE II: THE WORKSPACE</span>
                    <span style={{ color: 'var(--red-pencil)' }}>LAGOS, NG</span>
                  </div>
                  <div className="text-[10px] text-ink/70 font-mono mt-0.5">
                    Syntax, linguistic architecture &amp; commercial strategy
                  </div>
                </div>
              </div>

              <div className="mt-2.5 text-center font-hand text-sm" style={{ color: 'var(--red-pencil)' }}>
                ~ "where words become instruments of clarity"
              </div>
            </div>

            {/* Typewriter Carriage Feed: Current Initiative */}
            <div
              className="p-5 rounded-lg border paper-sheet font-mono text-xs space-y-3"
              style={{ borderColor: 'var(--ink-rule)' }}
            >
              <div className="flex items-center justify-between pb-2 border-b text-[10px] uppercase font-bold tracking-wider" style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink-muted)' }}>
                <span className="flex items-center gap-1.5" style={{ color: 'var(--red-pencil)' }}>
                  <Feather className="w-3.5 h-3.5" />
                  TYPEWRITER CARRIAGE // CURRENT FOCUS
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-pencil)] animate-pulse-dot" />
              </div>

              {/* Dynamic Typist Text */}
              <div className="font-serif text-base italic min-h-[3rem] flex items-center" style={{ color: 'var(--ink)' }}>
                <span>"{currentText}"</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-[var(--red-pencil)] animate-pulse" />
              </div>

              {/* Location & Academic Pedigree */}
              <div className="pt-3 border-t space-y-2 text-[11px] font-mono" style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink)' }}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--red-pencil)' }} />
                  <span>{ABOUT_DATA.basedIn}</span>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--red-pencil)' }} />
                  <span>{ABOUT_DATA.education}</span>
                </div>
              </div>
            </div>

            {/* Marginal Editorial Annotation */}
            <div className="p-4 rounded border border-dashed font-hand text-base leading-snug" style={{ borderColor: 'var(--red-pencil)', color: 'var(--red-pencil)' }}>
              "Marginal note: A degree in English Language isn't just about grammar; it's about audience psychology, rhythm, and structural argument."
            </div>

          </div>

          {/* Right Column: The Manuscript Text */}
          <div className="lg:col-span-7">

            {/* Chapter Headline */}
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight mb-8" style={{ color: 'var(--ink)' }}>
              {ABOUT_DATA.headline}
            </h2>

            {/* Annotated Pull Quote with Red Margin Rule */}
            <div
              className="p-6 rounded-lg mb-8 relative border-l-4"
              style={{
                background: 'var(--paper-leaf)',
                borderColor: 'var(--red-pencil)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
            >
              <div className="font-hand text-sm mb-1" style={{ color: 'var(--red-pencil)' }}>
                [ed note: author's core thesis]
              </div>
              <p className="font-serif italic text-xl sm:text-2xl text-ink leading-relaxed">
                "Effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to turn complexity into clarity."
              </p>
            </div>

            {/* The Text with Strikethroughs & Marginalia */}
            <div className="space-y-6 font-serif text-lg sm:text-xl text-ink/90 leading-relaxed font-normal">
              <p className="drop-cap">
                {ABOUT_DATA.paragraphs[0]}
              </p>

              <div className="relative">
                <p>
                  {ABOUT_DATA.paragraphs[1]}
                </p>
                {/* Red note */}
                <span className="inline-block font-hand text-base text-[var(--red-pencil)] mt-1">
                  ^ [application: fintech, regulatory mandates, high-conversion email sequences]
                </span>
              </div>

              <p>
                {ABOUT_DATA.paragraphs[2]}
              </p>

              <p>
                {ABOUT_DATA.paragraphs[3]}
              </p>
            </div>

            {/* Author Byline & Proof Signature */}
            <div className="mt-10 pt-6 border-t flex flex-wrap items-center justify-between gap-4 font-mono text-xs" style={{ borderColor: 'var(--ink-rule)' }}>
              <div className="flex items-center gap-2">
                <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>STET //</span>
                <span className="font-hand text-lg" style={{ color: 'var(--ink)' }}>
                  Abisola Oluwatoyin
                </span>
              </div>

              <div className="text-ink/60 uppercase">
                LAGOS, NIGERIA · ALL PROOFS RESERVED
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
