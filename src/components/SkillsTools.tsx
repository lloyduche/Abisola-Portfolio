import React from 'react';
import { CORE_DISCIPLINES, SKILLS, TOOLS } from '../data/portfolioData';
import { Mail, Layout, Video, Users } from 'lucide-react';
import { ConfettiBow } from './ConfettiBow';

export const SkillsTools: React.FC = () => {
  const getIcon = (num: string) => {
    switch (num) {
      case 'c':
        return <Mail className="w-6 h-6 text-theme-ink" />;
      case 'm':
        return <Layout className="w-6 h-6 text-theme-ink" />;
      case 'e':
        return <Video className="w-6 h-6 text-theme-ink" />;
      case 's':
        return <Users className="w-6 h-6 text-theme-ink" />;
      default:
        return <Mail className="w-6 h-6 text-theme-ink" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-12 bg-white border-b-2 border-theme-border">
      <div className="max-w-7xl mx-auto">
        {/* Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="hand text-2xl text-theme-accent">core competencies</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-theme-ink mt-1">
              skills &amp; the craft behind it.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-theme-ink/80 max-w-md leading-relaxed font-normal">
            A high-level synergy of language mastery, commercial intuition, and multi-channel marketing communications built to turn complexity into clarity.
          </p>
        </div>

        {/* 4 Core Discipline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_DISCIPLINES.map((item, idx) => (
            <div
              key={item.title}
              className={`p-7 rounded-3xl border-2 border-theme-border flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-[8px_8px_0_var(--color-border)] hover:-translate-y-1 ${
                idx === 0
                  ? 'bg-theme-ribbon/50'
                  : idx === 2
                  ? 'bg-theme-secondary/40'
                  : 'bg-theme-card'
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl border-2 border-theme-border bg-white flex items-center justify-center mb-5 shadow-sm">
                  {getIcon(item.num)}
                </div>
                <h3 className="font-display text-2xl font-bold text-theme-ink mb-3 capitalize">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-theme-ink/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <span className="font-display text-7xl font-bold text-theme-border/10 select-none absolute -right-2 -bottom-4 pointer-events-none">
                {item.num}
              </span>
            </div>
          ))}
        </div>

        {/* Skills & Tools Cluster */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-theme-bg border-2 border-theme-border">
          {/* Skills */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <ConfettiBow size="mini" />
              <h3 className="font-display text-2xl font-bold text-theme-ink">
                Specialized Craft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border-2 border-theme-border bg-white text-xs sm:text-sm font-semibold text-theme-ink transition-transform hover:-translate-y-0.5 hover:bg-theme-accent hover:text-white hover:border-theme-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ConfettiBow size="mini" />
              <h3 className="font-display text-2xl font-bold text-theme-ink">
                Software &amp; Digital Toolstack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className={`px-4 py-2 rounded-full border-2 border-theme-border text-xs sm:text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    tool === 'Substack'
                      ? 'bg-theme-accent text-white border-theme-accent'
                      : 'bg-white text-theme-ink hover:bg-theme-secondary'
                  }`}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
