import React from 'react';
import { CORE_DISCIPLINES, SKILLS, TOOLS } from '../data/portfolioData';
import { BookOpen } from 'lucide-react';

export const SkillsTools: React.FC = () => {
  const disciplineLetters = ['C', 'P', 'E', 'S'];
  const disciplineNotes = [
    '~ where regulatory mandates turn into commercial conversion',
    '~ transforming abstract API rails into clear enterprise value propositions',
    '~ 823+ registrations: full promotional journeys from invite to post-event',
    '~ human-centered workplace stories that foster authentic connection',
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Broadsheet Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-ink/70">
              <span className="font-bold text-[var(--red-pencil)]">¶ CHAPTER II</span>
              <span>/</span>
              <span>CAPABILITIES &amp; DISCIPLINARY MATRIX</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-ink">
              The Architecture of the Craft.
            </h2>
          </div>
          <div className="font-serif italic text-lg max-w-md text-ink/80">
            A high-level synergy of language mastery, commercial intuition, and multi-channel marketing communications.
          </div>
        </div>

        {/* 4 Pillars with Giant Literary Initials (inspired by Image 5 Luncheon Magazine) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_DISCIPLINES.map((item, idx) => (
            <div
              key={item.title}
              className="broadsheet-card p-6 rounded-lg border flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Massive Display Initial Letter (Image 5 style) */}
                <div className="flex items-start justify-between pb-3 mb-4 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
                  <span className="font-display font-black text-5xl leading-none text-ink group-hover:text-[var(--red-pencil)] transition-colors">
                    {disciplineLetters[idx]}
                  </span>
                  <span className="proof-stamp text-[9px]">VOL. 0{idx + 1}</span>
                </div>

                <h3 className="font-display font-bold text-xl mb-2 capitalize text-ink">
                  {item.title}
                </h3>

                <p className="font-serif text-base text-ink/85 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Red Pencil Annotation in Margin */}
              <div className="pt-3 border-t font-hand text-sm leading-tight text-[var(--red-pencil)]" style={{ borderColor: 'var(--ink-rule)' }}>
                {disciplineNotes[idx]}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Matrix: Craft Glossary & Software Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Specialized Competencies */}
          <div className="lg:col-span-7 broadsheet-card p-6 sm:p-8 rounded-lg border">
            <div className="flex items-center justify-between pb-3 mb-6 border-b text-xs font-mono uppercase tracking-wider" style={{ borderColor: 'var(--ink-rule)' }}>
              <div className="flex items-center gap-2 font-bold text-ink">
                <BookOpen className="w-4 h-4 text-[var(--red-pencil)]" />
                <span>SPECIALIZED CRAFT COMPETENCIES</span>
              </div>
              <span className="font-mono text-[10px] text-[var(--red-pencil)]">
                {SKILLS.length} VERIFIED AREAS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILLS.map((skill, i) => {
                const glyphs = ['¶', '§', '†', '‡', '❡', '✦'];
                const glyph = glyphs[i % glyphs.length];

                return (
                  <div
                    key={skill}
                    className="p-3 rounded border flex items-baseline gap-2.5 font-serif text-base transition-colors hover:border-[var(--red-pencil)]"
                    style={{
                      background: 'var(--paper)',
                      borderColor: 'var(--ink-rule)',
                      color: 'var(--ink)',
                    }}
                  >
                    <span className="font-mono text-xs font-bold text-[var(--red-pencil)]">
                      {glyph}
                    </span>
                    <span className="font-medium">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Software & Digital Stack */}
          <div className="lg:col-span-5 broadsheet-card p-6 sm:p-8 rounded-lg border">
            <div className="flex items-center justify-between pb-3 mb-6 border-b text-xs font-mono uppercase tracking-wider text-ink" style={{ borderColor: 'var(--ink-rule)' }}>
              <span className="font-bold">DIGITAL &amp; PLATFORM STACK</span>
              <span className="text-[10px] text-ink/50">TOOLING</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-medium border ${
                    tool === 'Substack'
                      ? 'border-[var(--red-pencil)] text-[var(--red-pencil)] font-bold'
                      : 'border-[var(--ink-rule)] text-ink'
                  }`}
                  style={{
                    background: tool === 'Substack' ? 'rgba(217, 45, 32, 0.05)' : 'var(--paper)',
                  }}
                >
                  {tool === 'Substack' ? '★ Substack (Author publication)' : tool}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t font-hand text-base text-[var(--red-pencil)]" style={{ borderColor: 'var(--ink-rule)' }}>
              ~ "Tools evolve with enterprise infrastructure; linguistic precision and narrative structure remain eternal."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
