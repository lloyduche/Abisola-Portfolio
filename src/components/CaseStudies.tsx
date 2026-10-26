import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2, TrendingUp, Layers } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 border-b" style={{ borderColor: 'var(--border)' }}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-accent">[ 04 ]</span>
              <span className="text-xs font-mono font-extrabold tracking-widest uppercase text-ink">
                STRATEGIC MEMORANDUMS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-ink tracking-tight">
              Verified Business Case Studies.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink/75 max-w-md font-normal leading-relaxed">
            A deeper look into messaging architecture, audience psychology, execution funnels, and verified business results.
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(cs.id)}
              className="p-4 rounded-xl text-left border transition-all duration-200"
              style={
                activeTab === cs.id
                  ? {
                      background: 'var(--accent)',
                      color: '#FFFFFF',
                      borderColor: 'var(--accent)',
                      boxShadow: '0 8px 20px var(--shadow-color)',
                    }
                  : {
                      background: 'var(--bg-card)',
                      color: 'var(--ink)',
                      borderColor: 'var(--border)',
                    }
              }
            >
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest opacity-80 mb-1">
                MEMO 0{idx + 1}
              </div>
              <div className="font-display font-bold text-sm leading-snug line-clamp-2">
                {cs.title.split(':')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Intelligence Panel */}
        <div
          className="p-7 sm:p-10 lg:p-12 rounded-3xl border"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: '0 20px 40px var(--shadow-color)',
          }}
        >
          {/* Header */}
          <div className="pb-6 mb-8 border-b" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>{activeCase.discipline}</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-ink leading-tight">
              {activeCase.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-7">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-2">
                  01 // THE STRATEGIC CONTEXT
                </h4>
                <p className="text-base text-ink/85 leading-relaxed font-normal">
                  {activeCase.project}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-2">
                  02 // MESSAGING ARCHITECTURE &amp; APPROACH
                </h4>
                <p className="text-base text-ink/85 leading-relaxed font-normal">
                  {activeCase.approach}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-3">
                  03 // EXECUTION HIGHLIGHTS
                </h4>
                <ul className="space-y-3">
                  {activeCase.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-ink/85 font-normal">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink/50 font-bold block mb-1">
                  EXECUTIVE ROLE
                </span>
                <p className="text-sm sm:text-base font-semibold font-mono text-ink">
                  {activeCase.role}
                </p>
              </div>
            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div
                className="p-6 rounded-2xl border flex flex-col gap-5"
                style={{
                  background: 'var(--bg)',
                  borderColor: 'var(--border)',
                }}
              >
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent">
                  <TrendingUp className="w-4 h-4" />
                  <span>VERIFIED COMMERCIAL IMPACT</span>
                </div>

                {activeCase.results.map((r, idx) => (
                  <div
                    key={idx}
                    className="pb-3 last:pb-0"
                    style={{
                      borderBottom: idx < activeCase.results.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <div className="font-display font-black text-3xl sm:text-4xl text-accent">
                      {r.stat}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-ink mt-0.5">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {activeCase.quote && (
                <div
                  className="p-5 rounded-2xl border text-sm italic font-serif leading-relaxed"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
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
                  className="w-full py-3.5 px-6 rounded text-xs font-mono font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: 'var(--accent)',
                    color: '#FFFFFF',
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
