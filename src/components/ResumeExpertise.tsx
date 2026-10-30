import React, { useState } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { FileText, Download, Printer, Eye } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: (cvUrl: string, cvTitle: string) => void;
}

const CVS = [
  {
    id: 'content',
    label: 'Content Writing',
    tag: '✍️ Writing & Editorial',
    tagColor: '#D995A9',
    description:
      'Blog posts, newsletters, Substack essays, SEO articles, UX copy and editorial content strategy.',
    url: '/cv-content-writing.pdf',
    title: 'Content Writing CV — Abisola Oluwatoyin',
  },
  {
    id: 'brand',
    label: 'Brand Marketing',
    tag: '📣 Marketing & Comms',
    tagColor: '#E5B86B',
    description:
      'Email marketing, brand campaigns, corporate communications, social media strategy and B2B storytelling.',
    url: '/cv-brand-marketing.pdf',
    title: 'Brand Marketing CV — Abisola Oluwatoyin',
  },
];

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handlePrint = (url: string) => {
    const win = window.open(url, '_blank');
    if (win) {
      win.addEventListener('load', () => win.print(), { once: true });
    }
  };

  return (
    <section id="resume" className="py-20 sm:py-28 bg-[#F0E7DB]/45 border-y border-[#4A0E1C]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A0E1C] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Career Overview</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#4A0E1C] tracking-tight">
            Resume & Expertise
          </h2>
          <p className="font-body text-base sm:text-lg text-[#38272D]/80 mt-3 leading-relaxed">
            An overview of my experience across writing, marketing communications, content development and brand storytelling.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 mb-16">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#4A0E1C]/10 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#4A0E1C]/10">
                <div>
                  <h3 className="font-headline font-semibold text-2xl text-[#4A0E1C]">
                    {exp.role}
                  </h3>
                  <div className="font-body font-semibold text-base text-[#38272D]">
                    {exp.company}
                  </div>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#FAF4EC] border border-[#4A0E1C]/15 text-xs font-medium text-[#4A0E1C] self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2.5 font-body text-base text-[#38272D]/90 pt-2">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E5B86B] mt-2 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Areas of Expertise */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#4A0E1C]/10 shadow-sm space-y-4 mb-12">
          <h4 className="font-headline font-semibold text-xl text-[#4A0E1C]">
            Areas of Expertise
          </h4>
          <div className="flex flex-wrap gap-2 pt-2">
            {RESUME_DATA.areasOfExpertise.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-xs font-body font-medium bg-[#FAF4EC] text-[#38272D] border border-[#4A0E1C]/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ─── Dual CV Selection ─── */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-5 h-5 text-[#4A0E1C]" />
            <h3 className="font-headline font-semibold text-2xl text-[#4A0E1C]">
              Curriculum Vitae
            </h3>
            <span className="text-xs font-body text-[#38272D]/60 ml-1 hidden sm:inline">
              — choose a version to view, download or print
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CVS.map((cv) => {
              const isHovered = hoveredCard === cv.id;
              return (
                <div
                  key={cv.id}
                  onMouseEnter={() => setHoveredCard(cv.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative rounded-3xl bg-white border border-[#4A0E1C]/10 overflow-hidden transition-all duration-300"
                  style={{
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: isHovered
                      ? '0 12px 40px rgba(74, 14, 28,0.15)'
                      : '0 2px 8px rgba(74, 14, 28,0.06)',
                  }}
                >
                  {/* Top accent stripe */}
                  <div className="h-1.5 w-full" style={{ background: cv.tagColor }} />

                  <div className="p-7 sm:p-8 space-y-5">
                    {/* Tag + Title */}
                    <div className="space-y-2">
                      <span
                        className="inline-block text-xs font-semibold font-body px-3 py-1 rounded-full"
                        style={{
                          background: cv.tagColor + '22',
                          color: cv.tagColor === '#E5B86B' ? '#8a6a1a' : '#8a2a57',
                        }}
                      >
                        {cv.tag}
                      </span>
                      <h4 className="font-headline font-semibold text-xl text-[#4A0E1C]">
                        {cv.label} CV
                      </h4>
                      <p className="font-body text-sm text-[#38272D]/70 leading-relaxed">
                        {cv.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {/* View */}
                      <button
                        onClick={() => onOpenResume(cv.url, cv.title)}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold font-body transition-all duration-200"
                        style={{ background: '#4A0E1C', color: '#fff' }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = '#340611')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = '#4A0E1C')}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </button>

                      {/* Download */}
                      <a
                        href={cv.url}
                        download
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold font-body border border-[#4A0E1C]/20 text-[#4A0E1C] bg-[#FAF4EC] hover:bg-[#f0e5d6] transition-all duration-200 no-underline"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>

                      {/* Print */}
                      <button
                        onClick={() => handlePrint(cv.url)}
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold font-body border border-[#4A0E1C]/20 text-[#38272D]/70 bg-white hover:bg-[#FAF4EC] transition-all duration-200"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
