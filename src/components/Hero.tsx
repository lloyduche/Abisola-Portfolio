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
    <section id="home" className="relative pt-10 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
      {/* Decorative ambient sparkles */}
      <div className="absolute top-12 right-12 text-[#E5B86B] text-xl animate-sparkle pointer-events-none hidden sm:block">
        ✦
      </div>
      <div className="absolute top-48 left-8 text-[#D995A9] text-lg animate-sparkle-delayed pointer-events-none hidden sm:block">
        ✦
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Two-Column Hero Grid: Narrative Left, Visual Composition & Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-7">

            {/* Girly & Professional Pill Badge with Sparkle */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D995A9]/40 text-[#4A0E1C] text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#E5B86B] animate-spin" style={{ animationDuration: '8s' }} />
              <span>Writer &bull; Marketing Comms &bull; Brand Storyteller</span>
              <span className="text-[#D995A9] font-hand text-sm normal-case font-bold">✨</span>
            </div>

            {/* Main Headline (Fraunces) with Soft Rose Highlighter */}
            <h1 className="font-headline font-semibold text-4xl sm:text-6xl lg:text-[3.9rem] text-[#4A0E1C] leading-[1.14] tracking-tight">
              Bringing ideas to life through{' '}
              <span className="rose-highlighter">words, strategy</span> and storytelling.
            </h1>

            {/* Intro Paragraph (DM Sans) */}
            <p className="font-body text-lg sm:text-xl text-[#38272D]/90 leading-relaxed max-w-2xl">
              I bring ideas to life through writing, thoughtful messaging and purposeful communication. My work spans marketing and communications, where I develop content, shape brand messages and contribute to campaigns that help businesses communicate their value and connect with their audiences. I also explore storytelling through creative and editorial writing, bringing together a love of language and an understanding of how words inform, influence and resonate.
            </p>

            {/* Live Typing Thought-Stream */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white border border-[#4A0E1C]/10 text-xs font-body text-[#38272D] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#E5B86B] animate-ping" />
              <span className="font-semibold text-[#4A0E1C]">the writer's desk:</span>
              <span className="font-hand text-base text-[#4A0E1C] italic font-bold">
                "{displayedText}"
              </span>
              <span className="w-1.5 h-3.5 bg-[#D995A9] animate-pulse" />
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#featured-work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4A0E1C] text-white text-base font-medium hover:bg-[#340611] shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#E5B86B]" />
              </a>

              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-[#4A0E1C]/20 text-[#4A0E1C] text-base font-medium hover:bg-[#FAF4EC] hover:border-[#4A0E1C]/40 shadow-sm transition-all"
              >
                <span>Read My Writing</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Composition Featuring Selected Work Samples + Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">

            {/* Layered Visual Composition Box */}
            <div className="relative w-full max-w-md">

              {/* Floating Badge 1 (Top Left): Heart & Readership */}
              <div className="absolute -top-4 -left-3 sm:-left-4 px-3.5 py-1.5 rounded-full bg-[#4A0E1C] text-white text-xs font-medium shadow-lg animate-float-badge flex items-center gap-1.5 z-30 border border-[#E5B86B]/30">
                <Heart className="w-3.5 h-3.5 fill-[#D995A9] text-[#D995A9]" />
                <span className="font-headline text-xs font-semibold">1,469+ Readers</span>
                <span className="text-[#E5B86B] text-[10px]">♡</span>
              </div>

              {/* Floating Badge 2 (Top Right): Sparkles & Verified Conversion */}
              <div className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-1.5 rounded-full bg-white text-[#4A0E1C] text-xs font-semibold shadow-lg animate-float-badge-alt flex items-center gap-1.5 z-30 border border-[#D995A9]">
                <Sparkles className="w-3.5 h-3.5 text-[#E5B86B]" />
                <span>12% Conversion</span>
                <span className="text-xs font-hand text-[#4A0E1C] font-bold">✨</span>
              </div>

              {/* Main Visual Composition Container */}
              <div className="p-4 sm:p-5 rounded-3xl bg-white border border-[#4A0E1C]/15 shadow-xl space-y-4">

                {/* Top Section: Author Portrait + Micro Bio */}
                <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#FAF4EC] border border-[#4A0E1C]/10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-[#F0E7DB] shrink-0 border border-[#4A0E1C]/10 shadow-sm">
                    <img
                      src="/abisola.svg"
                      alt="Abisola Oluwatoyin"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-headline font-semibold text-base sm:text-lg text-[#4A0E1C]">
                      Writer &amp; Communications Specialist
                    </div>
                    <div className="font-body text-xs text-[#38272D]/75 leading-snug mt-0.5">
                      Marketing · Storytelling · Editorial
                    </div>
                    <div className="font-hand text-xs text-[#D995A9] font-bold mt-0.5">
                      Lagos, Nigeria &bull; Available Worldwide ✨
                    </div>
                  </div>
                </div>

                {/* Full-Width Portrait Photo replacing Curated Work Previews */}
                <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#4A0E1C]/10" style={{ aspectRatio: '3/4' }}>
                  <img
                    src="/abisola-hero.jpg"
                    alt="Abisola Oluwatoyin — Writer & Communications Specialist"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle gradient overlay at bottom for polish */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-16"
                    style={{ background: 'linear-gradient(to top, rgba(72,33,63,0.45), transparent)' }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center">
                    <span className="font-hand text-white text-sm font-bold drop-shadow">Writer · Communications · Storytelling ♡</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* 3 Metric Summary Cards with Soft Lift on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#4A0E1C]/10">
          <div className="p-6 rounded-2xl bg-white border border-[#4A0E1C]/10 shadow-sm editorial-card">
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#4A0E1C]">
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

          <div className="p-6 rounded-2xl bg-white border border-[#4A0E1C]/10 shadow-sm editorial-card">
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#4A0E1C]">
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

          <div className="p-6 rounded-2xl bg-white border border-[#4A0E1C]/10 shadow-sm editorial-card">
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#4A0E1C]">
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
