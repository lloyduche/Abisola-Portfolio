import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

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
    <section id="work" className="py-20 lg:py-32 border-b border-[var(--rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Broadsheet Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-10 border-b border-[var(--rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--red-pencil)]">&para; CHAPTER III</span>
              <span>/</span>
              <span>SELECTED COMMERCIAL WORKS &amp; ESSAYS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--ink)]">
              The Archive of Published Works.
            </h2>
          </div>
          <div className="font-serif italic text-lg max-w-md text-[var(--ink)]/80">
            From high-conversion regulatory compliance emails to payment product messaging, webinar journeys, and viral essays.
          </div>
        </div>

        {/* Typographic Filters (NO BOXES, clean text links) */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 mb-16 scrollbar-none border-b border-[var(--rule)]/60 text-xs font-mono uppercase tracking-wider">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-2 whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'border-b-2 border-[var(--red-pencil)] text-[var(--ink)] font-bold'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
              }`}
            >
              {cat === 'ALL' ? `All Works [${PROJECTS.length}]` : cat}
            </button>
          ))}
        </div>

        {/* The Works Stream (NO BOXES — each is a pure broadsheet article spread) */}
        <div className="space-y-20">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border-b border-[var(--rule)] pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              {/* Left Column: Number & Strategic Marginalia */}
              <div className="lg:col-span-3 space-y-3 font-mono text-xs">
                <div className="text-sm font-bold text-[var(--red-pencil)]">
                  ENTRY 0{idx + 1} //
                </div>
                <div className="uppercase tracking-wider text-[var(--ink-secondary)]">
                  {project.tagCategory}
                </div>

                {/* Red Pencil Margin Note (Image 1 style) */}
                {project.hook && (
                  <div className="pt-4 border-t border-[var(--rule)]/60 font-hand text-base text-[var(--red-pencil)] leading-snug">
                    ^ [commercial anchor] <br />
                    "{project.hook}"
                  </div>
                )}
              </div>

              {/* Center & Right Column: Headline, Synopsis & Excerpt */}
              <div className="lg:col-span-9 space-y-6">
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)] leading-snug">
                  {project.title}
                </h3>

                <p className="font-serif italic text-xl sm:text-2xl text-[var(--ink)]/85 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Direct Excerpt Preview if available */}
                {project.fullContent?.excerpt && (
                  <div className="pl-6 border-l border-[var(--rule)] space-y-3 font-serif text-lg text-[var(--ink)]/85">
                    {project.fullContent.excerpt.slice(0, 2).map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Action Links (Clean text links, NO BUTTON BOXES) */}
                <div className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs uppercase tracking-wider">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="font-bold text-[var(--ink)] hover:text-[var(--red-pencil)] transition-colors underline underline-offset-4"
                  >
                    Inspect Complete Excerpt &amp; Strategic Notes &rarr;
                  </button>

                  {project.fullContent?.substackLink && (
                    <a
                      href={project.fullContent.substackLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[var(--red-pencil)] hover:underline flex items-center gap-1"
                    >
                      <span>Read on Substack</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
