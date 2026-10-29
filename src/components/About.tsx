import React from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F0E7DB]/45 border-y border-[#72213A]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#72213A] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>About Me</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#72213A] tracking-tight">
            Language, structure, and the power of deliberate storytelling.
          </h2>
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: The 4 Core Paragraphs from the Specification */}
          <div className="lg:col-span-8 space-y-6 font-body text-lg text-[#38272D]/90 leading-relaxed">
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
            <div className="p-6 rounded-2xl bg-white border border-[#72213A]/15 shadow-sm mt-8">
              <div className="font-headline italic text-xl text-[#72213A] leading-snug">
                "Effective communication goes beyond putting words together. It requires a clear sense of purpose, consistency in brand voice, and relevance."
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Credentials */}
          <div className="lg:col-span-4 space-y-6">

            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm space-y-3 editorial-card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#72213A]/10 flex items-center justify-center text-[#72213A]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-hand text-sm text-[#D995A9] font-bold">~ english language ♡</span>
              </div>
              <h3 className="font-headline font-semibold text-xl text-[#72213A]">
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
            <div className="p-6 rounded-2xl bg-white border border-[#72213A]/10 shadow-sm space-y-3 editorial-card">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#72213A]/10 flex items-center justify-center text-[#72213A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-hand text-sm text-[#D995A9] font-bold">~ lagos &amp; remote ✨</span>
              </div>
              <h3 className="font-headline font-semibold text-xl text-[#72213A]">
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
            <div className="p-6 rounded-2xl bg-[#72213A] text-white shadow-md space-y-3">
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
