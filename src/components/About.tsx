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
    <section
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12"
      style={{
        background: 'var(--ribbon)',
        borderTop: '2.5px solid var(--border)',
        borderBottom: '2.5px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-5">
            {/* Gutter label */}
            <div
              className="hidden lg:flex items-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: 'var(--ink-muted)' }}
            >
              <span
                className="w-5 h-[2px] inline-block"
                style={{ background: 'var(--accent)' }}
              />
              About the Author · Issue 001
            </div>

            {/* Polaroid */}
            <div
              className="w-full max-w-[360px] mx-auto p-4 pb-12 rounded-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300"
              style={{
                background: '#fff',
                border: '2.5px solid var(--border)',
                boxShadow: '10px 10px 0 var(--border)',
              }}
            >
              <div
                className="aspect-[4/5] rounded-xl overflow-hidden"
                style={{
                  border: '2px dashed var(--border)',
                  background: 'var(--bg)',
                }}
              >
                <img
                  src="/abisola-about.svg"
                  alt="Abisola Oluwatoyin writer workspace and manuscripts"
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="font-hand text-center text-xl mt-3"
                style={{ color: 'var(--ink)' }}
              >
                in love with language & meaning ♡
              </p>
            </div>

            {/* Status card */}
            <div
              className="mt-6 p-5 rounded-2xl max-w-[360px] mx-auto"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid var(--border)',
              }}
            >
              <span
                className="text-[10px] font-bold uppercase tracking-widest block mb-2"
                style={{ color: 'var(--ink-muted)' }}
              >
                Right now I'm
              </span>
              <div
                className="font-display text-sm font-bold min-h-[2.5rem]"
                style={{ color: 'var(--accent)' }}
              >
                <span>{currentText}</span>
                <span className="animate-blink inline-block ml-0.5" style={{ color: 'var(--ink)' }}>|</span>
              </div>

              <div
                className="mt-4 pt-4"
                style={{ borderTop: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  <span style={{ color: 'var(--ink)' }}>{ABOUT_DATA.basedIn}</span>
                </div>
                <div className="flex items-start gap-2 text-xs" style={{ color: 'var(--ink-muted)' }}>
                  <GraduationCap className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                  <span>{ABOUT_DATA.education}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-7">
            <span
              className="font-hand text-2xl block mb-2"
              style={{ color: 'var(--accent)' }}
            >
              behind the craft
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-8"
              style={{ color: 'var(--ink)' }}
            >
              {ABOUT_DATA.headline}
            </h2>

            <div className="space-y-4 text-base sm:text-lg leading-relaxed font-normal" style={{ color: 'var(--ink)' }}>
              {ABOUT_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>
                  {idx === 0 ? (
                    <>
                      <span
                        className="float-left font-serif font-black mr-2 leading-[0.8] select-none"
                        style={{
                          fontSize: '4.2rem',
                          color: 'var(--accent)',
                          lineHeight: 0.82,
                        }}
                      >
                        {p[0]}
                      </span>
                      {p.slice(1)}
                    </>
                  ) : p}
                </p>
              ))}
            </div>

            {/* Horizontal rule */}
            <div
              className="my-8 h-[2px]"
              style={{ background: 'var(--border)' }}
            />

            {/* Byline */}
            <div
              className="text-[11px] font-bold uppercase tracking-[0.2em] flex items-center gap-3"
              style={{ color: 'var(--ink-muted)' }}
            >
              <span
                className="w-8 h-[2px] inline-block"
                style={{ background: 'var(--accent)' }}
              />
              Written & Lived · Abisola Oluwatoyin · Lagos, Nigeria
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
