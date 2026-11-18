import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Heart } from 'lucide-react';
import { MagneticButton } from './animations/MagneticButton';
import { TiltCard } from './animations/TiltCard';
import { motion } from 'framer-motion';

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
    const speed = isDeleting ? 25 : 55;

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
    <section id="home" className="relative pt-8 sm:pt-14 pb-20 sm:pb-32 overflow-hidden">
      {/* Ambient Radial Glow Lighting on Custard Silk */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#EBDDBF]/40 blur-[130px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#0D5BEB]/6 blur-[150px] pointer-events-none" />
      <div className="absolute top-[60%] left-[-10%] w-[450px] h-[450px] rounded-full bg-[#4A0E1C]/6 blur-[140px] pointer-events-none" />

      {/* Subtle Floating Sparkles */}
      <div className="absolute top-16 right-16 text-[#0D5BEB]/80 text-xl animate-sparkle pointer-events-none hidden sm:block">
        ✦
      </div>
      <div className="absolute top-48 left-12 text-[#4A0E1C]/60 text-lg animate-sparkle-delayed pointer-events-none hidden sm:block">
        ✧
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Two-Column Hero Grid: Narrative Left, 3D Centerpiece & Interactive Composition Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-7">

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full cyber-pill text-xs font-semibold tracking-wider text-[#2A050F] uppercase border border-[#4A0E1C]/14"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D5BEB] animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-[#0D5BEB]" />
              <span className="text-[#4A0E1C] font-semibold">Writer &bull; Marketing Comms &bull; Brand Storyteller</span>
              <span className="text-amber-500 font-hand text-sm normal-case font-bold">✨</span>
            </motion.div>

            {/* Main Headline (Fraunces) with Bordeaux/Sapphire Highlighter */}
            <h1 className="font-headline font-semibold text-4xl sm:text-6xl lg:text-[3.9rem] text-[#2A050F] leading-[1.14] tracking-tight">
              Bringing ideas to life through{' '}
              <span className="rose-highlighter">words, strategy</span> and storytelling.
            </h1>

            {/* Intro Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-base sm:text-lg text-[#3E131C] leading-relaxed max-w-2xl"
            >
              I bring ideas to life through writing, thoughtful messaging and purposeful communication. My work spans marketing and communications, where I develop content, shape brand messages and contribute to campaigns that help businesses communicate their value and connect with their audiences. I also explore storytelling through creative and editorial writing, bringing together a love of language and an understanding of how words inform, influence and resonate.
            </motion.p>

            {/* Live Typing Thought-Stream */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cyber-pill text-xs font-body text-[#3E131C] border border-[#4A0E1C]/14"
            >
              <span className="w-2 h-2 rounded-full bg-[#0D5BEB] shadow-[0_0_8px_#0D5BEB]" />
              <span className="font-semibold text-[#0D5BEB] font-mono uppercase text-[11px] tracking-wider">
                the writer's desk:
              </span>
              <span className="text-[#2A050F] font-medium italic">
                "{displayedText}"
              </span>
              <span className="w-1.5 h-3.5 bg-[#0D5BEB] animate-pulse" />
            </motion.div>

            {/* CTAs (Electric Sapphire 10% on primary button) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton>
                <a
                  href="#featured-work"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full sapphire-btn text-white font-semibold text-sm sm:text-base shadow-[0_6px_22px_rgba(13,91,235,0.4)] hover:shadow-[0_8px_28px_rgba(13,91,235,0.55)] transition-all"
                >
                  <span>Explore My Work</span>
                  <ArrowDown className="w-4 h-4 text-white" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="https://abisolawrites.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full cyber-pill text-[#2A050F] text-sm sm:text-base font-medium hover:text-[#0D5BEB] hover:border-[#0D5BEB]/40 transition-all border border-[#4A0E1C]/16 shadow-sm"
                >
                  <span>Read My Writing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0D5BEB]" />
                </a>
              </MagneticButton>
            </motion.div>

          </div>

          {/* Right Column: Author Composition */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full mt-4 lg:mt-0">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">

              {/* Floating Badge 1 (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-4 -left-3 px-3.5 py-1.5 rounded-full cyber-pill text-[#2A050F] text-xs font-semibold shadow-xl flex items-center gap-2 z-30 border border-[#4A0E1C]/16 animate-float-badge"
              >
                <Heart className="w-3.5 h-3.5 fill-[#942642] text-[#942642]" />
                <span className="font-headline font-semibold text-[#2A050F]">1,469+ Readers</span>
                <span className="text-[#DE93A4] text-[10px]">♡</span>
              </motion.div>

              {/* Floating Badge 2 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -top-3 -right-3 px-3.5 py-1.5 rounded-full cyber-pill text-[#0D5BEB] text-xs font-semibold shadow-xl flex items-center gap-1.5 z-30 border border-[#0D5BEB]/30 animate-float-badge-alt"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0D5BEB]" />
                <span className="font-semibold">12% Conversion</span>
                <span className="text-xs font-hand text-amber-500 font-bold">✨</span>
              </motion.div>

              {/* Card Composition */}
              <div className="relative rounded-3xl cyber-glass p-3 sm:p-5 overflow-hidden border border-[#4A0E1C]/15">

                {/* Author Information Card with 3D Tilt */}
                <TiltCard
                  glowColor="sapphire"
                  className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#4A0E1C]/14 shadow-md"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl overflow-hidden bg-[#FAF3E3] shrink-0 border border-[#4A0E1C]/15 shadow-sm">
                      <img
                        src="/abisola.svg"
                        alt="Abisola Oluwatoyin"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-headline font-semibold text-sm sm:text-base text-[#2A050F] truncate">
                        Writer &amp; Communications Specialist
                      </div>
                      <div className="font-body text-[11px] sm:text-xs text-[#6E3844] leading-snug mt-0.5 truncate font-medium">
                        Marketing · Storytelling · Editorial
                      </div>
                      <div className="font-hand text-xs text-[#0D5BEB] font-bold mt-0.5 truncate">
                        Lagos, Nigeria &bull; Available Worldwide ✨
                      </div>
                    </div>
                  </div>
                </TiltCard>

                {/* Author Portrait with Cinematic Overlay */}
                <div className="mt-3 relative rounded-2xl overflow-hidden border border-[#4A0E1C]/14 w-full aspect-[4/5] sm:aspect-[3/4] max-h-[380px] sm:max-h-[460px]">
                  <img
                    src="/abisola-hero.jpg"
                    alt="Abisola Oluwatoyin — Writer & Communications Specialist"
                    className="w-full h-full object-cover object-top filter contrast-[1.03]"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#2A050F]/80 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-2 right-2 text-center pointer-events-none">
                    <span className="font-hand text-[#FAF3E3] text-xs sm:text-sm font-bold drop-shadow">Writer · Communications · Storytelling ♡</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* 3 Metric Summary Cards with Interactive 3D Tilt, Lacquer Borders & Sapphire Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#4A0E1C]/12">
          <TiltCard
            glowColor="sapphire"
            className="p-6 rounded-3xl cyber-glass border border-[#4A0E1C]/14"
          >
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#0D5BEB] tracking-tight">
                12%
              </div>
              <span className="text-xs font-hand text-amber-600 font-bold">exceeded benchmark ✨</span>
            </div>
            <div className="font-body font-semibold text-base text-[#2A050F] mt-2">
              Lead-to-Active Conversion Rate
            </div>
            <div className="font-body text-xs text-[#6E3844] mt-1">
              Exceeded 5% benchmark by 240% during fintech campaign
            </div>
          </TiltCard>

          <TiltCard
            glowColor="bordeaux"
            className="p-6 rounded-3xl cyber-glass border border-[#4A0E1C]/14"
          >
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#4A0E1C] tracking-tight">
                28,100+
              </div>
              <span className="text-xs font-hand text-[#942642] font-bold">substack archive ♡</span>
            </div>
            <div className="font-body font-semibold text-base text-[#2A050F] mt-2">
              Views on Abisola Writes
            </div>
            <div className="font-body text-xs text-[#6E3844] mt-1">
              Over 1,469+ organic global subscribers on Substack
            </div>
          </TiltCard>

          <TiltCard
            glowColor="sapphire"
            className="p-6 rounded-3xl cyber-glass border border-[#4A0E1C]/14"
          >
            <div className="flex items-center justify-between">
              <div className="font-headline font-bold text-3xl sm:text-4xl text-[#0D5BEB] tracking-tight">
                823+
              </div>
              <span className="text-xs font-hand text-[#0D5BEB] font-bold">live attendance ✦</span>
            </div>
            <div className="font-body font-semibold text-base text-[#2A050F] mt-2">
              Webinar Registrations
            </div>
            <div className="font-body text-xs text-[#6E3844] mt-1">
              527+ attendees across hospitality &amp; tax events
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
};
