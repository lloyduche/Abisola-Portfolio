import React from 'react';
import { GraduationCap, MapPin, Sparkles, ArrowUpRight, BookOpen, Quote } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';
import { RevealText } from './animations/RevealText';
import { TiltCard } from './animations/TiltCard';
import { FloatingScene } from './3d/FloatingObjects';
import { ParallaxElement } from './animations/ParallaxElement';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <AnimatedSection
      id="about"
      className="py-20 sm:py-28 lg:py-32 relative border-y border-[#18303D]/12 bg-[#F7F5F0]/60 overflow-hidden"
    >
      {/* 3D Floating Geometric Accent in Background (Persimmon Spark) */}
      <div className="absolute top-10 right-4 sm:right-16 opacity-30 pointer-events-none hidden md:block">
        <FloatingScene type="dodecahedron" color="#FF5E36" wireframe={true} scale={1.3} className="w-44 h-44" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full cyber-pill text-xs font-semibold uppercase tracking-wider text-[#FF5E36] mb-4 border border-[#18303D]/14">
            <span className="w-2 h-2 rounded-full bg-[#FF5E36] animate-ping" />
            <span>About Me</span>
          </div>
          <RevealText
            tag="h2"
            text="Language, structure, and the power of deliberate storytelling."
            className="font-headline font-semibold text-3xl sm:text-5xl lg:text-[3.2rem] text-[#0F1D24] tracking-tight leading-[1.18]"
          />
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* Left Column: 4 Core Paragraphs + Pull Quote + Substack Mockup */}
          <div className="lg:col-span-8 space-y-6 font-body text-base sm:text-lg text-[#243A47] leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              My background in English Language has shaped how I approach writing, storytelling and communication. It has given me an appreciation for language, structure and meaning, and how the right words can shape understanding and influence how a message is received.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Through my experience in marketing and corporate communications, I have brought this foundation into a business context, developing content, shaping brand messages and contributing to campaigns and communications designed around specific audiences and objectives.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I understand that effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to communicate information in a way that is relevant, engaging and easy to understand.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Whether I am working on marketing content, email campaigns, corporate communications or creative writing, I approach each piece with attention to language, context and the message it needs to convey.
            </motion.p>

            {/* Pull Quote Box with Petrol Ink 30% Depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl lacquer-card relative overflow-hidden"
            >
              <Quote className="w-8 h-8 text-[#F7F5F0]/20 absolute top-4 right-4" />
              <div className="font-headline italic text-lg sm:text-2xl text-[#F7F5F0] leading-snug">
                "Effective communication goes beyond putting words together. It requires a clear sense of purpose, consistency in brand voice, and relevance."
              </div>
            </motion.div>

            {/* Substack Interactive Browser Mockup with 3D Tilt */}
            <TiltCard
              glowColor="persimmon"
              className="mt-8 rounded-3xl overflow-hidden bg-[#FCFBF9] border border-[#18303D]/14 shadow-xl"
            >
              {/* Browser chrome header bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#18303D]/12 bg-[#EFECE4]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF7B54] block shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block shrink-0" />
                {/* URL bar */}
                <div className="flex-1 min-w-0 ml-2 px-3 py-1 rounded-full text-xs font-mono text-[#FF5E36] bg-[#FCFBF9] border border-[#18303D]/14 truncate flex items-center justify-between">
                  <span>abisolawrites.substack.com</span>
                  <span className="text-[10px] text-[#59707E] uppercase tracking-widest hidden sm:inline font-sans">SSL Secure</span>
                </div>
                <a
                  href="https://abisolawrites.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 flex items-center gap-1 text-xs font-semibold text-[#FF5E36] hover:text-[#E6441A] transition-colors shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="hidden sm:inline">Visit</span>
                </a>
              </div>

              {/* Screenshot with subtle Parallax */}
              <ParallaxElement offset={15} className="relative overflow-hidden max-h-[300px] sm:max-h-[380px]">
                <img
                  src="/substack-snapshot.png"
                  alt="Notes from Abisola — Substack publication"
                  className="w-full object-cover object-top filter contrast-[1.03] hover:scale-[1.02] transition-transform duration-700 block"
                />
                <div
                  className="absolute bottom-0 inset-x-0 h-24 pointer-events-none bg-gradient-to-t from-[#0F1D24]/70 via-[#0F1D24]/30 to-transparent"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-lg cyber-pill text-[#FF5E36] border border-[#FF5E36]/30 bg-[#FCFBF9]/95">
                    <BookOpen className="w-3.5 h-3.5 text-[#FF5E36]" />
                    ✍️ Notes from Abisola · Substack
                  </span>
                </div>
              </ParallaxElement>

              {/* Card Footer */}
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-[#18303D]/12 bg-[#FCFBF9]">
                <div>
                  <p className="font-headline font-semibold text-base text-[#0F1D24]">Notes from Abisola</p>
                  <p className="font-body text-xs text-[#59707E] mt-0.5">Essays, fiction &amp; personal writing · From my heart to yours.</p>
                </div>
                {/* Button (Persimmon Spark 10%) */}
                <a
                  href="https://abisolawrites.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold persimmon-btn text-white shadow-md transition-all no-underline w-full sm:w-auto"
                >
                  <span>Read Substack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                </a>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Key Details & Credentials with 3D Tilt Cards */}
          <div className="lg:col-span-4 space-y-6">

            {/* Academic Background Card */}
            <TiltCard
              glowColor="persimmon"
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFBF9] border border-[#18303D]/14 shadow-md space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#FF5E36]/12 border border-[#FF5E36]/25 flex items-center justify-center text-[#FF5E36]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-hand text-sm text-[#18303D] font-bold">~ english language ♡</span>
              </div>
              <h3 className="font-headline font-semibold text-xl text-[#0F1D24]">
                Academic Background
              </h3>
              <div className="font-body text-sm font-semibold text-[#FF5E36]">
                B.A. English Language
              </div>
              <div className="font-body text-xs text-[#59707E]">
                Kwara State University &bull; Second Class Upper Division
              </div>
              <p className="font-body text-xs text-[#243A47] leading-relaxed pt-1">
                Formative training in syntax, linguistic analysis, literary rhetoric, and clear composition.
              </p>
            </TiltCard>

            {/* Location & Status Card */}
            <TiltCard
              glowColor="petrol"
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFBF9] border border-[#18303D]/14 shadow-md space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#18303D]/10 border border-[#18303D]/20 flex items-center justify-center text-[#18303D]">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="font-hand text-sm text-amber-600 font-bold">~ lagos &amp; remote ✨</span>
              </div>
              <h3 className="font-headline font-semibold text-xl text-[#0F1D24]">
                Location &amp; Availability
              </h3>
              <div className="font-body text-sm font-semibold text-[#18303D]">
                Lagos, Nigeria
              </div>
              <p className="font-body text-xs text-[#243A47] leading-relaxed">
                Available for full-time corporate communications appointments, marketing content contracts, and editorial commissions globally.
              </p>
            </TiltCard>

            {/* Creative Duality Card in Petrol Ink (30% weight) */}
            <TiltCard
              glowColor="petrol"
              className="p-6 sm:p-7 rounded-3xl lacquer-card space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-[#F7F5F0] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>The Writing Balance</span>
              </div>
              <h4 className="font-headline font-semibold text-xl text-[#F7F5F0]">
                Commercial Strategy + Literary Honesty
              </h4>
              <p className="font-body text-xs text-[#F7F5F0]/85 leading-relaxed">
                Bringing the rigour of conversion copywriting to business communications, and the emotional resonance of fiction to brand storytelling.
              </p>
            </TiltCard>

          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};
