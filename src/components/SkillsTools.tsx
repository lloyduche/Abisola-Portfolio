import React from 'react';
import { CORE_DISCIPLINES, SKILLS, TOOLS } from '../data/portfolioData';
import { Mail, Layout, Video, Users } from 'lucide-react';
import { ConfettiBow } from './ConfettiBow';

const getIcon = (num: string) => {
  const cls = 'w-6 h-6';
  switch (num) {
    case 'c': return <Mail className={cls} />;
    case 'm': return <Layout className={cls} />;
    case 'e': return <Video className={cls} />;
    case 's': return <Users className={cls} />;
    default:  return <Mail className={cls} />;
  }
};

const cardBg = (idx: number) =>
  idx % 2 === 0 ? 'var(--ribbon)' : 'var(--bg-card)';

export const SkillsTools: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-8 md:px-12"
      style={{ background: 'var(--bg-card)', borderBottom: '2.5px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-4">
          <span
            className="font-hand text-2xl block"
            style={{ color: 'var(--accent)' }}
          >
            core competencies
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-1"
            style={{ color: 'var(--ink)' }}
          >
            Skills &amp; the Craft Behind It.
          </h2>
        </div>

        {/* Horizontal rule */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[2px]" style={{ background: 'var(--border)' }} />
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em]"
            style={{ color: 'var(--ink-muted)' }}
          >
            The Editorial · Skills Feature
          </span>
          <div className="flex-1 h-[2px]" style={{ background: 'var(--border)' }} />
        </div>

        <p
          className="text-base sm:text-lg max-w-xl leading-relaxed font-normal mb-12"
          style={{ color: 'var(--ink-muted)' }}
        >
          A high-level synergy of language mastery, commercial intuition, and multi-channel marketing communications built to turn complexity into clarity.
        </p>

        {/* ── 4 CORE DISCIPLINE CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {CORE_DISCIPLINES.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: cardBg(idx),
                border: '2px solid var(--border)',
                boxShadow: '0 0 0 transparent',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '8px 8px 0 var(--border)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 0 0 transparent';
              }}
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{
                    background: '#fff',
                    border: '2px solid var(--border)',
                    color: 'var(--ink)',
                  }}
                >
                  {getIcon(item.num)}
                </div>
                <h3
                  className="font-display text-2xl font-bold mb-3 capitalize"
                  style={{ color: 'var(--ink)' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed font-normal"
                  style={{ color: 'var(--ink)', opacity: 0.8 }}
                >
                  {item.desc}
                </p>
              </div>
              {/* Ghost large letter */}
              <span
                className="font-display text-7xl font-bold select-none absolute -right-2 -bottom-4 pointer-events-none uppercase"
                style={{ color: 'var(--border)', opacity: 0.08 }}
              >
                {item.num}
              </span>
            </div>
          ))}
        </div>

        {/* ── SKILLS & TOOLS CLUSTER ── */}
        <div
          className="p-8 sm:p-10 rounded-3xl"
          style={{ background: 'var(--bg)', border: '2px solid var(--border)' }}
        >
          {/* Skills */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <ConfettiBow size="mini" />
              <h3
                className="font-display text-2xl font-bold"
                style={{ color: 'var(--ink)' }}
              >
                Specialized Craft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-default"
                  style={{
                    background: '#fff',
                    border: '2px solid var(--border)',
                    color: 'var(--ink)',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.background = 'var(--accent)';
                    el.style.color = '#fff';
                    el.style.borderColor = 'var(--accent)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.background = '#fff';
                    el.style.color = 'var(--ink)';
                    el.style.borderColor = 'var(--border)';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1.5px] mb-8" style={{ background: 'var(--border)', opacity: 0.2 }} />

          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ConfettiBow size="mini" />
              <h3
                className="font-display text-2xl font-bold"
                style={{ color: 'var(--ink)' }}
              >
                Software &amp; Digital Toolstack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {TOOLS.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-default"
                  style={
                    tool === 'Substack'
                      ? { background: 'var(--accent)', color: '#fff', border: '2px solid var(--accent)' }
                      : { background: '#fff', color: 'var(--ink)', border: '2px solid var(--border)' }
                  }
                  onMouseEnter={(e) => {
                    if (tool !== 'Substack') {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = 'var(--accent2)';
                      el.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tool !== 'Substack') {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = '#fff';
                      el.style.transform = 'translateY(0)';
                    }
                  }}
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
