import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 px-4 sm:px-8 md:px-12 bg-theme-bg border-y-2 border-theme-border">
      <div className="max-w-7xl mx-auto">
        {/* Head */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="hand text-2xl text-theme-accent">in-depth breakdowns</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-theme-ink mt-1">
              strategic case studies.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-theme-ink/80 max-w-md leading-relaxed font-normal">
            A deeper look into messaging architecture, audience psychology, execution funnels, and verified business results.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveTab(cs.id)}
              className={`px-5 py-3 rounded-full border-2 border-theme-border font-display text-sm sm:text-base font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === cs.id
                  ? 'bg-theme-accent text-white shadow-[4px_4px_0_var(--color-border)] -translate-y-0.5'
                  : 'bg-white text-theme-ink hover:bg-theme-ribbon/50'
              }`}
            >
              0{idx + 1}. {cs.title.split(':')[0]}
            </button>
          ))}
        </div>

        {/* Active Case Panel */}
        <div className="bg-white border-2 border-theme-border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[10px_10px_0_var(--color-ribbon)]">
          <div className="border-b-2 border-theme-bg pb-6 mb-8">
            <span className="text-xs sm:text-sm font-bold text-theme-muted uppercase tracking-wider block mb-2">
              {activeCase.discipline}
            </span>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-theme-ink leading-tight">
              {activeCase.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-theme-ink mb-2">
                  The Project
                </h4>
                <p className="text-base text-theme-ink/85 leading-relaxed font-normal">
                  {activeCase.project}
                </p>
              </div>

              <div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-theme-ink mb-2">
                  Strategic Approach
                </h4>
                <p className="text-base text-theme-ink/85 leading-relaxed font-normal">
                  {activeCase.approach}
                </p>
              </div>

              <div>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-theme-ink mb-3">
                  Execution Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeCase.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-theme-ink/85 font-normal">
                      <CheckCircle2 className="w-5 h-5 text-theme-accent flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-theme-bg">
                <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block mb-1">
                  My Role
                </span>
                <p className="text-sm sm:text-base font-semibold text-theme-ink">
                  {activeCase.role}
                </p>
              </div>
            </div>

            {/* Right Metrics Box */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="p-6 rounded-2xl bg-theme-bg border-2 border-theme-border flex flex-col gap-5">
                <span className="text-xs font-bold text-theme-muted uppercase tracking-wider block">
                  Key Results &amp; Impact
                </span>

                {activeCase.results.map((r, idx) => (
                  <div
                    key={idx}
                    className="border-b border-theme-border/20 last:border-0 pb-3 last:pb-0"
                  >
                    <div className="font-display text-3xl sm:text-4xl font-bold text-theme-accent">
                      {r.stat}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-theme-ink mt-0.5">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {activeCase.quote && (
                <div className="p-5 rounded-2xl bg-theme-ribbon/40 border-2 border-theme-border text-sm italic text-theme-ink">
                  "{activeCase.quote}"
                </div>
              )}

              {activeCase.link && (
                <a
                  href={activeCase.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-theme-ink text-theme-card font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-theme-accent transition-colors shadow-sm"
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
