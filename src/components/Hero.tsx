import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ConfettiBow } from './ConfettiBow';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative px-4 sm:px-8 md:px-12 pt-10 pb-20 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[calc(100vh-120px)]">

        {/* ── LEFT COLUMN ── */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Folio / edition stamp */}
          <div
            className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            style={{ color: 'var(--ink-muted)' }}
          >
            <span
              className="w-6 h-[2px] inline-block"
              style={{ background: 'var(--accent)' }}
            />
            Vol. 01 · Issue No. 001 · 2025–2026
            <span
              className="w-6 h-[2px] inline-block"
              style={{ background: 'var(--accent)' }}
            />
          </div>

          {/* Category label pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Writer', 'Communications', 'Brand Strategist'].map((label) => (
              <span
                key={label}
                className="px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full"
                style={{
                  border: '1.5px solid var(--border)',
                  background: 'var(--bg-card)',
                  color: 'var(--ink)',
                }}
              >
                {label}
              </span>
            ))}
          </div>

          {/* Giant Playfair Display headline */}
          <h1 className="font-serif leading-[1.05] mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            <span className="block" style={{ color: 'var(--ink)' }}>Words that</span>
            <span className="block italic" style={{ color: 'var(--accent)' }}>Move People.</span>
          </h1>

          {/* Pull quote */}
          <div
            className="inline-block px-5 py-4 rounded-2xl mb-8 max-w-sm"
            style={{
              borderLeft: '4px solid var(--accent)',
              background: 'var(--bg-card)',
              border: '2px solid var(--border)',
              borderLeftWidth: '4px',
              borderLeftColor: 'var(--accent)',
            }}
          >
            <p className="font-serif text-xl font-bold italic" style={{ color: 'var(--ink)' }}>
              "Ideas that stay."
            </p>
            <p className="text-xs font-bold uppercase tracking-wider mt-1" style={{ color: 'var(--ink-muted)' }}>
              — The strategy behind every word
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full font-bold text-base sm:text-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
              style={{
                background: 'var(--accent)',
                border: '2px solid var(--border)',
                boxShadow: '4px 4px 0 var(--border)',
              }}
            >
              Explore My Work →
            </a>
            <a
              href="https://abisolawrites.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full font-semibold text-base sm:text-lg transition-all hover:opacity-80"
              style={{
                border: '2px solid var(--border)',
                color: 'var(--ink)',
                background: 'transparent',
              }}
            >
              Read My Writing ↗
            </a>
          </div>

          {/* Stat callouts */}
          <div className="flex flex-wrap gap-6">
            {HERO_DATA.statsStickers.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="font-serif font-black leading-none"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--accent)' }}
                >
                  {stat.label.split(' ')[0]}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-wide mt-1"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="lg:col-span-5 relative flex justify-center py-6 sm:py-10">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">

            {/* Interactive ConfettiBow */}
            <div className="absolute -top-6 -left-6 z-20 animate-wiggle">
              <ConfettiBow size="big" title="Click for confetti!" />
            </div>

            {/* Polaroid frame */}
            <div
              className="p-4 pb-14 rounded-2xl transform rotate-3 hover:rotate-0 transition-all duration-300"
              style={{
                background: '#fff',
                border: '2.5px solid var(--border)',
                boxShadow: '12px 12px 0 var(--ribbon)',
              }}
            >
              <div
                className="relative aspect-[4/5] rounded-xl overflow-hidden flex items-center justify-center"
                style={{
                  border: '2px dashed var(--border)',
                  background: 'var(--ribbon)',
                }}
              >
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin — Writer and Communications Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="font-hand text-center text-xl mt-3"
                style={{ color: 'var(--ink)' }}
              >
                words, strategy & storytelling ♡
              </p>
            </div>

            {/* Floating role sticker */}
            <div
              className="absolute -bottom-4 -left-6 px-4 py-2 rounded-2xl font-display text-sm font-bold shadow-md transform -rotate-6 animate-drift"
              style={{
                background: 'var(--accent2)',
                color: 'var(--ink)',
                border: '2px solid var(--border)',
              }}
            >
              {HERO_DATA.roles[0]}
            </div>

            {/* Circular "words with purpose" badge */}
            <div
              className="absolute -bottom-6 right-2 w-20 h-20 rounded-full flex items-center justify-center text-center font-hand text-sm font-bold leading-tight transform rotate-12 shadow-md"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: '2px solid var(--border)',
              }}
            >
              words with
              <br />
              purpose
            </div>
          </div>

          {/* Running ticker strip */}
          <div
            className="absolute bottom-0 left-0 right-0 overflow-hidden py-2 rounded-full"
            style={{
              background: 'var(--bg-dark)',
              color: '#fff',
            }}
          >
            <div className="flex gap-8 whitespace-nowrap animate-marquee text-[11px] font-bold uppercase tracking-widest">
              {[...HERO_DATA.roles, ...HERO_DATA.roles].map((role, i) => (
                <span key={i} className="inline-flex items-center gap-4">
                  <span>{role}</span>
                  <span style={{ color: 'var(--accent)' }}>✦</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
