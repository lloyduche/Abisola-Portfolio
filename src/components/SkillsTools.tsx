import React from 'react';
import { CORE_DISCIPLINES, SKILLS, TOOLS } from '../data/portfolioData';

export const SkillsTools: React.FC = () => {
  const disciplineLetters = ['C', 'P', 'E', 'S'];
  const disciplineNotes = [
    '~ where regulatory mandates turn into commercial conversion',
    '~ transforming abstract API rails into clear enterprise value propositions',
    '~ 823+ registrations: full promotional journeys from invite to post-event',
    '~ human-centered workplace stories that foster authentic connection',
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 border-b border-[var(--rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Broadsheet Folio Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--red-pencil)]">&para; CHAPTER II</span>
              <span>/</span>
              <span>CAPABILITIES &amp; THE LEXICON</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--ink)]">
              The Architecture of the Craft.
            </h2>
          </div>
          <div className="font-serif italic text-lg max-w-md text-[var(--ink)]/80">
            A high-level synergy of language mastery, commercial intuition, and multi-channel marketing communications.
          </div>
        </div>

        {/* 4 Pillars with Giant Literary Letters (Image 5 Luncheon Magazine style) - NO BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {CORE_DISCIPLINES.map((item, idx) => (
            <div
              key={item.title}
              className="border-t border-[var(--rule)] pt-6 flex flex-col justify-between"
            >
              <div>
                {/* Giant Standalone Display Letter (Image 5 style) */}
                <div className="font-display font-black text-6xl sm:text-7xl leading-none text-[var(--ink)] mb-4">
                  {disciplineLetters[idx]}
                </div>

                <div className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--red-pencil)] mb-2">
                  VOL. 0{idx + 1} &bull; DISCIPLINE
                </div>

                <h3 className="font-display font-bold text-xl mb-3 capitalize text-[var(--ink)]">
                  {item.title}
                </h3>

                <p className="font-serif text-base text-[var(--ink)]/85 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Red-Ink Margin Note (Image 1 style) */}
              <div className="pt-4 border-t border-[var(--rule)] font-hand text-base leading-snug text-[var(--red-pencil)]">
                {disciplineNotes[idx]}
              </div>
            </div>
          ))}
        </div>

        {/* Typographic Skills & Tools Index (NO BOXES, clean broadsheet columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-t border-[var(--rule)] pt-16">

          {/* Specialized Competencies Index */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-[var(--rule)] text-xs font-mono uppercase tracking-wider text-[var(--ink)]">
              <span className="font-bold">GLOSSARY &bull; SPECIALIZED CRAFT COMPETENCIES</span>
              <span className="text-[var(--red-pencil)]">{SKILLS.length} VERIFIED AREAS</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {SKILLS.map((skill, i) => (
                <div
                  key={skill}
                  className="flex items-baseline gap-3 font-serif text-lg text-[var(--ink)] border-b border-[var(--rule)]/60 pb-2"
                >
                  <span className="font-mono text-xs text-[var(--red-pencil)] font-bold">
                    0{i + 1}
                  </span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Tooling */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between pb-3 mb-8 border-b border-[var(--rule)] text-xs font-mono uppercase tracking-wider text-[var(--ink)]">
              <span className="font-bold">INSTRUMENTS OF THE CRAFT</span>
              <span className="text-[var(--ink-secondary)]">DIGITAL TOOLING</span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-3 font-mono text-sm">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className={`border-b pb-1 ${
                    tool === 'Substack'
                      ? 'border-[var(--red-pencil)] text-[var(--red-pencil)] font-bold'
                      : 'border-[var(--rule)] text-[var(--ink)]'
                  }`}
                >
                  {tool === 'Substack' ? '★ Substack (Author publication)' : tool}
                </span>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-[var(--rule)] font-hand text-lg text-[var(--red-pencil)]">
              ~ "Tools evolve with enterprise infrastructure; linguistic precision and narrative structure remain eternal."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
