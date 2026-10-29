import React from 'react';
import { RedCircle, RedWavyStrike, RedArrow, EditorialStamp } from './ManuscriptMarks';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-10 sm:pt-16 pb-20 lg:pb-32 border-b border-[var(--rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Top Folio Header */}
        <div className="flex items-center justify-between pb-3 mb-10 border-b border-[var(--rule)] text-xs font-mono tracking-widest uppercase text-[var(--ink-secondary)]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--red-pencil)]">&para; LEAD ARTICLE</span>
            <span>/</span>
            <span>VOL. XXVI &bull; BROADSHEET OPENING</span>
          </div>

          <div className="flex items-center gap-3">
            <EditorialStamp text="approved text" />
          </div>
        </div>

        {/* Editorial Correction Marker (Image 1 & Image 4 style) */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="font-hand text-base sm:text-lg text-[var(--red-pencil)]">
            ( ¿cómo articular el verdadero valor comercial? )
          </span>
          <RedArrow direction="right" />
          <div className="font-mono text-xs text-[var(--ink-secondary)]">
            <RedWavyStrike>Every company has something to say</RedWavyStrike>
            <span className="font-hand text-sm ml-2 font-bold text-[var(--red-pencil)]">
              ^ [stet: strike the generic cliché. lead with conviction]
            </span>
          </div>
        </div>

        {/* Monumental Headline Modeled on Image 2 ("Rendezvous with Rushdie") - NO BOXES */}
        <div className="mb-12 border-b border-[var(--rule)] pb-12">
          <h1
            className="font-display font-black tracking-tight leading-[0.88] text-[var(--ink)] mb-8"
            style={{ fontSize: 'clamp(3rem, 8.8vw, 7.8rem)' }}
          >
            Words that persuade. <br />
            <span className="italic font-normal font-serif text-[var(--red-pencil)]">
              Ideas that endure.
            </span>
          </h1>

          {/* Subhead in Rushdie editorial italic style (Image 2) */}
          <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl max-w-5xl leading-relaxed text-[var(--ink)]/90">
            A corporate communications specialist, brand strategist, and B2B copywriter bridging technical fintech complexity, regulatory fiscal mandates, and the human heart.
          </p>
        </div>

        {/* 3-Column Broadsheet Grid with Vertical Hairline Rules (Image 2 style) - NO BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">

          {/* Column 1: Drop-Cap 'W' Column */}
          <div className="md:col-span-4 font-serif text-lg text-[var(--ink)]/90 leading-relaxed md:border-r md:border-[var(--rule)] md:pr-10">
            <span className="drop-cap-rushdie text-[var(--ink)]">
              W
            </span>
            <p className="mb-4">
              ords are never mere decoration in high-stakes enterprise messaging. They are the structural architecture of commercial understanding. My work begins where technical jargon falters—translating complex product mechanics, payment rails, and regulatory compliance mandates into language that executives, investors, and customers readily trust.
            </p>
            <p>
              From drafting executive narratives to orchestrating conversion campaigns, every line is crafted with linguistic discipline and commercial focus.
            </p>
            <div className="mt-8 pt-4 border-t border-[var(--rule)] font-hand text-base text-[var(--red-pencil)]">
              ~ "In love with language, syntax, and commercial clarity."
            </div>
          </div>

          {/* Column 2: Drop-Cap 'S' Column with Red Annotations */}
          <div className="md:col-span-4 font-serif text-lg text-[var(--ink)]/90 leading-relaxed md:border-r md:border-[var(--rule)] md:pr-10">
            <span className="drop-cap-red">
              S
            </span>
            <p className="mb-4">
              trategy with soul means every sentence serves a measurable purpose. Whether anchoring a <RedCircle>₦1.07 quadrillion</RedCircle> fintech bank transfer volume hook, activating a <RedCircle>12% conversion rate</RedCircle> email sequence, or crafting cultural essays on <span className="underline decoration-[var(--red-pencil)]">Abisola Writes</span>, the standard is unchanging: absolute precision over empty noise.
            </p>
            <p>
              High-value communications require knowing what to emphasize and what to excise with ruthless editorial clarity.
            </p>
            <div className="mt-8 pt-4 border-t border-[var(--rule)] font-mono text-xs text-[var(--ink-secondary)]">
              <span className="text-[10px] font-bold uppercase block mb-1 text-[var(--red-pencil)]">
                EDITORIAL VERDICT // 2026:
              </span>
              <span>"Turn complexity into clarity; turn clarity into revenue."</span>
            </div>
          </div>

          {/* Column 3: The Author's Editorial Plate & Verified Numbers */}
          <div className="md:col-span-4 space-y-8">
            {/* Author Portrait Plate (Clean border, no box cards) */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-[var(--rule)]">
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin - Author Portrait"
                  className="w-full h-full object-cover filter grayscale contrast-105"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between text-xs font-mono text-[var(--ink-secondary)]">
                <span className="font-bold text-[var(--ink)]">PLATE I &bull; THE AUTHOR</span>
                <span>LAGOS, NIGERIA</span>
              </div>
              <p className="font-serif italic text-sm text-[var(--ink)]/80 mt-1">
                Abisola Oluwatoyin &bull; B.A. English Language (2:1)
              </p>
            </div>

            {/* Verified Broadsheet Telemetry (NO BOXES, clean typographic list) */}
            <div className="pt-6 border-t border-[var(--rule)] space-y-4 font-serif">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--red-pencil)]">
                VERIFIED OUTCOMES
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--rule)] pb-2">
                <span className="text-base text-[var(--ink)]">Fintech Transaction Hook</span>
                <span className="font-display font-black text-2xl text-[var(--red-pencil)]">₦1.07Q</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--rule)] pb-2">
                <span className="text-base text-[var(--ink)]">Lead-to-Active Rate (Redtech)</span>
                <span className="font-display font-black text-2xl text-[var(--red-pencil)]">12%</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[var(--rule)] pb-2">
                <span className="text-base text-[var(--ink)]">Enterprise Webinar Attendees</span>
                <span className="font-display font-black text-2xl text-[var(--red-pencil)]">823+</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-base text-[var(--ink)]">Substack Publication Reads</span>
                <span className="font-display font-black text-2xl text-[var(--red-pencil)]">28k+</span>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Editorial Actions (NO BUTTON BOXES) */}
        <div className="pt-8 border-t border-[var(--rule)] flex flex-wrap items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-8">
            <a
              href="#work"
              className="flex items-center gap-2 font-bold tracking-wider uppercase text-[var(--ink)] hover:text-[var(--red-pencil)] transition-colors"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-4 h-4 text-[var(--red-pencil)]" />
            </a>

            <a
              href="https://abisolawrites.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold tracking-wider uppercase text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
            >
              <span>Read on Substack</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--red-pencil)]" />
            </a>
          </div>

          <div className="font-serif italic text-base text-[var(--ink-secondary)]">
            "words with intent, strategy with soul"
          </div>
        </div>

      </div>
    </section>
  );
};
