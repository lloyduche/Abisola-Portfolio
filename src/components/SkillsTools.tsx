import React from 'react';
import { CORE_DISCIPLINES, SKILLS, TOOLS } from '../data/portfolioData';
import { Mail, Layout, Video, Users, BookOpen } from 'lucide-react';

export const SkillsTools: React.FC = () => {
  const getIcon = (num: string) => {
    const cls = 'w-4 h-4 text-[var(--red-pencil)]';
    switch (num) {
      case 'c': return <Mail className={cls} />;
      case 'm': return <Layout className={cls} />;
      case 'e': return <Video className={cls} />;
      case 's': return <Users className={cls} />;
      default:  return <Mail className={cls} />;
    }
  };

  const disciplineNotes = [
    '~ where compliance and tax mandates turn into commercial conversion',
    '~ transforming abstract API rails into clear enterprise value propositions',
    '~ 823+ registrations: full promotional journeys from invite to post-event',
    '~ human-centered workplace stories that foster authentic connection',
  ];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2" style={{ color: 'var(--ink-muted)' }}>
              <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ CHAPTER III</span>
              <span>/</span>
              <span>THE TYPESETTER'S LEXICON</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight" style={{ color: 'var(--ink)' }}>
              The Anatomy of the Craft.
            </h2>
          </div>
          <div className="font-hand text-lg max-w-md" style={{ color: 'var(--red-pencil)' }}>
            ~ "A lexicon honed across fintech, compliance, narrative essays and commercial strategy."
          </div>
        </div>

        {/* 4 Volumes of Discipline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_DISCIPLINES.map((item, idx) => (
            <div
              key={item.title}
              className="paper-sheet p-6 rounded-lg border flex flex-col justify-between transition-all duration-200 hover:border-[var(--red-pencil)] group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b text-xs font-mono" style={{ borderColor: 'var(--ink-rule)' }}>
                  <div className="flex items-center gap-2">
                    {getIcon(item.num)}
                    <span className="font-bold uppercase" style={{ color: 'var(--ink)' }}>
                      VOL. 0{idx + 1}
                    </span>
                  </div>
                  <span className="proof-stamp text-[9px]">PROOF</span>
                </div>

                <h3 className="font-display font-bold text-xl mb-2 capitalize" style={{ color: 'var(--ink)' }}>
                  {item.title}
                </h3>

                <p className="font-serif text-base text-ink/85 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>

              {/* Handwritten Editorial Margin Annotation */}
              <div className="pt-3 border-t font-hand text-sm sm:text-base leading-tight" style={{ borderColor: 'var(--ink-rule)', color: 'var(--red-pencil)' }}>
                {disciplineNotes[idx]}
              </div>
            </div>
          ))}
        </div>

        {/* The Glossary Specimen Sheet & Tools of the Trade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Typeset Specimen Skills */}
          <div className="lg:col-span-7 paper-sheet p-6 sm:p-8 rounded-lg border">
            <div className="flex items-center justify-between pb-3 mb-6 border-b text-xs font-mono uppercase tracking-wider" style={{ borderColor: 'var(--ink-rule)' }}>
              <div className="flex items-center gap-2 font-bold" style={{ color: 'var(--ink)' }}>
                <BookOpen className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                <span>GLOSSARY // SPECIALIZED CRAFT SKILLS</span>
              </div>
              <span className="font-hand text-sm lowercase" style={{ color: 'var(--red-pencil)' }}>
                ({SKILLS.length} verified competencies)
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
                    <span className="font-mono text-xs font-bold" style={{ color: 'var(--red-pencil)' }}>
                      {glyph}
                    </span>
                    <span className="font-medium">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instruments of the Author's Trade (Tools) */}
          <div className="lg:col-span-5 paper-sheet p-6 sm:p-8 rounded-lg border">
            <div className="flex items-center justify-between pb-3 mb-6 border-b text-xs font-mono uppercase tracking-wider" style={{ borderColor: 'var(--ink-rule)' }}>
              <span className="font-bold" style={{ color: 'var(--ink)' }}>
                INSTRUMENTS OF THE CRAFT
              </span>
              <span className="text-[10px] text-ink/50">SOFTWARE</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-medium border ${
                    tool === 'Substack'
                      ? 'border-[var(--red-pencil)] text-[var(--red-pencil)] font-bold'
                      : 'border-[var(--ink-rule)] text-[var(--ink)]'
                  }`}
                  style={{
                    background: tool === 'Substack' ? 'rgba(224, 6, 43, 0.05)' : 'var(--paper)',
                  }}
                >
                  {tool === 'Substack' ? '★ Substack (Author publication)' : tool}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t font-hand text-base" style={{ borderColor: 'var(--ink-rule)', color: 'var(--red-pencil)' }}>
              ~ "The tools vary with the client, but syntax and narrative rigor remain constant."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
