import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ConfettiBow } from './ConfettiBow';
import { Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const renderBouncyWord = (word: string, isAccent = false) => {
    return (
      <span className="inline-flex whitespace-nowrap">
        {word.split('').map((char, index) => (
          <span
            key={index}
            className={`bouncy-char ${isAccent ? 'text-theme-accent' : 'text-theme-ink'}`}
          >
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="relative px-4 sm:px-8 md:px-12 pt-6 sm:pt-10 pb-16 md:pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Handwritten greeting badge */}
          <div className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl hand text-theme-accent transform -rotate-2 origin-left mb-2 select-none">
            <Sparkles className="w-5 h-5 text-theme-accent inline-block animate-pulse" />
            <span>{HERO_DATA.greeting}</span>
          </div>

          {/* Name - Formatted to wrap properly and scaled gracefully */}
          <h1 className="font-display font-bold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl leading-[1.05] sm:leading-[1.0] my-3 sm:my-5">
            <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-5">
              {renderBouncyWord(HERO_DATA.firstName, false)}
              {renderBouncyWord(HERO_DATA.lastName, true)}
            </div>
          </h1>

          {/* Lede / Headline */}
          <p className="text-lg sm:text-xl md:text-2xl text-theme-ink/90 leading-relaxed max-w-2xl font-normal mt-2">
            <strong className="font-semibold text-theme-ink block mb-2">
              {HERO_DATA.title}
            </strong>
            {HERO_DATA.lede}
          </p>

          {/* Roles Pills */}
          <div className="flex flex-wrap gap-2.5 my-6 sm:my-8 max-w-2xl">
            {HERO_DATA.roles.map((role, idx) => (
              <span
                key={role}
                className={`px-4 py-2 rounded-full border-2 border-theme-border text-xs sm:text-sm font-semibold transition-transform hover:-translate-y-1 hover:rotate-[-1deg] ${
                  idx === 3
                    ? 'bg-theme-ribbon text-theme-ink'
                    : 'bg-theme-card text-theme-ink'
                }`}
              >
                {role}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-7 py-3.5 rounded-full bg-theme-accent text-white font-bold text-base sm:text-lg border-2 border-theme-border shadow-[4px_4px_0_var(--color-border)] hover:shadow-[7px_7px_0_var(--color-border)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
            >
              <span>Explore My Work</span>
              <span>🎀</span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-full bg-transparent hover:bg-theme-card text-theme-ink font-semibold text-base sm:text-lg border-2 border-theme-border transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Column: Polaroid Stage & Stickers */}
        <div className="lg:col-span-5 relative flex justify-center py-6 sm:py-10">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
            {/* Polaroid Frame */}
            <div className="bg-white border-2 sm:border-3 border-theme-border p-4 pb-14 rounded-2xl shadow-[12px_12px_0_var(--color-ribbon)] transform rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border-2 border-dashed border-theme-border bg-theme-ribbon/40 flex items-center justify-center">
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin - Writer and Communications Specialist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none animate-shine" />
              </div>
              <p className="hand text-center text-xl sm:text-2xl text-theme-ink mt-3">
                words, strategy &amp; storytelling &lt;3
              </p>
            </div>

            {/* Interactive Big Bow */}
            <div className="absolute -top-6 -left-6 z-20 animate-wiggle">
              <ConfettiBow size="big" title="Click for confetti!" />
            </div>

            {/* Floating Stickers */}
            <div className="absolute -bottom-4 -left-6 bg-theme-secondary text-theme-ink px-4 py-2 rounded-2xl border-2 border-theme-border font-display text-sm sm:text-base font-bold shadow-md transform -rotate-6 animate-drift">
              {HERO_DATA.statsStickers[0].label}
            </div>

            <div className="absolute top-1/2 -right-6 bg-theme-card text-theme-ink px-3.5 py-1.5 rounded-full border-2 border-theme-border text-xs sm:text-sm font-bold shadow-md transform rotate-6">
              {HERO_DATA.statsStickers[1].label}
            </div>

            <div className="absolute -bottom-6 right-2 w-20 h-20 rounded-full bg-theme-accent text-white border-2 border-theme-border flex items-center justify-center text-center hand text-sm font-bold leading-tight transform rotate-12 shadow-md">
              words with
              <br />
              purpose
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
