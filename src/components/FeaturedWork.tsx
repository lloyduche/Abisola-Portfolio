import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, FileText } from 'lucide-react';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const categories = ['ALL', 'Tax & Compliance', 'Fintech & Payments', 'Product Messaging', 'Event Communications', 'Substack Essays'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (selectedFilter === 'Substack Essays') {
          return p.tagCategory.toLowerCase().includes('substack') || p.tagCategory.toLowerCase().includes('essay');
        }
        return p.tagCategory.toLowerCase().includes(selectedFilter.toLowerCase());
      });

  return (
    <section id="work" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b" style={{ borderColor: 'var(--border)' }}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-accent">[ 03 ]</span>
              <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-ink">
                TRANSMISSION ARCHIVE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
              Selected Commercial Copy &amp; Essays.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink/75 max-w-md font-normal leading-relaxed">
            From regulatory compliance emails and payment product messaging to webinar journeys, culture storytelling, and viral Substack essays.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className="px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-200"
              style={
                selectedFilter === cat
                  ? {
                      background: 'var(--accent)',
                      color: '#FFFFFF',
                    }
                  : {
                      background: 'var(--bg-card)',
                      color: 'var(--ink)',
                      border: '1px solid var(--border)',
                    }
              }
            >
              {cat === 'ALL' ? `ALL DOSSIERS [${PROJECTS.length}]` : cat}
            </button>
          ))}
        </div>

        {/* Projects Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="p-7 sm:p-9 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-accent group"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: '0 10px 30px var(--shadow-color)',
              }}
            >
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                    {project.badge}
                  </span>
                  <span className="text-[10px] font-mono text-ink/50 uppercase font-semibold">
                    REF: PRJ-0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-3 group-hover:text-accent transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-normal mb-6">
                  {project.shortDesc}
                </p>

                {/* Strategic Hook Box */}
                {project.hook && (
                  <div
                    className="p-4 rounded-xl text-xs sm:text-sm font-mono font-medium leading-relaxed mb-6"
                    style={{
                      background: 'var(--bg)',
                      borderLeft: '3px solid var(--accent)',
                      color: 'var(--ink)',
                    }}
                  >
                    <span className="text-[10px] font-bold text-accent uppercase block mb-1">
                      COMMERCIAL HOOK // ANCHOR
                    </span>
                    {project.hook}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => onSelectProject(project)}
                  className="px-5 py-2.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 border transition-all duration-200 hover:bg-ink hover:text-white"
                  style={{
                    borderColor: 'var(--border-strong)',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                  }}
                >
                  <FileText className="w-4 h-4 text-accent" />
                  <span>INSPECT COPY EXCERPT ↗</span>
                </button>

                {project.fullContent?.substackLink && (
                  <a
                    href={project.fullContent.substackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 transition-all duration-200 hover:opacity-90"
                    style={{
                      background: 'var(--accent)',
                      color: '#FFFFFF',
                    }}
                  >
                    <span>SUBSTACK</span>
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
