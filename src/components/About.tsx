import React, { useState, useEffect } from 'react';
import { ABOUT_DATA } from '../data/portfolioData';
import { RedCircle, RedArrow, EditorialStamp } from './ManuscriptMarks';
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
            <span>THE AUTHOR'S NOTE &amp; WORKING DRAFT</span>
          </div>

          <div className="flex items-center gap-3">
            <EditorialStamp text="stet // author's premise" />
            <span className="font-hand text-sm capitalize hidden sm:inline" style={{ color: 'var(--red-pencil)' }}>
              ~ "behind the craft"
            </span>
          </div>
        </div>

        {/* 2-Column Manuscript Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Author's Workspace Plate & Editorial Notes (Images 1 & 4 style) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Mounted Visual Plate with layered paper borders */}
            <div className="paper-sheet p-3.5 rounded-lg border relative">
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
                  TYPEWRITER CARRIAGE // NOW DRAFTING
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

            {/* Marginal Editorial Annotation with Arrow (Image 1 style) */}
            <div className="p-4 rounded border border-dashed font-hand text-base leading-snug" style={{ borderColor: 'var(--red-pencil)', color: 'var(--red-pencil)' }}>
              <div className="flex items-center gap-2 mb-1">
                <EditorialStamp text="ojo" />
                <span className="font-mono text-xs font-bold uppercase">EDITORIAL MARGIN:</span>
              </div>
              <p>
                "A degree in English Language isn't just about grammar; it's about syntactic rhythm, audience psychology, and knowing which word creates the conversion."
              </p>
            </div>

          </div>

          {/* Right Column: The Manuscript Text with Red Edits */}
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

            {/* The Text with Strikethroughs & Red-Circle Embellishments */}
            <div className="space-y-6 font-serif text-lg sm:text-xl text-ink/90 leading-relaxed font-normal">
              <p className="drop-cap">
                My background in <RedCircle>English Language</RedCircle> has shaped how I approach writing, storytelling and communication. It has given me an appreciation for language, structure and meaning, and how the right words can shape understanding and influence how a message is received.
              </p>

              <div className="relative">
                <p>
                  Through my experience in marketing and corporate communications, I have brought this foundation into <RedCircle>high-stakes business contexts</RedCircle>—developing content, shaping brand messages and contributing to campaigns designed around specific audiences and commercial objectives.
                </p>
                <div className="font-hand text-base text-[var(--red-pencil)] mt-1.5 flex items-center gap-2">
                  <RedArrow direction="right" />
                  <span>[application: fintech positioning, regulatory compliance, webinar funnels]</span>
                </div>
              </div>

              <p>
                I understand that effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to communicate information in a way that is relevant, engaging and easy to understand.
              </p>

              <p>
                Whether I am working on marketing content, email campaigns, corporate communications or creative writing, I approach each piece with attention to language, context and the message it needs to convey.
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
                LAGOS, NIGERIA · WORKING DRAFT VERIFIED
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
