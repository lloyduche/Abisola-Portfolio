import React from 'react';
import { CORE_DISCIPLINES, SKILLS, TOOLS } from '../data/portfolioData';
import { Mail, Layout, Video, Users, Check, Cpu } from 'lucide-react';

export const SkillsTools: React.FC = () => {
  const getIcon = (num: string) => {
    const cls = 'w-5 h-5 text-accent';
    switch (num) {
      case 'c': return <Mail className={cls} />;
      case 'm': return <Layout className={cls} />;
      case 'e': return <Video className={cls} />;
      case 's': return <Users className={cls} />;
      default:  return <Mail className={cls} />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-12 border-b" style={{ borderColor: 'var(--border)' }}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-accent">[ 02 ]</span>
              <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-ink">
                CAPABILITIES &amp; TOOLING
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
              The Architecture of the Craft.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink/75 max-w-md font-normal leading-relaxed">
            A high-level synergy of language mastery, commercial intuition, and multi-channel marketing communications built to turn complexity into clarity.
          </p>
        </div>

        {/* 4 Core Discipline Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CORE_DISCIPLINES.map((item, idx) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 rounded-2xl border flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-accent"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: '0 8px 24px var(--shadow-color)',
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border"
                    style={{
                      background: 'rgba(0,0,0,0.03)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    {getIcon(item.num)}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-accent">
                    PILLAR 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-ink mb-3 uppercase tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t flex items-center gap-2 text-[10px] font-mono font-bold text-ink/50 uppercase" style={{ borderColor: 'var(--border)' }}>
                <Check className="w-3.5 h-3.5 text-accent" />
                <span>COMMERCIALLY PROVEN</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Matrix: Skills & Tools Dual Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Specialized Skills */}
          <div
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                <Cpu className="w-4 h-4 text-accent" />
                <span>SPECIALIZED CRAFT COMPETENCIES</span>
              </div>
              <span className="text-[10px] font-mono text-ink/50 uppercase">
                {SKILLS.length} VERIFIED AREAS
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-2 rounded-lg text-xs font-mono font-medium border transition-all duration-200 hover:border-accent hover:text-accent cursor-default"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                    color: 'var(--ink)',
                  }}
                >
                  + {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Software & Platform Stack */}
          <div
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: 'var(--border)' }}>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-ink">
                <span>DIGITAL &amp; PLATFORM STACK</span>
              </div>
              <span className="text-[10px] font-mono text-ink/50 uppercase">
                DAILY TOOLING
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-semibold border ${
                    tool === 'Substack'
                      ? 'bg-accent text-white border-accent'
                      : 'border-border text-ink hover:border-accent'
                  }`}
                  style={
                    tool === 'Substack'
                      ? { background: 'var(--accent)', color: '#FFFFFF', borderColor: 'var(--accent)' }
                      : { background: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--ink)' }
                  }
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
