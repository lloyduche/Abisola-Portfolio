import React from 'react';
import { ArrowUpRight, Feather } from 'lucide-react';

export const PersonalWriting: React.FC = () => {
  const essays = [
    {
      title: "A Word Greater Than Luck",
      category: "Personal Essay",
      summary: "Reflections on gratitude, providence, and the unspoken architecture of destiny across everyday Nigerian life.",
      views: "Featured Essay",
      link: "https://abisolawrites.substack.com/",
    },
    {
      title: "The Geography of Loving You",
      category: "Literary Prose",
      summary: "Mapping emotional terrain, intimacy, distance, and the physical spaces where love takes root and dissolves.",
      views: "Reader Favorite",
      link: "https://abisolawrites.substack.com/",
    },
    {
      title: "A Lexicon of You",
      category: "Essay & Fiction",
      summary: "Words invented and remembered for someone who changed the grammar of how you see the world.",
      views: "1.2k+ Reads",
      link: "https://abisolawrites.substack.com/",
    },
    {
      title: "The Things We Never Said: Part One — Mokola",
      category: "Narrative Nonfiction",
      summary: "Place-based memory rooted in Ibadan's Mokola hills, family silences, and the weight of growing up.",
      views: "Literary Series",
      link: "https://abisolawrites.substack.com/",
    },
    {
      title: "Building the Technology That Keeps African Businesses Moving",
      category: "Economic & Business Analysis",
      summary: "Why Africa is not moving neatly from cash to cards, and how merchants make payment decisions based on utility and liquidity.",
      views: "Fintech Thought Leadership",
      link: "https://abisolawrites.substack.com/",
    },
    {
      title: "Love As I’ve Come to Know It",
      category: "Cultural Essay",
      summary: "Dismantling romantic mythologies in favor of tenderness, patient observation, and emotional maturity.",
      views: "Subscriber Archive",
      link: "https://abisolawrites.substack.com/",
    },
  ];

  return (
    <section id="personal-writing" className="py-20 lg:py-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Archival Drawer Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--cabinet-rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--cabinet-brass)]">&para; DRAWER IV</span>
              <span>/</span>
              <span>PERSONAL WRITING &bull; ESSAYS, FICTION &amp; CULTURAL PROSE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--cabinet-burgundy)]">
              Abisola Writes.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="dossier-stamp">SUBSTACK PUBLICATION</span>
            <a
              href="https://abisolawrites.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase font-bold tracking-wider text-[var(--cabinet-cream)] bg-[var(--cabinet-burgundy)] hover:opacity-90 transition-opacity rounded-sm"
            >
              <span>Subscribe on Substack</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
            </a>
          </div>
        </div>

        {/* Literary Compartment Lead Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">

          {/* Left Column: Featured Essay Sheet */}
          <div className="lg:col-span-7 bg-[var(--cabinet-cream-dark)] p-8 sm:p-12 rounded-sm border border-[var(--cabinet-rule)] flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--cabinet-rule)] font-mono text-xs uppercase">
                <span className="text-[var(--cabinet-brass)] font-bold">
                  FEATURED PUBLICATION ESSAY
                </span>
                <span className="text-[var(--ink-secondary)]">ABISOLA WRITES // VOL. 01</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[var(--cabinet-burgundy)] mb-4 leading-snug">
                Building the Technology That Keeps African Businesses Moving
              </h3>

              <div className="space-y-4 font-serif text-lg leading-relaxed text-[var(--ink)]/90 italic">
                <p>
                  "Across Africa, digital payments and commerce are becoming part of how businesses operate, from roadside kiosks and social-media storefronts to supermarkets, hotels and large enterprises. The spread of mobile technology has helped drive this change."
                </p>
                <p>
                  "Yet adoption does not follow a single pattern. Africa is not moving neatly from cash to cards. Businesses are operating across a mix of cash, bank transfers, mobile money, cards, QR codes and online payments, choosing what works for a particular customer or transaction..."
                </p>
                <p className="not-italic text-base text-[var(--ink)]/80">
                  "The technology may be digital, but the decisions remain practical: Did the money arrive? Can I use it now? Can I account for it later?"
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[var(--cabinet-rule)] flex items-center justify-between font-mono text-xs">
              <span className="text-[var(--ink-secondary)] uppercase">READ TIME: 6 MINS</span>
              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] transition-colors underline inline-flex items-center gap-1"
              >
                <span>Read Full Essay on Substack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Publication Statistics & Editorial Philosophy */}
          <div className="lg:col-span-5 bg-[var(--cabinet-burgundy)] text-[#FAF7F2] p-8 sm:p-12 rounded-sm border border-[#C89E53]/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#DFBF7B] uppercase">
                <Feather className="w-4 h-4 text-[#DFBF7B]" />
                <span>THE LITERARY DRAWER // READERSHIP</span>
              </div>

              <h4 className="font-display font-black text-3xl sm:text-4xl text-[#FAF7F2] leading-tight">
                An independent home for emotional honesty and deliberate language.
              </h4>

              <p className="font-serif text-base sm:text-lg leading-relaxed text-[#FAF7F2]/85">
                Abisola Writes is an exploration of womanhood, love, family, and modern Nigerian life. It treats readers with intellectual and emotional respect, achieving 100% organic readership growth.
              </p>

              {/* Publication Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#C89E53]/25">
                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#DFBF7B]">
                    1,469+
                  </div>
                  <div className="font-serif text-xs text-white/70">
                    Dedicated Global Subscribers
                  </div>
                </div>

                <div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#DFBF7B]">
                    28,100+
                  </div>
                  <div className="font-serif text-xs text-white/70">
                    Total Essay Views
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#C89E53]/25 font-mono text-xs text-[#DFBF7B]">
              ~ "Every essay is a letter to readers who feel deeply."
            </div>
          </div>

        </div>

        {/* The Catalogue of Published Essays */}
        <div>
          <div className="pb-3 mb-6 border-b border-[var(--cabinet-rule)] font-mono text-xs uppercase tracking-widest text-[var(--ink-secondary)]">
            CATALOGUED ESSAYS &amp; EDITIONS //
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essays.map((essay, idx) => (
              <a
                key={idx}
                href={essay.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-sm border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] hover:border-[var(--cabinet-brass)] hover:bg-[var(--cabinet-cream-paper)] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-[var(--cabinet-rule)] font-mono text-[10px] text-[var(--cabinet-brass)] font-bold uppercase">
                    <span>{essay.category}</span>
                    <span>{essay.views}</span>
                  </div>

                  <h4 className="font-serif font-bold text-xl text-[var(--cabinet-burgundy)] group-hover:text-[var(--cabinet-brass)] transition-colors leading-snug mb-2">
                    {essay.title}
                  </h4>

                  <p className="font-serif text-sm text-[var(--ink)]/80 leading-relaxed">
                    {essay.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--cabinet-rule)] flex items-center justify-between font-mono text-xs text-[var(--cabinet-burgundy)] font-bold uppercase tracking-wider">
                  <span>Read on Substack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
