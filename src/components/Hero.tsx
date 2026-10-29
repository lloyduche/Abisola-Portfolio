import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Two-Column Hero Grid: Narrative Left, Editorial Portrait Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#72213A]/10 text-[#72213A] text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#72213A]" />
              <span>Writer &bull; Marketing, Communications &bull; Storyteller</span>
            </div>

            {/* Main Headline (Fraunces) */}
            <h1 className="font-headline font-semibold text-4xl sm:text-6xl lg:text-[4rem] text-[#72213A] leading-[1.12] tracking-tight">
              Bringing ideas to life through words, strategy and storytelling.
            </h1>

            {/* Intro Paragraph (DM Sans) */}
            <p className="font-body text-lg sm:text-xl text-[#38272D]/90 leading-relaxed max-w-2xl">
              I bring ideas to life through writing, thoughtful messaging and purposeful communication. My work spans marketing and communications, where I develop content, shape brand messages and contribute to campaigns that help businesses communicate their value and connect with their audiences. I also explore storytelling through creative and editorial writing, bringing together a love of language and an understanding of how words inform, influence and resonate.
            </p>

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
                <ArrowUpRight className="w-4 h-4 text-[#72213A]" />
              </a>
            </div>

          </div>

          {/* Right Portrait & Key Metrics Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">

            {/* Portrait Frame */}
            <div className="relative w-full max-w-md p-3 sm:p-4 rounded-3xl bg-white border border-[#72213A]/10 shadow-xl">
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

        {/* 3 Metric Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#72213A]/10">
          <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm hover:shadow transition-shadow">
            <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
              12%
            </div>
            <div className="font-body font-semibold text-base text-[#38272D] mt-1">
              Lead-to-Active Conversion Rate
            </div>
            <div className="font-body text-xs text-[#38272D]/70 mt-1">
              Exceeded 5% benchmark by 240% during fintech campaign
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm hover:shadow transition-shadow">
            <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
              28,100+
            </div>
            <div className="font-body font-semibold text-base text-[#38272D] mt-1">
              Views on Abisola Writes
            </div>
            <div className="font-body text-xs text-[#38272D]/70 mt-1">
              Over 1,469+ organic global subscribers on Substack
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm hover:shadow transition-shadow">
            <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
              823+
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
