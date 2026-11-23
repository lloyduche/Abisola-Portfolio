import React from 'react';
import { GraduationCap, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-[#F0E7DB]/45 border-y border-[#4A0E1C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A0E1C] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>About Me</span>
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#4A0E1C] tracking-tight">
            Language, structure, and the power of deliberate storytelling.
          </h2>
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: The 4 Core Paragraphs from the Specification */}
          <div className="lg:col-span-8 space-y-5 sm:space-y-6 font-body text-base sm:text-lg text-[#38272D]/90 leading-relaxed">
            <p>
              My background in English Language has shaped how I approach writing, storytelling and communication. It has given me an appreciation for language, structure and meaning, and how the right words can shape understanding and influence how a message is received.
            </p>

            <p>
              Through my experience in marketing and corporate communications, I have brought this foundation into a business context, developing content, shaping brand messages and contributing to campaigns and communications designed around specific audiences and objectives.
            </p>

            <p>
              I understand that effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to communicate information in a way that is relevant, engaging and easy to understand.
            </p>

            <p>
              Whether I am working on marketing content, email campaigns, corporate communications or creative writing, I approach each piece with attention to language, context and the message it needs to convey.
            </p>

            {/* Pull Quote Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#4A0E1C]/15 shadow-sm mt-6 sm:mt-8">
              <div className="font-headline italic text-base sm:text-xl text-[#4A0E1C] leading-snug">
                "Effective communication goes beyond putting words together. It requires a clear sense of purpose, consistency in brand voice, and relevance."
              </div>
            </div>

            {/* ── Editorial Mockup: Substack Snapshot ── */}
            <div
              className="mt-6 sm:mt-8 rounded-2xl overflow-hidden border border-[#4A0E1C]/10 shadow-md group bg-white"
            >
              {/* Browser chrome bar */}
              <div
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#4A0E1C]/10 bg-[#FAF4EC]"
              >
                {/* Dots */}
                <span className="w-2.5 h-2.5 rounded-full bg-[#4A0E1C]/25 block shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D995A9]/40 block shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5B86B]/50 block shrink-0" />
                {/* URL bar */}
                <div className="flex-1 min-w-0 ml-1.5 sm:ml-2 px-3 py-1 rounded-full text-xs font-body text-[#38272D]/60 bg-white border border-[#4A0E1C]/10 truncate">
                  abisolawrites.substack.com
                </div>
                <a
                  href="https://abisolawrites.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 flex items-center gap-1 text-xs font-semibold font-body text-[#4A0E1C] hover:underline shrink-0"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Visit</span>
                </a>
              </div>

              {/* Screenshot */}
              <div className="relative overflow-hidden max-h-[240px] sm:max-h-[360px]">
                <img
                  src="/substack-snapshot.png"
                  alt="Notes from Abisola — Substack publication"
                  className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02] block"
                />
                {/* Fade overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 pointer-events-none"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(250,244,236,0.95))' }}
                />
                {/* Caption pill */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold font-body shadow-sm bg-[#4A0E1C] text-white">
                    ✍️ Notes from Abisola · Substack
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 sm:px-5 py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#4A0E1C]/08 bg-[#FAF4EC]">
                <div>
                  <p className="font-headline font-semibold text-sm text-[#4A0E1C]">Notes from Abisola</p>
                  <p className="font-body text-xs text-[#38272D]/60 mt-0.5">Essays, fiction &amp; personal writing · From my heart to yours.</p>
                </div>
                <a
                  href="https://abisolawrites.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full text-xs font-semibold font-body border border-[#4A0E1C]/20 text-[#4A0E1C] hover:bg-[#4A0E1C] hover:text-white transition-all no-underline w-full sm:w-auto"
                >
                  Read <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Credentials */}
          <div className="lg:col-span-4 space-y-6">

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#4A0E1C]/10 shadow-sm space-y-3 editorial-card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#4A0E1C]/10 flex items-center justify-center text-[#4A0E1C]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-hand text-sm text-[#D995A9] font-bold">~ english language ♡</span>
              </div>
              <h3 className="font-headline font-semibold text-xl text-[#4A0E1C]">
                Academic Background
              </h3>
              <div className="font-body text-sm font-semibold text-[#38272D]">
                B.A. English Language
              </div>
              <div className="font-body text-xs text-[#38272D]/75">
                Kwara State University &bull; Second Class Upper Division
              </div>
              <p className="font-body text-xs text-[#38272D]/70 leading-relaxed pt-1">
                Formative training in syntax, linguistic analysis, literary rhetoric, and clear composition.
              </p>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#4A0E1C]/10 shadow-sm space-y-3 editorial-card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#4A0E1C]/10 flex items-center justify-center text-[#4A0E1C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-hand text-sm text-[#D995A9] font-bold">~ lagos &amp; remote ✨</span>
              </div>
              <h3 className="font-headline font-semibold text-xl text-[#4A0E1C]">
                Location &amp; Availability
              </h3>
              <div className="font-body text-sm font-semibold text-[#38272D]">
                Lagos, Nigeria
              </div>
              <p className="font-body text-xs text-[#38272D]/70 leading-relaxed">
                Available for full-time corporate communications appointments, marketing content contracts, and editorial commissions globally.
              </p>
            </div>

            {/* Creative Duality Card */}
            <div className="p-6 rounded-2xl bg-[#4A0E1C] text-white shadow-md space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#E5B86B] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>The Writing Balance</span>
              </div>
              <h4 className="font-headline font-semibold text-xl">
                Commercial Strategy + Literary Honesty
              </h4>
              <p className="font-body text-xs text-white/85 leading-relaxed">
                Bringing the rigour of conversion copywriting to business communications, and the emotional resonance of fiction to brand storytelling.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
