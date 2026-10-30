import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, BookOpen, Mail } from 'lucide-react';

// Email snapshot images for the E-Invoicing project (id: "p1")
const EINVOICING_SNAPSHOTS = [
  { src: '/einvoicing-email-1.png', alt: 'E-Invoicing Email — Hero section: NRS-Compliant E-Invoicing, Simplified' },
  { src: '/einvoicing-email-2.png', alt: 'E-Invoicing Email — Product breakdown: For Businesses Without an ERP' },
  { src: '/einvoicing-email-3.png', alt: 'E-Invoicing Email — Footer: Move to RedPay, compliance badges' },
];

interface FeaturedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = [
    'ALL',
    'Tax & Compliance',
    'Fintech & Payments',
    'Product Messaging',
    'Events',
    'Internal Comms',
    'Newsletters',
    'Thought Leadership',
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (activeCategory === 'Events') {
          return p.tagCategory.toLowerCase().includes('event');
        }
        if (activeCategory === 'Internal Comms') {
          return p.tagCategory.toLowerCase().includes('internal');
        }
        if (activeCategory === 'Newsletters') {
          return p.tagCategory.toLowerCase().includes('newsletter');
        }
        if (activeCategory === 'Thought Leadership') {
          return p.tagCategory.toLowerCase().includes('thought') || p.tagCategory.toLowerCase().includes('essay');
        }
        return p.tagCategory.toLowerCase().includes(activeCategory.toLowerCase());
      });

  return (
    <section id="featured-work" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#72213A] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
              <span>Featured Work</span>
            </div>
            <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#72213A] tracking-tight">
              Selected Marketing, Communications &amp; Writing Projects
            </h2>
            <p className="font-body text-base sm:text-lg text-[#38272D]/80 mt-3 leading-relaxed">
              A selection of product emails, website messaging, event work, internal storytelling, newsletters and editorial writing developed for different audiences and business needs.
            </p>
          </div>

          <div className="text-xs font-body text-[#38272D]/60 text-right hidden sm:block">
            Showing {filteredProjects.length} of {PROJECTS.length} Selected Projects
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#72213A] text-white shadow-sm'
                  : 'bg-white text-[#38272D]/75 hover:bg-[#FAF4EC] hover:text-[#72213A] border border-[#72213A]/10'
              }`}
            >
              {cat === 'ALL' ? `All Projects [${PROJECTS.length}]` : cat}
            </button>
          ))}
        </div>

        {/* Projects Grid: Clean White Cards with Warm Editorial Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`p-8 sm:p-10 rounded-3xl bg-white border border-[#72213A]/10 shadow-sm editorial-card flex flex-col justify-between ${
                idx === 0 && activeCategory === 'ALL' ? 'md:col-span-2 bg-gradient-to-br from-white to-[#FAF4EC]' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Category Badge & Index */}
                <div className="flex items-center justify-between text-xs font-semibold text-[#72213A]">
                  <span className="px-3 py-1 rounded-full bg-[#72213A]/10">
                    {project.tagCategory}
                  </span>
                  <span className="text-[#38272D]/50 font-body">
                    PROJECT 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-[#72213A] leading-snug">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="font-body text-base text-[#38272D]/85 leading-relaxed">
                  {project.shortDesc}
                </p>

                {/* Hook / Key Angle Box */}
                {project.hook && (
                  <div className="p-4 rounded-xl bg-[#FAF4EC] border-l-4 border-[#72213A] text-sm font-body text-[#38272D] leading-relaxed">
                    <span className="font-semibold text-[#72213A] block text-xs uppercase tracking-wider mb-1">
                      Key Framing / Strategy:
                    </span>
                    {project.hook}
                  </div>
                )}

                {/* Subject Line & Preheader Preview */}
                {project.fullContent?.subject && (
                  <div className="p-4 rounded-xl bg-[#FAF4EC]/70 text-xs font-body space-y-1 text-[#38272D]/90">
                    <div>
                      <strong className="text-[#72213A]">Subject Line:</strong> {project.fullContent.subject}
                    </div>
                    {project.fullContent.preheader && (
                      <div>
                        <strong className="text-[#38272D]/70">Preheader:</strong> {project.fullContent.preheader}
                      </div>
                    )}
                  </div>
                )}

                {/* ── Email Newsletter Mockup (E-Invoicing only) ── */}
                {project.id === 'p1' && (
                  <div className="mt-2 space-y-3">
                    {/* Mockup label */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#72213A]">
                      <Mail className="w-3.5 h-3.5 text-[#E5B86B]" />
                      <span className="uppercase tracking-wider">Email Campaign Mockup</span>
                    </div>

                    {/* Scrollable horizontal reel of snapshots */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#72213A]/10 shadow-sm bg-white">
                      {/* Email client chrome bar */}
                      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#72213A]/08"
                        style={{ background: '#FAF4EC' }}>
                        <span className="w-2 h-2 rounded-full bg-[#72213A]/20" />
                        <span className="w-2 h-2 rounded-full bg-[#D995A9]/35" />
                        <span className="w-2 h-2 rounded-full bg-[#E5B86B]/45" />
                        <div className="flex-1 ml-2 px-3 py-1 rounded-full text-[10px] font-body text-[#38272D]/45 bg-white border border-[#72213A]/08 truncate">
                          <span className="font-semibold text-[#72213A]">Subject: </span>
                          ₦200,000. The Cost of Ignoring Nigeria E-Invoicing Mandate
                        </div>
                      </div>

                      {/* Horizontal scroll reel */}
                      <div className="flex gap-0 overflow-x-auto scrollbar-none snap-x snap-mandatory"
                        style={{ maxHeight: '320px' }}>
                        {EINVOICING_SNAPSHOTS.map((snap, i) => (
                          <div
                            key={i}
                            className="shrink-0 w-full snap-center relative group/img"
                          >
                            <img
                              src={snap.src}
                              alt={snap.alt}
                              className="w-full object-cover object-top"
                              style={{ maxHeight: '320px', display: 'block' }}
                            />
                            {/* Bottom fade */}
                            <div className="absolute bottom-0 inset-x-0 h-10 pointer-events-none"
                              style={{ background: 'linear-gradient(to bottom, transparent, rgba(250,244,236,0.9))' }} />
                          </div>
                        ))}
                      </div>

                      {/* Scroll indicator dots */}
                      <div className="flex items-center justify-center gap-1.5 py-2.5"
                        style={{ background: '#FAF4EC' }}>
                        {EINVOICING_SNAPSHOTS.map((_, i) => (
                          <span key={i} className={`rounded-full transition-all ${i === 0 ? 'w-4 h-1.5 bg-[#72213A]' : 'w-1.5 h-1.5 bg-[#72213A]/25'}`} />
                        ))}
                        <span className="ml-2 text-[10px] font-body text-[#38272D]/45">scroll to see more ›</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-[#72213A]/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#72213A] hover:text-[#54172A] hover:underline"
                >
                  <BookOpen className="w-4 h-4 text-[#E5B86B]" />
                  <span>Read Copy &amp; Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {project.fullContent?.substackLink && (
                  <a
                    href={project.fullContent.substackLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#72213A] hover:underline"
                  >
                    <span>Read on Substack</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E5B86B]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
