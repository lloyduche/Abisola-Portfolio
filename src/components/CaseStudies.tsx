import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CheckCircle2, ArrowUpRight, TrendingUp } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-20 sm:py-28 bg-[#F0E7DB]/45 border-y border-[#72213A]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#72213A] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Selected Case Studies</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#72213A] tracking-tight">
            Strategic messaging and verified commercial outcomes.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#38272D]/80 mt-3 leading-relaxed">
            In-depth breakdowns showing the objective, strategic approach, execution, and measurable business results across campaigns and independent publishing.
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CASE_STUDIES.map((cs, idx) => {
            const isActive = activeTab === cs.id;
            return (
              <button
                key={cs.id}
                onClick={() => setActiveTab(cs.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all text-left flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#72213A] text-white shadow-md'
                    : 'bg-white text-[#38272D]/80 hover:bg-[#FAF4EC] hover:text-[#72213A] border border-[#72213A]/10'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive ? 'bg-[#E5B86B] text-[#72213A]' : 'bg-[#72213A]/10 text-[#72213A]'
                }`}>
                  0{idx + 1}
                </span>
                <span>{cs.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Presentation Panel */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#72213A]/10 shadow-md">

          {/* Discipline & Header */}
          <div className="pb-6 mb-8 border-b border-[#72213A]/10">
            <div className="text-xs font-semibold text-[#72213A] uppercase tracking-wider mb-2">
              Discipline: {activeCase.discipline}
            </div>
            <h3 className="font-headline font-semibold text-2xl sm:text-4xl text-[#72213A] leading-tight">
              {activeCase.title}
            </h3>
          </div>

          {/* Two-Column Layout: Narrative vs. Results */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left 8 Cols: Project, Approach, Execution & Role */}
            <div className="lg:col-span-8 space-y-8 font-body text-[#38272D]/90 leading-relaxed">

              {/* The Project */}
              <div>
                <h4 className="font-headline font-semibold text-xl text-[#72213A] mb-2">
                  The Project
                </h4>
                <p className="text-base text-[#38272D]/90 font-normal">
                  {activeCase.project}
                </p>
              </div>

              {/* The Approach */}
              <div>
                <h4 className="font-headline font-semibold text-xl text-[#72213A] mb-2">
                  The Approach
                </h4>
                <p className="text-base text-[#38272D]/90 font-normal">
                  {activeCase.approach}
                </p>
              </div>

              {/* Execution */}
              <div>
                <h4 className="font-headline font-semibold text-xl text-[#72213A] mb-3">
                  Execution Highlights
                </h4>
                <ul className="space-y-2.5">
                  {activeCase.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#38272D]/90">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#72213A] mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author's Role */}
              <div className="pt-4 border-t border-[#72213A]/10 text-sm">
                <strong className="text-[#72213A] block mb-1">My Role:</strong>
                <span className="text-[#38272D]/85">{activeCase.role}</span>
              </div>
            </div>

            {/* Right 4 Cols: Verified Results & Links */}
            <div className="lg:col-span-4 space-y-6">

              {/* Verified Results Box */}
              <div className="p-6 rounded-2xl bg-[#FAF4EC] border border-[#72213A]/15 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#72213A] uppercase tracking-wider pb-2 border-b border-[#72213A]/10">
                  <TrendingUp className="w-4 h-4 text-[#E5B86B]" />
                  <span>Verified Results</span>
                </div>

                {activeCase.results.map((r, idx) => (
                  <div key={idx} className="border-b border-[#72213A]/10 last:border-0 pb-3 last:pb-0">
                    <div className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
                      {r.stat}
                    </div>
                    <div className="font-body text-xs sm:text-sm font-medium text-[#38272D] mt-0.5">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quote if available */}
              {activeCase.quote && (
                <div className="p-5 rounded-2xl bg-white border border-[#72213A]/10 text-sm font-headline italic text-[#72213A] leading-relaxed shadow-sm">
                  "{activeCase.quote}"
                </div>
              )}

              {/* Link if available */}
              {activeCase.link && (
                <a
                  href={activeCase.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#72213A] hover:bg-[#54172A] text-white text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                >
                  <span>{activeCase.link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
