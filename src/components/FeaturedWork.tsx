import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, FolderOpen } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL',
    'Tax & Compliance',
    'Fintech & Payments',
    'Product Messaging',
    'Event Communications',
    'Substack Essays',
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'Substack Essays') {
          return p.tagCategory.toLowerCase().includes('substack') || p.tagCategory.toLowerCase().includes('essay');
        }
        return p.tagCategory.toLowerCase().includes(activeCategory.toLowerCase());
      });

  return (
    <section id="campaigns" className="py-20 lg:py-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Archival Drawer Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-10 border-b border-[var(--cabinet-rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--cabinet-brass)]">&para; DRAWER II</span>
              <span>/</span>
              <span>FILED CAMPAIGN PROOFS &bull; MARKETING &bull; COPYWRITING</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--cabinet-burgundy)]">
              Filed Campaign Proofs.
            </h2>
          </div>
          <div className="font-serif italic text-base sm:text-lg max-w-md text-[var(--ink)]/80">
            Carefully filed marketing emails, product conversion sequences, and corporate communications proofs.
          </div>
        </div>

        {/* Archival Manila Folder Tabs (Filter Row) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none border-b border-[var(--cabinet-rule)]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`folder-tab px-4 py-2 whitespace-nowrap text-xs font-mono ${
                  isActive
                    ? 'active text-[var(--cabinet-burgundy)] font-bold'
                    : 'text-[var(--ink-secondary)] hover:text-[var(--ink)]'
                }`}
              >
                <span>{cat === 'ALL' ? `All Filed Proofs [${PROJECTS.length}]` : cat}</span>
              </button>
            );
          })}
        </div>

        {/* Filed Campaign Proofs Stream */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] p-6 sm:p-10 rounded-sm shadow-sm relative group"
            >
              {/* Folder Top Tab */}
              <div className="absolute -top-3 left-6 px-3 py-0.5 border border-b-0 border-[var(--cabinet-rule)] bg-[var(--cabinet-cream)] font-mono text-[9px] uppercase tracking-widest font-bold text-[var(--cabinet-brass)] rounded-t-sm">
                PROOF REF // 0{idx + 1} &bull; {project.tagCategory}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">

                {/* Left Metadata & Hook */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="font-mono text-xs text-[var(--cabinet-burgundy)] font-bold uppercase tracking-wider">
                    {project.badge}
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[var(--ink)] leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-serif italic text-base text-[var(--ink)]/80 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Commercial Hook Box */}
                  {project.hook && (
                    <div className="p-3.5 rounded-sm border border-[var(--cabinet-brass)] bg-[var(--cabinet-cream)] font-mono text-xs text-[var(--cabinet-burgundy)]">
                      <span className="text-[10px] uppercase font-bold text-[var(--cabinet-brass)] block mb-1">
                        STRATEGIC ANCHOR //
                      </span>
                      <span>"{project.hook}"</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase font-bold tracking-wider text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] transition-colors underline underline-offset-4 text-left"
                    >
                      <FolderOpen className="w-4 h-4 text-[var(--cabinet-brass)]" />
                      <span>Inspect Full Galley Proof &rarr;</span>
                    </button>

                    {project.fullContent?.substackLink && (
                      <a
                        href={project.fullContent.substackLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs uppercase font-bold tracking-wider text-[var(--cabinet-brass)] hover:underline"
                      >
                        <span>Open on Substack Publication</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Proof Sheet Excerpt */}
                <div className="lg:col-span-8 bg-[var(--cabinet-cream-paper)] p-6 sm:p-8 rounded-sm border border-[var(--cabinet-rule)] shadow-sm space-y-4">
                  {/* Subject Line & Preheader Header */}
                  {project.fullContent?.subject && (
                    <div className="pb-4 border-b border-[var(--cabinet-rule)] font-mono text-xs space-y-1">
                      <div>
                        <span className="font-bold text-[var(--cabinet-burgundy)] uppercase">SUBJECT: </span>
                        <span className="text-[var(--ink)]">{project.fullContent.subject}</span>
                      </div>
                      {project.fullContent.preheader && (
                        <div>
                          <span className="font-bold text-[var(--ink-secondary)] uppercase">PREHEADER: </span>
                          <span className="text-[var(--ink-secondary)]">{project.fullContent.preheader}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Copy Excerpt Paragraphs */}
                  {project.fullContent?.excerpt ? (
                    <div className="space-y-3 font-serif text-base sm:text-lg leading-relaxed text-[var(--ink)]/90">
                      {project.fullContent.excerpt.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>
                  ) : project.fullContent?.details ? (
                    <div className="font-serif text-sm sm:text-base leading-relaxed text-[var(--ink)]/85 whitespace-pre-line">
                      {project.fullContent.details}
                    </div>
                  ) : (
                    <div className="font-serif italic text-sm text-[var(--ink-secondary)]">
                      Campaign collateral details filed in archive.
                    </div>
                  )}

                  <div className="pt-3 border-t border-[var(--cabinet-rule)] flex items-center justify-between font-mono text-[10px] text-[var(--ink-secondary)] uppercase">
                    <span>STATUS: VERIFIED PRODUCTION COPY</span>
                    <span className="text-[var(--cabinet-burgundy)] font-bold">REDTECH &bull; MARKETING DEPT</span>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
