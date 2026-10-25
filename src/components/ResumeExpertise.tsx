import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: () => void;
}

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 px-4 sm:px-8 md:px-12 bg-theme-darkBg text-theme-darkInk border-b-2 border-theme-border">
      <div className="max-w-7xl mx-auto">
        {/* Head & Ticket Stub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span className="hand text-2xl text-theme-ribbon">career highlights</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-1 mb-4">
              resume &amp; expertise.
            </h2>
            <p className="text-base sm:text-lg text-theme-darkInk/80 max-w-xl leading-relaxed font-normal">
              An overview of my professional experience across writing, marketing communications, content development and brand storytelling.
            </p>
          </div>

          {/* Ticket Stub */}
          <div className="lg:col-span-5 relative bg-theme-accent text-white border-2 border-white rounded-3xl p-6 sm:p-7 shadow-[8px_8px_0_var(--color-ribbon)] flex justify-between items-center transform hover:-rotate-1 transition-transform">
            <div className="space-y-2 pr-4 border-r-2 border-dashed border-white/60">
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">
                Featured Experience · 2025–2026
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                Brand Marketing &amp; Corporate Comms
              </h4>
              <p className="text-xs sm:text-sm text-white/90">
                Redtech Limited &bull; Multi-channel campaigns, e-invoicing funnels &amp; lead gen.
              </p>
            </div>
            <div className="pl-4 text-center font-display text-xs sm:text-sm uppercase tracking-widest font-bold rotate-90 whitespace-nowrap text-white/80">
              VERIFIED
            </div>
          </div>
        </div>

        {/* Rosettes Shelf */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-theme-accent/20 border-2 border-theme-accent flex items-center justify-center font-display text-xl font-bold text-theme-accent flex-shrink-0">
              12%
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Lead-to-Active</h4>
              <p className="text-xs text-theme-darkInk/70">Exceeded 5% benchmark at Redtech</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-theme-secondary/20 border-2 border-theme-secondary flex items-center justify-center font-display text-lg font-bold text-theme-secondary flex-shrink-0">
              28k+
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Substack Views</h4>
              <p className="text-xs text-theme-darkInk/70">Across published personal essays</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-theme-ribbon/20 border-2 border-theme-ribbon flex items-center justify-center font-display text-lg font-bold text-theme-ribbon flex-shrink-0">
              823+
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Webinar Registrations</h4>
              <p className="text-xs text-theme-darkInk/70">Across hospitality &amp; tax events</p>
            </div>
          </div>
        </div>

        {/* Career Journey Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-theme-ribbon uppercase tracking-wider block mb-1">
                  {exp.period}
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-1">
                  {exp.role}
                </h4>
                <div className="text-xs font-semibold text-theme-accent mb-3">
                  {exp.company}
                </div>
                <p className="text-xs text-theme-darkInk/75 leading-relaxed font-normal">
                  {exp.points[0]}
                </p>
              </div>
            </div>
          ))}

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-theme-secondary uppercase tracking-wider block mb-1">
                Academic Foundation
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-1">
                B.A. English Language
              </h4>
              <div className="text-xs font-semibold text-theme-accent mb-3">
                Kwara State University
              </div>
              <p className="text-xs text-theme-darkInk/75 leading-relaxed font-normal">
                Second Class Upper Division (2:1). Rigorous focus on syntax, linguistics, storytelling, and communication.
              </p>
            </div>
          </div>
        </div>

        {/* Areas of Expertise Marquee & Modal Trigger */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Want the full CV breakdown?
            </h4>
            <p className="text-sm text-theme-darkInk/70">
              View comprehensive role details, achievements, and download a printable copy.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-full bg-theme-accent text-white font-bold text-sm sm:text-base flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
          >
            <FileText className="w-4 h-4" />
            <span>View &amp; Print Full Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
