import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, FileText } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Tax & Compliance', 'Fintech & Payments', 'Product Messaging', 'Event Communications', 'Substack Essays'];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'Substack Essays') {
          return p.tagCategory.toLowerCase().includes('substack') || p.tagCategory.toLowerCase().includes('essay');
        }
        return p.tagCategory.toLowerCase().includes(activeCategory.toLowerCase());
      });

  return (
    <section id="work" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-10 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2" style={{ color: 'var(--ink-muted)' }}>
              <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ CHAPTER IV</span>
              <span>/</span>
              <span>THE ARCHIVE OF FINISHED PROOFS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight" style={{ color: 'var(--ink)' }}>
              Selected Copy &amp; Essays.
            </h2>
          </div>
          <div className="font-hand text-lg max-w-md" style={{ color: 'var(--red-pencil)' }}>
            ~ "Explore the thinking behind the finished work: marginal notes, strategic hooks &amp; proof excerpts."
          </div>
        </div>

        {/* Category Bookmark Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-200 border"
              style={
                activeCategory === cat
                  ? {
                      background: 'var(--ink)',
                      color: 'var(--paper)',
                      borderColor: 'var(--ink)',
                    }
                  : {
                      background: 'var(--paper-leaf)',
                      color: 'var(--ink)',
                      borderColor: 'var(--ink-rule)',
                    }
              }
            >
              {cat === 'ALL' ? `ALL GALLEYS [${PROJECTS.length}]` : cat}
            </button>
          ))}
        </div>

        {/* Galley Proofs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="galley-sheet p-7 sm:p-9 rounded-lg flex flex-col justify-between transition-all duration-300 hover:shadow-lg group"
            >
              <div>
                {/* Galley Sheet Metadata */}
                <div className="flex items-center justify-between pb-3 mb-5 border-b text-xs font-mono" style={{ borderColor: 'var(--ink-rule)' }}>
                  <div className="flex items-center gap-2">
                    <span className="font-bold uppercase" style={{ color: 'var(--red-pencil)' }}>
                      PROOF NO. 0{idx + 1}
                    </span>
                    <span className="opacity-40">|</span>
                    <span className="text-ink/70">{project.tagCategory}</span>
                  </div>
                  <span className="proof-stamp text-[9px]">FINAL PASS</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3 leading-snug group-hover:text-[var(--red-pencil)] transition-colors" style={{ color: 'var(--ink)' }}>
                  {project.title}
                </h3>

                {/* Short Synopsis */}
                <p className="font-serif text-lg sm:text-xl text-ink/85 leading-relaxed font-normal mb-6">
                  {project.shortDesc}
                </p>

                {/* The Red-Pencil Marginal Annotation (The thinking behind the finished work) */}
                {project.hook && (
                  <div
                    className="p-4 rounded mb-6 border-l-2 font-mono text-xs"
                    style={{
                      background: 'var(--paper)',
                      borderColor: 'var(--red-pencil)',
                      color: 'var(--ink)',
                    }}
                  >
                    <div className="font-hand text-base mb-1" style={{ color: 'var(--red-pencil)' }}>
                      ^ [editorial margin: the hook that made it work]
                    </div>
                    <div className="font-semibold text-ink">
                      "{project.hook}"
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t font-mono text-xs" style={{ borderColor: 'var(--ink-rule)' }}>
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-5 py-2.5 rounded font-bold tracking-wider uppercase flex items-center gap-2 border transition-all hover:bg-black/5"
                  style={{
                    borderColor: 'var(--ink-rule-strong)',
                    background: 'var(--paper-leaf)',
                    color: 'var(--ink)',
                  }}
                >
                  <FileText className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                  <span>Inspect Galley Excerpt ↗</span>
                </button>

                {project.fullContent?.substackLink && (
                  <a
                    href={project.fullContent.substackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all text-white"
                    style={{ background: 'var(--red-pencil)' }}
                  >
                    <span>Read on Substack</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
