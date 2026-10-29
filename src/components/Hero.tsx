import React from 'react';
import { RedCircle, RedWavyStrike, RedArrow, EditorialStamp } from './ManuscriptMarks';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-8 sm:pt-12 pb-20 lg:pb-28 border-b overflow-hidden" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Top Folio Header Strip */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b text-xs font-mono tracking-widest uppercase" style={{ borderColor: 'var(--ink-rule)', color: 'var(--ink-muted)' }}>
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ PROLOGUE</span>
            <span>/</span>
            <span>MANUSCRIPT DRAFT NO. 07</span>
            <span className="hidden sm:inline">· GABRIEL GARCÍA MÁRQUEZ ARCHIVES MODEL</span>
          </div>

          <div className="flex items-center gap-3">
            <EditorialStamp text="ojo // revised" />
            <span className="proof-stamp hidden sm:inline-flex">TYPESET PROOF</span>
          </div>
        </div>

        {/* Layered Manuscript Spread Container (like Image 1 & Image 3) */}
        <div className="relative">

          {/* Background Peeking Under-Sheets (Layered Paper Drafts) */}
          <div
            className="absolute -inset-2 rounded shadow-lg transform rotate-[1.2deg] opacity-70 pointer-events-none border hidden md:block"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule)',
            }}
          />
          <div
            className="absolute -inset-1 rounded shadow-md transform -rotate-[0.8deg] opacity-85 pointer-events-none border hidden md:block"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule)',
            }}
          />

          {/* Main Foreground Editorial Sheet (Modeled after Images 1, 2, 3 & 4) */}
          <div
            className="relative paper-sheet p-6 sm:p-12 lg:p-16 rounded-lg border z-10"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule-strong)',
            }}
          >

            {/* Top Red Marker Draft Correction (Image 1 & Image 4 style) */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="font-hand text-base sm:text-lg" style={{ color: 'var(--red-pencil)' }}>
                ( ¿cómo comunicar el valor comercial? )
              </span>
              <RedArrow direction="right" />
              <div className="font-mono text-xs">
                <RedWavyStrike>Every business has something to say</RedWavyStrike>
                <span className="font-hand text-sm ml-2 font-bold" style={{ color: 'var(--red-pencil)' }}>
                  ^ [stet: strike the generic cliché. lead with conviction]
                </span>
              </div>
            </div>

            {/* Monumental Headline in the Style of Image 2 ("Rendezvous with Rushdie") */}
            <div className="mb-8 border-b pb-8" style={{ borderColor: 'var(--ink-rule)' }}>
              <h1
                className="font-display font-black tracking-tight leading-[0.95] text-ink mb-4"
                style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)' }}
              >
                Language with intent. <br />
                <span className="italic font-normal font-serif" style={{ color: 'var(--red-pencil)' }}>
                  Strategy with soul.
                </span>
              </h1>

              {/* Subhead in Rushdie editorial italic style (Image 2) */}
              <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl max-w-4xl leading-relaxed text-ink/90">
                A writer, brand strategist, and corporate communications specialist bridging technical fintech complexity, regulatory fiscal mandates, and the human heart.
              </p>
            </div>

            {/* 3-Column Literary Manuscript Layout (inspired by Image 2 & Image 5) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">

              {/* Column 1: Drop-Cap 'W' Column */}
              <div className="md:col-span-4 font-serif text-base sm:text-lg text-ink/90 leading-relaxed">
                <span className="float-left font-display font-black text-6xl sm:text-7xl leading-[0.8] pr-3 pt-1 text-ink">
                  W
                </span>
                <p>
                  ords are never mere decorative instruments in high-stakes enterprise communications. They are the structural architecture of commercial understanding. My work begins where technical jargon falters—translating complex product mechanics, payment rails, and regulatory mandates into language that moves decision-makers to act.
                </p>
                <div className="mt-4 pt-3 border-t font-hand text-sm leading-tight" style={{ borderColor: 'var(--ink-rule)', color: 'var(--red-pencil)' }}>
                  ~ "In love with language, syntax &amp; commercial meaning."
                </div>
              </div>

              {/* Column 2: Drop-Cap 'L' Column with Red Annotations */}
              <div className="md:col-span-4 font-serif text-base sm:text-lg text-ink/90 leading-relaxed relative">
                <span className="float-left font-display font-black text-6xl sm:text-7xl leading-[0.8] pr-3 pt-1" style={{ color: 'var(--red-pencil)' }}>
                  L
                </span>
                <p>
                  anguage with intent means every sentence serves a deliberate purpose. Whether articulating a <RedCircle>₦1.07 quadrillion</RedCircle> fintech bank transfer volume hook, activating a <RedCircle>12% conversion rate</RedCircle> email sequence, or crafting cultural essays on <span className="underline decoration-[var(--red-pencil)]">Abisola Writes</span>, the discipline remains identical: clarity over pretense.
                </p>
                <div className="mt-4 p-3 rounded border font-mono text-xs" style={{ background: 'var(--paper)', borderColor: 'var(--ink-rule)' }}>
                  <span className="text-[10px] font-bold uppercase block mb-1 text-[var(--red-pencil)]">
                    EDITORIAL VERDICT // 2026:
                  </span>
                  <span>"Turn complexity into clarity; turn clarity into revenue."</span>
                </div>
              </div>

              {/* Column 3: The Author's Mounted Photographic Plate (Image 3 style) */}
              <div className="md:col-span-4">
                <div className="p-3 rounded border paper-sheet relative">
                  <div className="aspect-[4/5] rounded overflow-hidden relative border" style={{ borderColor: 'var(--ink-rule)' }}>
                    <img
                      src="/abisola.svg"
                      alt="Abisola Oluwatoyin - Author Portrait"
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute bottom-2 left-2 right-2 p-2 rounded text-[10px] font-mono border backdrop-blur-md"
                      style={{
                        background: 'rgba(255,255,255,0.9)',
                        borderColor: 'var(--ink-rule)',
                        color: 'var(--ink)',
                      }}
                    >
                      <div className="flex items-center justify-between font-bold">
                        <span>PLATE I // AUTHOR</span>
                        <span style={{ color: 'var(--red-pencil)' }}>LAGOS, NG</span>
                      </div>
                      <div className="font-hand text-xs mt-0.5" style={{ color: 'var(--ink)' }}>
                        Abisola Oluwatoyin · English Language (2:1)
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 text-center font-hand text-sm" style={{ color: 'var(--red-pencil)' }}>
                    ( author of the working proofs below )
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Proof Actions & Verified Telemetry Ribbon */}
            <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-6" style={{ borderColor: 'var(--ink-rule)' }}>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="px-6 sm:px-8 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-sm"
                  style={{
                    background: 'var(--ink)',
                    color: 'var(--paper)',
                  }}
                >
                  <span>Examine Galley Proofs</span>
                  <ArrowDown className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                </a>

                <a
                  href="https://abisolawrites.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 rounded border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all hover:bg-black/5"
                  style={{
                    borderColor: 'var(--ink-rule-strong)',
                    color: 'var(--ink)',
                  }}
                >
                  <span>Read on Substack</span>
                  <ArrowUpRight className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                </a>
              </div>

              {/* Verified Editorial Marginal Numbers */}
              <div className="flex items-center gap-6 font-mono text-xs">
                <div className="border-r pr-6" style={{ borderColor: 'var(--ink-rule)' }}>
                  <div className="font-display font-black text-xl text-[var(--red-pencil)]">₦1.07Q</div>
                  <div className="text-[10px] text-ink/60 uppercase">NIP Hook</div>
                </div>
                <div className="border-r pr-6" style={{ borderColor: 'var(--ink-rule)' }}>
                  <div className="font-display font-black text-xl text-[var(--red-pencil)]">12%</div>
                  <div className="text-[10px] text-ink/60 uppercase">Conversion</div>
                </div>
                <div>
                  <div className="font-display font-black text-xl text-[var(--red-pencil)]">1.4k+</div>
                  <div className="text-[10px] text-ink/60 uppercase">Substack</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
