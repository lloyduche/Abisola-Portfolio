import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CheckCircle2, ArrowUpRight, TrendingUp } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';
import { TiltCard } from './animations/TiltCard';

export const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);
  const activeCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <AnimatedSection
      id="case-studies"
      className="py-16 sm:py-24 lg:py-28 relative border-y border-[#4A0E1C]/12 bg-[#FAF3E3]/40 overflow-hidden"
    >
      {/* Dynamic Background Light Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#EBDDBF]/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0D5BEB]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0D5BEB] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
            <span>Selected Case Studies</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#2A050F] tracking-tight">
            Strategic messaging and verified commercial outcomes.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3E131C] mt-3 leading-relaxed">
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
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all text-left flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'sapphire-btn text-white font-bold shadow-[0_4px_18px_rgba(13,91,235,0.35)]'
                    : 'bg-[#FFFDF9] text-[#4A0E1C] hover:text-[#0D5BEB] hover:border-[#0D5BEB]/40 border border-[#4A0E1C]/14 shadow-sm'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#FAF3E3] text-[#0D5BEB]'
                }`}>
                  0{idx + 1}
                </span>
                <span>{cs.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Presentation Panel */}
        <TiltCard
          glowColor="sapphire"
          className="p-6 sm:p-10 lg:p-14 rounded-3xl bg-[#FFFDF9] border border-[#4A0E1C]/14 shadow-2xl"
        >
          {/* Discipline & Header */}
          <div className="pb-6 mb-8 border-b border-[#4A0E1C]/12">
            {activeCase.discipline && (
              <div className="text-xs font-mono font-semibold text-[#0D5BEB] uppercase tracking-wider mb-2">
                Discipline: {activeCase.discipline}
              </div>
            )}
            <h3 className="font-headline font-semibold text-2xl sm:text-4xl text-[#2A050F] leading-tight">
              {activeCase.title}
            </h3>
          </div>

          {/* Two-Column Layout: Narrative vs. Results */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left 8 Cols: Project, Approach, Execution & Role */}
            <div className="lg:col-span-8 space-y-8 font-body text-[#3E131C] leading-relaxed">

              {/* The Project / Proposed Focus */}
              <div>
                <h4 className="font-headline font-semibold text-xl text-[#2A050F] mb-2">
                  {activeCase.id === 'cs5' ? 'Proposed Focus' : 'The Project'}
                </h4>
                <p className="text-base text-[#3E131C] font-normal whitespace-pre-line">
                  {activeCase.project}
                </p>
              </div>

              {/* The Approach */}
              {activeCase.approach && (
                <div>
                  <h4 className="font-headline font-semibold text-xl text-[#2A050F] mb-2">
                    The Approach
                  </h4>
                  <p className="text-base text-[#3E131C] font-normal whitespace-pre-line">
                    {activeCase.approach}
                  </p>
                </div>
              )}

              {/* Execution / Evidence / Selected Works */}
              <div>
                <h4 className="font-headline font-semibold text-xl text-[#2A050F] mb-3">
                  {activeCase.id === 'cs4'
                    ? 'Selected Works'
                    : activeCase.id === 'cs5'
                    ? 'Evidence to Include'
                    : 'Execution Highlights'}
                </h4>
                <ul className="space-y-2.5">
                  {activeCase.execution.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-base text-[#3E131C]">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#0D5BEB] mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author's Role */}
              {activeCase.role && (
                <div className="pt-4 border-t border-[#4A0E1C]/12 text-sm">
                  <strong className="text-[#0D5BEB] font-mono block mb-1">My Role:</strong>
                  <span className="text-[#3E131C]">{activeCase.role}</span>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Verified Results & Links */}
            <div className="lg:col-span-4 space-y-6">

              {/* Verified Results Box in Bordeaux Lacquer (30% weight) */}
              {activeCase.results && activeCase.results.length > 0 && (
                <div className="p-6 rounded-2xl lacquer-card space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#FAF3E3] uppercase tracking-wider pb-2 border-b border-[#FAF3E3]/15 font-mono">
                    <TrendingUp className="w-4 h-4 text-[#9EBEFD]" />
                    <span>
                      {activeCase.id === 'cs4'
                        ? 'Audience & Reach'
                        : activeCase.id === 'cs5'
                        ? 'Campaign Scope'
                        : 'Verified Results'}
                    </span>
                  </div>

                  {activeCase.results.map((r, idx) => (
                    <div key={idx} className="border-b border-[#FAF3E3]/15 last:border-0 pb-3 last:pb-0">
                      <div className="font-headline font-bold text-3xl sm:text-4xl text-[#FAF3E3]">
                        {r.stat}
                      </div>
                      <div className="font-body text-xs sm:text-sm font-medium text-[#FAF3E3]/85 mt-0.5">
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quote if available */}
              {activeCase.quote && (
                <div className="p-5 rounded-2xl bg-[#FAF3E3] border border-[#4A0E1C]/14 text-sm font-headline italic text-[#2A050F] leading-relaxed shadow-sm">
                  "{activeCase.quote}"
                </div>
              )}

              {/* Link if available (Electric Sapphire 10% on button) */}
              {activeCase.link && (
                <a
                  href={activeCase.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-2xl sapphire-btn text-white font-bold text-sm flex items-center justify-center gap-2 shadow-[0_4px_18px_rgba(13,91,235,0.38)] transition-all text-center"
                >
                  <span>{activeCase.link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              )}

            </div>

          </div>

        </TiltCard>

      </div>
    </AnimatedSection>
  );
};
