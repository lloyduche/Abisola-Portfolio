import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: () => void;
}

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-8 md:px-12"
      style={{ background: 'var(--bg-dark)', color: '#fff', borderBottom: '2.5px solid var(--border)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER + TICKET STUB ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7">
            <span
              className="font-hand text-2xl block"
              style={{ color: 'var(--ribbon)' }}
            >
              career highlights
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-1 mb-4">
              Resume &amp; Expertise.
            </h2>
            <p
              className="text-base sm:text-lg max-w-xl leading-relaxed font-normal"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              An overview of my professional experience across writing, marketing communications, content development and brand storytelling.
            </p>
          </div>

          {/* Ticket stub */}
          <div
            className="lg:col-span-5 relative rounded-3xl p-6 sm:p-7 flex justify-between items-center transform hover:-rotate-1 transition-transform"
            style={{
              background: 'var(--accent)',
              border: '2px solid #fff',
              boxShadow: '8px 8px 0 var(--ribbon)',
            }}
          >
            <div
              className="space-y-2 pr-4"
              style={{ borderRight: '2px dashed rgba(255,255,255,0.6)' }}
            >
              <span className="text-xs font-bold uppercase tracking-wider text-white/80 block">
                Featured Experience · 2025–2026
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold leading-tight text-white">
                Brand Marketing &amp; Corporate Comms
              </h4>
              <p className="text-xs sm:text-sm text-white/90">
                Redtech Limited · Multi-channel campaigns, e-invoicing funnels &amp; lead gen.
              </p>
            </div>
            <div className="pl-4 text-center font-display text-xs sm:text-sm uppercase tracking-widest font-bold rotate-90 whitespace-nowrap text-white/80">
              VERIFIED
            </div>
          </div>
        </div>

        {/* ── ROSETTE ACHIEVEMENTS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { stat: '12%', title: 'Lead-to-Active', sub: 'Exceeded 5% benchmark at Redtech', color: 'var(--accent)' },
            { stat: '28k+', title: 'Substack Views', sub: 'Across published personal essays', color: 'var(--accent2)' },
            { stat: '823+', title: 'Webinar Registrations', sub: 'Across hospitality & tax events', color: 'var(--ribbon)' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl flex items-center gap-4"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-display text-lg font-bold flex-shrink-0"
                style={{
                  background: `${item.color}25`,
                  border: `2px solid ${item.color}`,
                  color: item.color,
                }}
              >
                {item.stat}
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-white">{item.title}</h4>
                <p className="text-xs text-white/60">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── CAREER TIMELINE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl flex flex-col justify-between"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-wider block mb-1"
                  style={{ color: 'var(--ribbon)' }}
                >
                  {exp.period}
                </span>
                <h4 className="font-display text-lg font-bold text-white mb-1">{exp.role}</h4>
                <div
                  className="text-xs font-semibold mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  {exp.company}
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-normal">
                  {exp.points[0]}
                </p>
              </div>
            </div>
          ))}

          {/* Education card */}
          <div
            className="p-6 rounded-2xl flex flex-col justify-between"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div>
              <span
                className="text-xs font-bold uppercase tracking-wider block mb-1"
                style={{ color: 'var(--accent2)' }}
              >
                Academic Foundation
              </span>
              <h4 className="font-display text-lg font-bold text-white mb-1">B.A. English Language</h4>
              <div
                className="text-xs font-semibold mb-3"
                style={{ color: 'var(--accent)' }}
              >
                Kwara State University
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-normal">
                Second Class Upper Division (2:1). Rigorous focus on syntax, linguistics, storytelling, and communication.
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA BAR ── */}
        <div
          className="p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
              Want the full CV breakdown?
            </h4>
            <p className="text-sm text-white/60">
              View comprehensive role details, achievements, and download a printable copy.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-full text-white font-bold text-sm sm:text-base flex items-center gap-2 hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
            style={{ background: 'var(--accent)' }}
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
