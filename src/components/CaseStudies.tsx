import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-8 md:px-12"
      style={{
        background: 'var(--bg)',
        borderTop: '2.5px solid var(--border)',
        borderBottom: '2.5px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span
              className="font-hand text-2xl block"
              style={{ color: 'var(--accent)' }}
            >
              in-depth breakdowns
            </span>
            <h2
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-1"
              style={{ color: 'var(--ink)' }}
            >
              Strategic Case Studies.
            </h2>
          </div>
          <p
            className="text-base sm:text-lg max-w-md leading-relaxed font-normal"
            style={{ color: 'var(--ink-muted)' }}
          >
            A deeper look into messaging architecture, audience psychology, execution funnels, and verified business results.
          </p>
        </div>

        {/* ── TAB SWITCHER ── */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8" style={{ scrollbarWidth: 'none' }}>
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(cs.id)}
              className="px-5 py-3 rounded-full font-display text-sm sm:text-base font-bold whitespace-nowrap transition-all duration-200"
              style={
                activeTab === cs.id
                  ? {
                      background: 'var(--accent)',
                      color: '#fff',
                      border: '2px solid var(--border)',
                      boxShadow: '4px 4px 0 var(--border)',
                      transform: 'translateY(-2px)',
                    }
                  : {
                      background: 'var(--bg-card)',
                      color: 'var(--ink)',
                      border: '2px solid var(--border)',
                    }
              }
            >
              0{idx + 1}. {cs.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* ── ACTIVE CASE PANEL (tearsheet) ── */}
        <div
          className="rounded-3xl p-6 sm:p-10 lg:p-12"
          style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--border)',
            boxShadow: '10px 10px 0 var(--ribbon)',
          }}
        >
          {/* Panel header */}
          <div
            className="pb-6 mb-8"
            style={{ borderBottom: '2px solid var(--bg)' }}
          >
            <span
              className="text-xs sm:text-sm font-bold uppercase tracking-wider block mb-2"
              style={{ color: 'var(--ink-muted)' }}
            >
              {activeCase.discipline}
            </span>
            <h3
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              style={{ color: 'var(--ink)' }}
            >
              {activeCase.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* ── LEFT: Narrative ── */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4
                  className="font-display text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: 'var(--ink)' }}
                >
                  The Project
                </h4>
                <p
                  className="text-base leading-relaxed font-normal"
                  style={{ color: 'var(--ink)', opacity: 0.85 }}
                >
                  {activeCase.project}
                </p>
              </div>

              <div>
                <h4
                  className="font-display text-xl sm:text-2xl font-bold mb-2"
                  style={{ color: 'var(--ink)' }}
                >
                  Strategic Approach
                </h4>
                <p
                  className="text-base leading-relaxed font-normal"
                  style={{ color: 'var(--ink)', opacity: 0.85 }}
                >
                  {activeCase.approach}
                </p>
              </div>

              <div>
                <h4
                  className="font-display text-xl sm:text-2xl font-bold mb-3"
                  style={{ color: 'var(--ink)' }}
                >
                  Execution Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeCase.execution.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base font-normal"
                      style={{ color: 'var(--ink)', opacity: 0.85 }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--accent)' }}
                      />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="pt-4"
                style={{ borderTop: '1px solid var(--bg)' }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-1"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  My Role
                </span>
                <p
                  className="text-sm sm:text-base font-semibold"
                  style={{ color: 'var(--ink)' }}
                >
                  {activeCase.role}
                </p>
              </div>
            </div>

            {/* ── RIGHT: Metrics ── */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div
                className="p-6 rounded-2xl flex flex-col gap-5"
                style={{ background: 'var(--bg)', border: '2px solid var(--border)' }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-wider block"
                  style={{ color: 'var(--ink-muted)' }}
                >
                  Key Results &amp; Impact
                </span>

                {activeCase.results.map((r, idx) => (
                  <div
                    key={idx}
                    className="pb-3 last:pb-0"
                    style={{
                      borderBottom: idx < activeCase.results.length - 1
                        ? '1px solid var(--border)'
                        : 'none',
                      opacity: 0.9,
                    }}
                  >
                    <div
                      className="font-display text-3xl sm:text-4xl font-bold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {r.stat}
                    </div>
                    <div
                      className="text-xs sm:text-sm font-semibold mt-0.5"
                      style={{ color: 'var(--ink)' }}
                    >
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {activeCase.quote && (
                <div
                  className="p-5 rounded-2xl text-sm italic"
                  style={{
                    background: 'var(--ribbon)',
                    border: '2px solid var(--border)',
                    color: 'var(--ink)',
                  }}
                >
                  "{activeCase.quote}"
                </div>
              )}

              {activeCase.link && (
                <a
                  href={activeCase.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full font-bold text-sm text-center flex items-center justify-center gap-2 transition-colors"
                  style={{
                    background: 'var(--ink)',
                    color: 'var(--bg)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink)';
                  }}
                >
                  <span>{activeCase.link.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
