import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { ConfettiBow } from './ConfettiBow';

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Head */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="hand text-2xl text-theme-accent">selected portfolio</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-theme-ink mt-1">
            featured work &amp; copy.
          </h2>
        </div>
        <p className="text-base sm:text-lg text-theme-ink/80 max-w-md leading-relaxed font-normal">
          From regulatory compliance emails and payment product messaging to webinar journeys, culture storytelling, and viral Substack essays.
        </p>
      </div>

      {/* Clothesline Section */}
      <div className="relative mb-20 hidden md:block">
        <svg className="w-full h-14 overflow-visible" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path d="M0,20 Q600,60 1200,20" fill="none" stroke="var(--color-border)" strokeWidth="2.5" />
        </svg>

        <div className="grid grid-cols-4 gap-6 -mt-8 pt-4">
          {PROJECTS.slice(0, 4).map((p, idx) => (
            <div
              key={p.id}
              className="relative sway-tag"
              style={{
                ['--i' as any]: idx,
                ['--r' as any]: `${(idx % 2 === 0 ? -1.5 : 1.5) * (idx + 1)}deg`,
              }}
            >
              <div className="w-[2px] h-10 bg-theme-border mx-auto -mb-2" />
              <div
                onClick={() => onSelectProject(p)}
                className={`p-5 rounded-2xl rounded-bl-[40px] border-2 border-theme-border cursor-pointer transition-all duration-300 hover:shadow-[6px_6px_0_var(--color-border)] hover:-translate-y-1 ${
                  idx % 2 === 0 ? 'bg-theme-card' : 'bg-theme-ribbon/50'
                }`}
              >
                <div className="w-3.5 h-3.5 rounded-full border border-theme-border bg-theme-bg mb-3" />
                <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block mb-1">
                  {p.tagCategory}
                </span>
                <h4 className="font-display text-lg font-bold text-theme-ink mb-1 truncate">
                  {p.title}
                </h4>
                <p className="text-xs text-theme-ink/75 line-clamp-2 leading-relaxed font-normal">
                  {p.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Promise Pill */}
      <div className="flex items-center gap-3 w-fit mx-auto px-6 py-3 rounded-full bg-theme-ink text-theme-card text-sm sm:text-base font-semibold shadow-md mb-16">
        <ConfettiBow size="mini" fill="var(--color-accent)" stroke="#FFFFFF" />
        <span>Every word serves a purpose. Good communication is deliberate, empathetic, and clear.</span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className={`p-8 rounded-3xl border-2 border-theme-border flex flex-col justify-between transition-all duration-300 hover:shadow-[10px_10px_0_var(--color-border)] hover:-translate-y-1 ${
              idx === 0
                ? 'bg-theme-card md:col-span-2 md:grid md:grid-cols-12 md:gap-8 items-center'
                : 'bg-white'
            }`}
          >
            <div className={idx === 0 ? 'md:col-span-8' : ''}>
              <span className="text-xs font-bold text-theme-accent uppercase tracking-wider block mb-2">
                {project.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-theme-ink mb-3 leading-snug">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-theme-ink/80 leading-relaxed font-normal mb-4">
                {project.shortDesc}
              </p>

              {project.hook && (
                <div className="p-3.5 rounded-xl bg-theme-bg border-l-4 border-theme-accent text-xs sm:text-sm font-semibold text-theme-ink mb-6">
                  {project.hook}
                </div>
              )}
            </div>

            <div className={`flex flex-wrap gap-3 ${idx === 0 ? 'md:col-span-4 md:justify-end' : 'mt-4'}`}>
              <button
                onClick={() => onSelectProject(project)}
                className="px-5 py-2.5 rounded-full border-2 border-theme-border bg-theme-bg hover:bg-theme-ink hover:text-theme-card text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Copy Excerpt ↗</span>
              </button>

              {project.fullContent?.substackLink && (
                <a
                  href={project.fullContent.substackLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-theme-accent text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center gap-1.5"
                >
                  <span>Substack</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
