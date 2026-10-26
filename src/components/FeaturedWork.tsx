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
    <section
      id="work"
      className="py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto"
    >
      {/* ── HEADER ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span
            className="font-hand text-2xl block"
            style={{ color: 'var(--accent)' }}
          >
            selected portfolio
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-1"
            style={{ color: 'var(--ink)' }}
          >
            Featured Work &amp; Copy.
          </h2>
        </div>
        <p
          className="text-base sm:text-lg max-w-md leading-relaxed font-normal"
          style={{ color: 'var(--ink-muted)' }}
        >
          From regulatory compliance emails and payment product messaging to webinar journeys, culture storytelling, and viral Substack essays.
        </p>
      </div>

      {/* ── CLOTHESLINE SECTION (desktop only) ── */}
      <div className="relative mb-20 hidden md:block">
        <svg
          className="w-full h-14 overflow-visible"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 Q600,60 1200,20"
            fill="none"
            stroke="var(--border)"
            strokeWidth="2.5"
          />
        </svg>

        <div className="grid grid-cols-4 gap-6 -mt-8 pt-4">
          {PROJECTS.slice(0, 4).map((p, idx) => (
            <div
              key={p.id}
              className="relative"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Pin */}
              <div
                className="w-[2px] h-10 mx-auto -mb-2"
                style={{ background: 'var(--border)' }}
              />
              {/* Tag card */}
              <div
                onClick={() => onSelectProject(p)}
                className="p-5 rounded-2xl rounded-bl-[40px] cursor-pointer transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: idx % 2 === 0 ? 'var(--bg-card)' : 'var(--ribbon)',
                  border: '2px solid var(--border)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '6px 6px 0 var(--border)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div
                  className="w-3.5 h-3.5 rounded-full mb-3"
                  style={{ border: '1px solid var(--border)', background: 'var(--bg)' }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-1"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  {p.tagCategory}
                </span>
                <h4
                  className="font-display text-lg font-bold mb-1 truncate"
                  style={{ color: 'var(--ink)' }}
                >
                  {p.title}
                </h4>
                <p
                  className="text-xs line-clamp-2 leading-relaxed font-normal"
                  style={{ color: 'var(--ink)', opacity: 0.75 }}
                >
                  {p.shortDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROMISE PILL ── */}
      <div
        className="flex items-center gap-3 w-fit mx-auto px-6 py-3 rounded-full text-sm sm:text-base font-semibold shadow-md mb-16"
        style={{ background: 'var(--ink)', color: 'var(--bg)' }}
      >
        <ConfettiBow size="mini" fill="var(--accent)" stroke="#FFFFFF" />
        <span>Every word serves a purpose. Good communication is deliberate, empathetic, and clear.</span>
      </div>

      {/* ── PROJECTS GRID ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <article
            key={project.id}
            className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
              idx === 0 ? 'md:col-span-2 md:grid md:grid-cols-12 md:gap-8 md:items-center' : ''
            }`}
            style={{
              background: idx === 0 ? 'var(--bg-card)' : '#fff',
              border: '2px solid var(--border)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = '10px 10px 0 var(--border)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <div className={idx === 0 ? 'md:col-span-8' : ''}>
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-2"
                style={{ color: 'var(--accent)' }}
              >
                {project.badge}
              </span>
              <h3
                className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-snug"
                style={{ color: 'var(--ink)' }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm sm:text-base leading-relaxed font-normal mb-4"
                style={{ color: 'var(--ink)', opacity: 0.8 }}
              >
                {project.shortDesc}
              </p>

              {project.hook && (
                <div
                  className="p-3.5 rounded-xl text-xs sm:text-sm font-semibold mb-6"
                  style={{
                    borderLeft: '4px solid var(--accent)',
                    background: 'var(--bg)',
                    color: 'var(--ink)',
                  }}
                >
                  {project.hook}
                </div>
              )}
            </div>

            <div
              className={`flex flex-wrap gap-3 ${
                idx === 0 ? 'md:col-span-4 md:justify-end' : 'mt-4'
              }`}
            >
              <button
                onClick={() => onSelectProject(project)}
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
                style={{
                  border: '2px solid var(--border)',
                  background: 'var(--bg)',
                  color: 'var(--ink)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'var(--ink)';
                  el.style.color = 'var(--bg)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = 'var(--bg)';
                  el.style.color = 'var(--ink)';
                }}
              >
                <BookOpen className="w-4 h-4" />
                <span>Read Copy Excerpt ↗</span>
              </button>

              {project.fullContent?.substackLink && (
                <a
                  href={project.fullContent.substackLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm hover:opacity-90 transition-opacity flex items-center gap-1.5"
                  style={{ background: 'var(--accent)' }}
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
