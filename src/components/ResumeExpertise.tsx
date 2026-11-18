import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { Download, Printer, Eye } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';
import { TiltCard } from './animations/TiltCard';

interface ResumeExpertiseProps {
  onOpenResume: (cvUrl: string, cvTitle: string) => void;
}

const CVS = [
  {
    id: 'content',
    label: 'Content Writing',
    tag: '✍️ Writing & Editorial',
    tagColor: '#4A0E1C',
    description:
      'Blog posts, newsletters, Substack essays, SEO articles, UX copy and editorial content strategy.',
    url: '/cv-content-writing.pdf',
    title: 'Content Writing CV — Abisola Oluwatoyin',
  },
  {
    id: 'brand',
    label: 'Brand Marketing',
    tag: '📣 Marketing & Comms',
    tagColor: '#0D5BEB',
    description:
      'Email marketing, brand campaigns, corporate communications, social media strategy and B2B storytelling.',
    url: '/cv-brand-marketing.pdf',
    title: 'Brand Marketing CV — Abisola Oluwatoyin',
  },
];

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  const handlePrint = (url: string) => {
    const win = window.open(url, '_blank');
    if (win) {
      win.addEventListener('load', () => win.print(), { once: true });
    }
  };

  return (
    <AnimatedSection
      id="resume"
      className="py-16 sm:py-24 lg:py-28 relative border-y border-[#4A0E1C]/12 bg-[#FAF3E3]/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0D5BEB] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
            <span>Career Overview</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#2A050F] tracking-tight">
            Resume &amp; Expertise
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3E131C] mt-3 leading-relaxed">
            An overview of my experience across writing, marketing communications, content development and brand storytelling.
          </p>
        </div>

        {/* Areas of Expertise Pill Cloud */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#4A0E1C]/14 shadow-md space-y-4 mb-14 sm:mb-16">
          <div className="text-xs font-semibold text-[#0D5BEB] uppercase tracking-wider">
            Areas of Expertise
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {RESUME_DATA.areasOfExpertise.map((item, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium font-body bg-[#FAF3E3] text-[#2A050F] border border-[#4A0E1C]/12 hover:border-[#0D5BEB]/30 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Dual CV Download Cards */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0D5BEB] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
            <span>Curriculum Vitae</span>
          </div>
          <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-[#2A050F] mb-8">
            Download Focused CVs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {CVS.map((cv) => (
              <TiltCard
                key={cv.id}
                glowColor={cv.id === 'content' ? 'bordeaux' : 'sapphire'}
                className="p-6 sm:p-8 rounded-3xl bg-[#FFFDF9] border border-[#4A0E1C]/14 shadow-lg flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold font-body bg-[#FAF3E3] text-[#4A0E1C] border border-[#4A0E1C]/14"
                  >
                    {cv.tag}
                  </span>
                  <h4 className="font-headline font-semibold text-xl text-[#2A050F]">
                    {cv.label} CV
                  </h4>
                  <p className="font-body text-sm text-[#3E131C] leading-relaxed">
                    {cv.description}
                  </p>
                </div>

                {/* Action Buttons (Electric Sapphire 10% on View button) */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {/* View */}
                  <button
                    onClick={() => onOpenResume(cv.url, cv.title)}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold font-body sapphire-btn text-white shadow-[0_4px_16px_rgba(13,91,235,0.38)] transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-white" />
                    <span>View CV</span>
                  </button>

                  {/* Download */}
                  <a
                    href={cv.url}
                    download
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold font-body bg-[#FAF3E3] text-[#2A050F] hover:text-[#0D5BEB] hover:border-[#0D5BEB]/40 border border-[#4A0E1C]/14 transition-all no-underline shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5 text-[#0D5BEB]" />
                    <span>Download</span>
                  </a>

                  {/* Print */}
                  <button
                    onClick={() => handlePrint(cv.url)}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold font-body border border-[#4A0E1C]/15 text-[#6E3844] hover:text-[#2A050F] hover:border-[#4A0E1C]/30 transition-all cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};
