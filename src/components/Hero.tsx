import React from 'react';
import { RedCircle, RedWavyStrike, RedArrow, EditorialStamp } from './ManuscriptMarks';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-20 lg:pb-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Broadsheet Folio Header */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b text-xs font-mono tracking-widest uppercase text-ink/70" style={{ borderColor: 'var(--ink-rule)' }}>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--red-pencil)]">¶ BROADSHEET LEAD</span>
            <span>/</span>
            <span>VOL. XXVI · ISSUE NO. 01</span>
            <span className="hidden sm:inline">· THE EDITORIAL PROOFS</span>
          </div>

          <div className="flex items-center gap-3">
            <EditorialStamp text="stet // approved" />
            <span className="proof-stamp hidden sm:inline-flex">VERIFIED EDITION</span>
          </div>
        </div>

        {/* Top Editorial Red Pencil Correction (Gabriel García Márquez / T.S. Eliot draft style) */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="font-hand text-base sm:text-lg text-[var(--red-pencil)]">
            ( ¿cómo comunicar el verdadero valor comercial? )
          </span>
          <RedArrow direction="right" />
          <div className="font-mono text-xs text-ink/80">
            <RedWavyStrike>Every business has something to say</RedWavyStrike>
            <span className="font-hand text-sm ml-2 font-bold text-[var(--red-pencil)]">
              ^ [stet: delete generic corporate cliché. lead with conviction]
            </span>
          </div>
        </div>

        {/* Monumental Headline Modeled on Image 2 ("Rendezvous with Rushdie") */}
        <div className="mb-10 border-b pb-10" style={{ borderColor: 'var(--ink-rule)' }}>
          <h1
            className="font-display font-black tracking-tight leading-[0.92] text-ink mb-6"
            style={{ fontSize: 'clamp(2.8rem, 7.8vw, 6.8rem)' }}
          >
            Words that persuade. <br />
            <span className="italic font-normal font-serif text-[var(--red-pencil)]">
              Ideas that endure.
            </span>
          </h1>

          {/* Subhead in Rushdie editorial italic style (Image 2) */}
          <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl max-w-4xl leading-relaxed text-ink/90">
            A corporate communications specialist, brand strategist, and B2B copywriter bridging technical fintech complexity, regulatory fiscal mandates, and the human heart.
          </p>
        </div>

        {/* 3-Column Broadsheet Grid with Vertical Hairline Rules (Image 2 & Image 5 style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">

          {/* Column 1: Drop-Cap 'W' Column */}
          <div className="md:col-span-4 font-serif text-base sm:text-lg text-ink/90 leading-relaxed md:border-r md:pr-8 lg:pr-10" style={{ borderColor: 'var(--ink-rule)' }}>
            <span className="drop-cap-large text-ink">
              W
            </span>
            <p>
              ords are never mere decoration in high-stakes enterprise messaging. They are the structural architecture of commercial understanding. My work begins where technical jargon falters—translating complex product mechanics, payment rails, and regulatory compliance requirements into language that executives, investors, and customers readily trust.
            </p>
            <div className="mt-6 pt-4 border-t font-hand text-base text-[var(--red-pencil)]" style={{ borderColor: 'var(--ink-rule)' }}>
              ~ "In love with language, syntax, and commercial clarity."
            </div>
          </div>

          {/* Column 2: Drop-Cap 'S' Column with Red Annotations */}
          <div className="md:col-span-4 font-serif text-base sm:text-lg text-ink/90 leading-relaxed md:border-r md:pr-8 lg:pr-10" style={{ borderColor: 'var(--ink-rule)' }}>
            <span className="drop-cap-large text-[var(--red-pencil)]">
              S
            </span>
            <p>
              trategy with soul means every sentence serves a measurable purpose. Whether anchoring a <RedCircle>₦1.07 quadrillion</RedCircle> fintech bank transfer volume hook, activating a <RedCircle>12% conversion rate</RedCircle> email sequence, or crafting reflective prose on <span className="underline decoration-[var(--red-pencil)]">Abisola Writes</span>, the standard is unchanging: absolute precision over empty noise.
            </p>
            <div className="mt-6 p-4 rounded border font-mono text-xs" style={{ background: 'var(--paper-leaf)', borderColor: 'var(--ink-rule)' }}>
              <span className="text-[10px] font-bold uppercase block mb-1 text-[var(--red-pencil)]">
                EDITORIAL IMPERATIVE // 2026:
              </span>
              <span>"Turn complexity into clarity; turn clarity into revenue."</span>
            </div>
          </div>

          {/* Column 3: The Author's Editorial Plate (Image 3 & Image 5 style) */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-3.5 rounded border broadsheet-card relative">
              <div className="aspect-[4/5] rounded overflow-hidden relative border" style={{ borderColor: 'var(--ink-rule)' }}>
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin - Author Portrait"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-2 left-2 right-2 p-2.5 rounded text-[10px] font-mono border backdrop-blur-md"
                  style={{
                    background: 'rgba(255,255,255,0.92)',
                    borderColor: 'var(--ink-rule)',
                    color: '#141414',
                  }}
                >
                  <div className="flex items-center justify-between font-bold">
                    <span>PLATE I // AUTHOR</span>
                    <span style={{ color: 'var(--red-pencil)' }}>LAGOS, NG</span>
                  </div>
                  <div className="font-hand text-xs mt-0.5" style={{ color: '#141414' }}>
                    Abisola Oluwatoyin · English Language (2:1)
                  </div>
                </div>
              </div>

              <div className="mt-2.5 text-center font-hand text-sm text-[var(--red-pencil)]">
                ( author of the working proofs cataloged below )
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Actions & Verified Telemetry Ribbon */}
        <div className="pt-6 border-t flex flex-wrap items-center justify-between gap-6" style={{ borderColor: 'var(--ink-rule)' }}>
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-7 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2.5 transition-all shadow-sm"
              style={{
                background: 'var(--ink)',
                color: 'var(--paper)',
              }}
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4 text-[var(--red-pencil)]" />
            </a>

            <a
              href="https://abisolawrites.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all hover:bg-black/5"
              style={{
                borderColor: 'var(--ink-rule-strong)',
                color: 'var(--ink)',
              }}
            >
              <span>Read on Substack</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--red-pencil)]" />
            </a>
          </div>

          {/* Verified Telemetry Strip */}
          <div className="flex items-center gap-8 font-mono text-xs">
            <div className="border-r pr-8" style={{ borderColor: 'var(--ink-rule)' }}>
              <div className="font-display font-black text-2xl text-[var(--red-pencil)]">₦1.07Q</div>
              <div className="text-[10px] text-ink/60 uppercase">NIP Fintech Hook</div>
            </div>
            <div className="border-r pr-8" style={{ borderColor: 'var(--ink-rule)' }}>
              <div className="font-display font-black text-2xl text-[var(--red-pencil)]">12%</div>
              <div className="text-[10px] text-ink/60 uppercase">Conversion Rate</div>
            </div>
            <div>
              <div className="font-display font-black text-2xl text-[var(--red-pencil)]">1.4k+</div>
              <div className="text-[10px] text-ink/60 uppercase">Substack Readers</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
