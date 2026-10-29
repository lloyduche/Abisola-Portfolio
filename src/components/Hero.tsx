import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const writingThoughts = [
    'crafting high-converting email copy...',
    'framing fintech payment rails in plain english...',
    'exploring love & identity on Abisola Writes...',
    'turning regulatory compliance into qualified leads...',
    'finding the exact right word for every sentence...',
  ];

  const [thoughtIndex, setThoughtIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = writingThoughts[thoughtIndex];
    const speed = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setThoughtIndex((prev) => (prev + 1) % writingThoughts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, thoughtIndex]);

  return (
    <section id="home" className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
      {/* Decorative ambient sparkles */}
      <div className="absolute top-12 right-12 text-[#E5B86B] text-xl animate-sparkle pointer-events-none hidden sm:block">
        ✦
      </div>
      <div className="absolute top-48 left-8 text-[#D995A9] text-lg animate-sparkle-delayed pointer-events-none hidden sm:block">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Two-Column Hero Grid: Narrative Left, Editorial Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-7">

            {/* Girly & Professional Pill Badge with Sparkle */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D995A9]/40 text-[#72213A] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B86B] animate-spin" style={{ animationDuration: '8s' }} />
              <span>Writer &bull; Marketing Comms &bull; Brand Storyteller</span>
              <span className="text-[#D995A9] font-hand text-sm normal-case font-bold">✨</span>
            </div>

            {/* Main Headline (Fraunces) with Soft Rose Highlighter */}
            <h1 className="font-headline font-semibold text-4xl sm:text-6xl lg:text-[4rem] text-[#72213A] leading-[1.14] tracking-tight">
              Bringing ideas to life through{' '}
              <span className="rose-highlighter">words, strategy</span> and storytelling.
            </h1>

            {/* Intro Paragraph (DM Sans) */}
            <p className="font-body text-lg sm:text-xl text-[#38272D]/90 leading-relaxed max-w-2xl">
              I bring ideas to life through writing, thoughtful messaging and purposeful communication. My work spans marketing and communications, where I develop content, shape brand messages and contribute to campaigns that help businesses communicate their value and connect with their audiences. I also explore storytelling through creative and editorial writing, bringing together a love of language and an understanding of how words inform, influence and resonate.
            </p>

            {/* Live Typing Thought-Stream (Directly aligns with the writing craft) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#72213A]/10 text-xs font-body text-[#38272D] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E5B86B] animate-ping" />
              <span className="font-semibold text-[#72213A]">the writer's desk:</span>
              <span className="font-hand text-base text-[#72213A] italic font-bold">
                "{displayedText}"
              </span>
              <span className="w-1.5 h-3.5 bg-[#D995A9] animate-pulse" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#featured-work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#72213A] text-white text-base font-medium hover:bg-[#54172A] shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#E5B86B]" />
              </a>

              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#72213A]/20 text-[#72213A] text-base font-medium hover:bg-[#FAF4EC] hover:border-[#72213A]/40 shadow-sm transition-all"
              >
                <span>Read My Writing</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            </div>

          </div>

          {/* Right Portrait Column with Floating Chic Badges */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">

            {/* Portrait Frame Container */}
            <div className="relative w-full max-w-md p-3 sm:p-4 rounded-3xl bg-white border border-[#72213A]/10 shadow-xl">

              {/* Floating Chic Badge 1 (Top Right) */}
              <div className="absolute -top-4 -right-3 sm:-right-4 px-3.5 py-1.5 rounded-full bg-[#72213A] text-white text-xs font-medium shadow-lg animate-float-badge flex items-center gap-1.5 z-20 border border-[#E5B86B]/30">
                <Heart className="w-3.5 h-3.5 fill-[#D995A9] text-[#D995A9]" />
                <span className="font-headline text-xs font-semibold">1,469+ Readers</span>
                <span className="text-[#E5B86B] text-[10px]">♡</span>
              </div>

              {/* Floating Chic Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-4 -left-3 sm:-left-4 px-3.5 py-1.5 rounded-full bg-white text-[#72213A] text-xs font-semibold shadow-lg animate-float-badge-alt flex items-center gap-1.5 z-20 border border-[#D995A9]">
                <Sparkles className="w-3.5 h-3.5 text-[#E5B86B]" />
                <span>12% Conversion Rate</span>
                <span className="text-xs font-hand text-[#72213A] font-bold">✨</span>
              </div>

              {/* Photograph */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F0E7DB]">
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caption Tag */}
              <div className="pt-3 pb-1 text-center">
                <div className="font-headline font-semibold text-lg text-[#72213A]">
                  Abisola Oluwatoyin
                </div>
                <div className="font-body text-xs text-[#38272D]/75">
                  Lagos, Nigeria &bull; Available for Global Engagements
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Metric Summary Cards with Soft Lift on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#72213A]/10">
          <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm editorial-card">
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
                12%
              </div>
              <span className="text-xs font-hand text-[#D995A9] font-bold">exceeded benchmark ✨</span>
            </div>
            <div className="font-body font-semibold text-base text-[#38272D] mt-1">
              Lead-to-Active Conversion Rate
            </div>
            <div className="font-body text-xs text-[#38272D]/70 mt-1">
              Exceeded 5% benchmark by 240% during fintech campaign
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm editorial-card">
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
                28,100+
              </div>
              <span className="text-xs font-hand text-[#D995A9] font-bold">substack archive ♡</span>
            </div>
            <div className="font-body font-semibold text-base text-[#38272D] mt-1">
              Views on Abisola Writes
            </div>
            <div className="font-body text-xs text-[#38272D]/70 mt-1">
              Over 1,469+ organic global subscribers on Substack
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm editorial-card">
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
                823+
              </div>
              <span className="text-xs font-hand text-[#D995A9] font-bold">live attendance ✦</span>
            </div>
            <div className="font-body font-semibold text-base text-[#38272D] mt-1">
              Webinar Registrations
            </div>
            <div className="font-body text-xs text-[#38272D]/70 mt-1">
              527+ attendees across hospitality &amp; tax events
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
