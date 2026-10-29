import React, { useState, useEffect } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { RedCircle, RedArrow, EditorialStamp } from './ManuscriptMarks';
import { MapPin, GraduationCap } from 'lucide-react';

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
    <section id="about" className="py-20 lg:py-32 border-b border-[var(--rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Folio Chapter Line */}
        <div className="flex items-center justify-between pb-3 mb-12 border-b border-[var(--rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--red-pencil)]">&para; CHAPTER I</span>
            <span>/</span>
            <span>THE AUTHOR'S ESSAY</span>
          </div>

          <div className="flex items-center gap-3">
            <EditorialStamp text="first edition" />
          </div>
        </div>

        {/* Feature Headline (NO BOXES) */}
        <div className="mb-12 border-b border-[var(--rule)] pb-10">
          <div className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--red-pencil)] mb-3">
            AUTONOMY &bull; DISCIPLINE &bull; CRAFT
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[var(--ink)] leading-tight mb-4">
            {ABOUT_DATA.headline}
          </h2>
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--ink-secondary)]">
            <span>BY ABISOLA OLUWATOYIN</span>
            <span>&bull;</span>
            <span>LAGOS, NIGERIA</span>
          </div>
        </div>

        {/* 2-Column Broadsheet Essay Layout (Images 2 & 5 style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Author's Workspace & Gutter Marginalia */}
          <div className="lg:col-span-5 space-y-8">
            {/* Workspace Photographic Plate (Clean hairline border, NO BOX CARDS) */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-[var(--rule)]">
                <img
                  src="/abisola-about.svg"
                  alt="Abisola Oluwatoyin writer workspace and manuscripts"
                  className="w-full h-full object-cover filter grayscale contrast-105"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between text-xs font-mono text-[var(--ink-secondary)]">
                <span className="font-bold text-[var(--ink)]">PLATE II &bull; THE DESK</span>
                <span>LAGOS &bull; REMOTE</span>
              </div>
            </div>

            {/* Live Typewriter Thought-Stream Line (NO BOXES, clean typography) */}
            <div className="border-t border-[var(--rule)] pt-6 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-[10px] uppercase font-bold tracking-wider text-[var(--ink-secondary)]">
                <span className="text-[var(--red-pencil)]">TYPEWRITER CARRIAGE &bull; LIVE FOCUS:</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--red-pencil)] animate-pulse-dot" />
              </div>

              <div className="font-serif text-lg italic text-[var(--ink)] min-h-[3rem] flex items-center">
                <span>"{currentText}"</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-[var(--red-pencil)] animate-pulse" />
              </div>

              {/* Pedigree & Location */}
              <div className="pt-4 border-t border-[var(--rule)] space-y-2 text-[11px] text-[var(--ink)]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--red-pencil)]" />
                  <span>{ABOUT_DATA.basedIn}</span>
                </div>
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[var(--red-pencil)]" />
                  <span>{ABOUT_DATA.education}</span>
                </div>
              </div>
            </div>

            {/* Marginal Editorial Annotation (Image 1 & 4 style) */}
            <div className="border-t border-[var(--rule)] pt-4 font-hand text-base leading-snug text-[var(--red-pencil)]">
              "A degree in English Language isn't just about grammar; it's about syntactic rhythm, audience psychology, and knowing which sentence creates the commercial conversion."
            </div>
          </div>

          {/* Right Column: Literary Essay Text */}
          <div className="lg:col-span-7 space-y-8 font-serif text-lg sm:text-xl text-[var(--ink)]/90 leading-relaxed">

            {/* Lead Paragraph with Giant Drop-Cap (Image 2 & 5 style) */}
            <p className="drop-cap-rushdie text-[var(--ink)]">
              My background in <RedCircle>English Language</RedCircle> has shaped how I approach writing, storytelling and communication. It has given me an enduring appreciation for language, structure and meaning, and how the right words shape understanding and influence how a message is received.
            </p>

            <div className="relative">
              <p>
                Through my experience in marketing and corporate communications, I have brought this foundation into <RedCircle>high-stakes business contexts</RedCircle>—developing content, shaping brand messages and contributing to campaigns designed around specific audiences and commercial objectives.
              </p>
              <div className="font-hand text-base text-[var(--red-pencil)] mt-2 flex items-center gap-2">
                <RedArrow direction="right" />
                <span>[application: fintech positioning, regulatory compliance, webinar funnels]</span>
              </div>
            </div>

            {/* Editorial Pull Quote (Clean vertical bar, NO BOX) */}
            <div className="border-l-2 border-[var(--red-pencil)] pl-6 my-8 py-2">
              <p className="font-serif italic text-2xl sm:text-3xl text-[var(--ink)] leading-snug">
                "Effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to turn complexity into clarity."
              </p>
            </div>

            <p>
              I understand that effective communication requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to communicate information in a way that is relevant, engaging and easy to understand.
            </p>

            <p>
              Whether I am working on marketing content, email campaigns, corporate communications or creative writing, I approach each piece with attention to language, context and the message it needs to convey.
            </p>

            {/* Author Byline Lockup */}
            <div className="pt-8 border-t border-[var(--rule)] flex items-center justify-between font-mono text-xs text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--ink)]">ABISOLA OLUWATOYIN</span>
              <span>WRITTEN &amp; LIVED &bull; LAGOS, NIGERIA</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
