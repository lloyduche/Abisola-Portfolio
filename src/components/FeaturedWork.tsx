import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, BookOpen, Mail } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';
import { TiltCard } from './animations/TiltCard';

// ── Snapshot data ────────────────────────────────────────────────────────────

const EINVOICING_SNAPSHOTS = [
  { src: '/einvoicing-email-1.png', alt: 'E-Invoicing Email — Hero: ₦200K Penalty Hook & Section 104 Mandate Scope' },
  { src: '/einvoicing-email-2.png', alt: 'E-Invoicing Email — What This Means: 3 Pillars, Compliance & Real-Time Validation' },
  { src: '/einvoicing-email-3.png', alt: 'E-Invoicing Email — Built for Every Business: ERP vs Non-ERP & Validated Invoice Anatomy' },
  { src: '/einvoicing-email-4.png', alt: 'E-Invoicing Email — End-to-End Encryption, CTAs, Move to RedPay & Regulatory Badges' },
];

const SMARTPOS_SNAPSHOTS = [
  { src: '/smartpos-email-1.png', alt: 'Smart POS Email — Banner: One POS. Endless Possibilities.' },
  { src: '/smartpos-email-2.png', alt: 'Smart POS Email — Local Transactions. Global Payments.' },
  { src: '/smartpos-email-3.png', alt: 'Smart POS Email — Access to Merchant Loans + Empowering Businesses' },
  { src: '/smartpos-email-4.png', alt: 'Smart POS Email — CTAs: Learn More / Request Your FREE RedPay POS' },
  { src: '/smartpos-email-5.png', alt: 'Smart POS Email — Move to RedPay suite + compliance footer' },
];

const VIRTUALACCOUNT_SNAPSHOTS = [
  { src: '/virtualaccount-email-1.png', alt: 'Virtual Accounts Email — Banner: Make Bank Transfers Payments Easier to Confirm' },
  { src: '/virtualaccount-email-2.png', alt: 'Virtual Accounts Email — What Does This Mean For Your Business?' },
  { src: '/virtualaccount-email-3.png', alt: 'Virtual Accounts Email — What This Means: Instant Confirmation + Real-time Reporting' },
  { src: '/virtualaccount-email-4.png', alt: 'Virtual Accounts Email — CTAs: Get Started with Virtual Accounts Service & Move to RedPay' },
  { src: '/virtualaccount-email-5.png', alt: 'Virtual Accounts Email — Regulatory & Compliance Footer' },
];

const WEBINAR_WOMEN_SNAPSHOTS = [
  { src: '/webinar-email-1.png', alt: 'RedSpace Webinar Email — Hero Banner: When Women Move: A Digital Commerce Masterclass' },
  { src: '/webinar-email-2.png', alt: 'RedSpace Webinar Email — Event Details, E-Commerce Market Growth & Register to Attend CTA' },
  { src: '/webinar-email-3.png', alt: 'RedSpace Webinar Email — Follow Us & Contact Us Footer' },
];

const WEBINAR_EINVOICING_SNAPSHOTS = [
  { src: '/webinar-einvoicing-1.png', alt: 'RedSpace Webinar Email — Header: E-Invoicing in Nigeria: Tax, Regulatory & Compliance Demystified (NRS Partnership)' },
  { src: '/webinar-einvoicing-2.png', alt: 'RedSpace Webinar Email — 6 Core Agendas & Register Now CTA' },
  { src: '/webinar-einvoicing-3.png', alt: 'RedSpace Webinar Email — Follow Us & Contact Us Footer' },
];

// ── Shared reusable email mockup reel ────────────────────────────────────────

interface EmailMockupCardProps {
  snapshots: { src: string; alt: string }[];
  subject: string;
  preheader?: string;
  label: string;
}

const EmailMockupCard: React.FC<EmailMockupCardProps> = ({ snapshots, subject, label }) => (
  <div className="mt-2 space-y-2.5 sm:space-y-3 w-full">
    {/* Label */}
    <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5BEB]">
      <Mail className="w-3.5 h-3.5 text-[#0D5BEB]" />
      <span className="uppercase tracking-wider text-[11px] sm:text-xs font-mono">{label}</span>
    </div>

    {/* Card with chrome */}
    <div className="relative rounded-2xl overflow-hidden border border-[#4A0E1C]/14 shadow-lg bg-[#FFFDF9] w-full">
      {/* Email client chrome */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#4A0E1C]/12 bg-[#F5ECE0]">
        <span className="w-2 h-2 rounded-full bg-[#BD506B] block shrink-0" />
        <span className="w-2 h-2 rounded-full bg-amber-400 block shrink-0" />
        <span className="w-2 h-2 rounded-full bg-emerald-500 block shrink-0" />
        <div className="flex-1 min-w-0 ml-1.5 sm:ml-2 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono text-[#2A050F] bg-[#FFFDF9] border border-[#4A0E1C]/14 truncate">
          <span className="font-semibold text-[#0D5BEB]">Subject: </span>
          {subject}
        </div>
      </div>

      {/* Horizontal scroll reel — snap per slide */}
      <div
        className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory touch-pan-x overscroll-x-contain w-full"
        style={{ maxHeight: '280px' }}
      >
        {snapshots.map((snap, i) => (
          <div
            key={i}
            className="flex-none w-full snap-start border-r border-[#4A0E1C]/12 last:border-r-0"
          >
            <img
              src={snap.src}
              alt={snap.alt}
              className="w-full object-cover object-top block"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Slide indicator bar */}
      <div className="px-3 sm:px-4 py-1.5 sm:py-2 border-t border-[#4A0E1C]/12 bg-[#F5ECE0] flex items-center justify-between text-[10px] sm:text-xs font-mono text-[#6E3844]">
        <span className="font-semibold text-[#0D5BEB]">
          Slide 1 of {snapshots.length}
        </span>
        <span className="text-[#857567]">
          Scroll horizontally to view &rarr;
        </span>
      </div>
    </div>
  </div>
);

// ── Main Featured Work Component ─────────────────────────────────────────────

interface FeaturedWorkProps {
  onSelectProject: (p: Project) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

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
        if (activeCategory === 'Events') return p.tagCategory.toLowerCase().includes('event');
        if (activeCategory === 'Internal Comms') return p.tagCategory.toLowerCase().includes('internal');
        if (activeCategory === 'Newsletters') return p.tagCategory.toLowerCase().includes('newsletter');
        if (activeCategory === 'Thought Leadership') {
          return p.tagCategory.toLowerCase().includes('thought') || p.tagCategory.toLowerCase().includes('essay');
        }
        return p.tagCategory.toLowerCase().includes(activeCategory.toLowerCase());
      });

  return (
    <AnimatedSection
      id="featured-work"
      className="py-16 sm:py-24 lg:py-28 relative border-y border-[#4A0E1C]/12 bg-[#FAF3E3]/40 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#EBDDBF]/30 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0D5BEB]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0D5BEB] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
            <span>Selected Work &amp; Writing</span>
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#2A050F] tracking-tight">
            Featured work across marketing, corporate comms &amp; storytelling.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#3E131C] mt-3 leading-relaxed">
            A selection of email campaigns, corporate communications, webinars, website content, newsletters and thought leadership writing.
          </p>
          <div className="text-xs font-mono text-[#0D5BEB] mt-2">
            Showing {filteredProjects.length} of {PROJECTS.length} Selected Projects
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'sapphire-btn text-white font-semibold shadow-[0_4px_16px_rgba(13,91,235,0.35)]'
                  : 'cyber-pill text-[#4A0E1C] hover:text-[#0D5BEB] hover:border-[#0D5BEB]/30 border border-[#4A0E1C]/14 bg-[#FFFDF9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const isFullWidth = project.id === 'p1' || project.id === 'p2' || project.id === 'p4';
            const glowColor = idx % 2 === 0 ? 'sapphire' : 'bordeaux';

            return (
              <TiltCard
                key={project.id}
                glowColor={glowColor}
                className={`p-4 sm:p-7 md:p-8 lg:p-10 rounded-3xl bg-[#FFFDF9] border border-[#4A0E1C]/14 shadow-xl flex flex-col justify-between w-full overflow-hidden ${
                  isFullWidth ? 'md:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  {/* Category Badge & Index */}
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0D5BEB]">
                    <span className="px-3 py-1 rounded-full cyber-pill text-[11px] font-mono border border-[#4A0E1C]/14 text-[#4A0E1C] bg-[#FAF3E3]">{project.tagCategory}</span>
                    <span className="text-[#857567] font-mono text-[11px]">PROJECT 0{idx + 1}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-[#2A050F] leading-snug">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="font-body text-base text-[#3E131C] leading-relaxed">
                    {project.shortDesc}
                  </p>

                  {/* Hook */}
                  {project.hook && (
                    <div className="p-4 rounded-xl bg-[#FAF3E3] border-l-4 border-[#4A0E1C] text-sm font-body text-[#3E131C] leading-relaxed border border-[#4A0E1C]/12">
                      <span className="font-semibold text-[#4A0E1C] block text-xs uppercase tracking-wider mb-1">
                        {project.id === 'p7' ? 'Work Disciplines:' : 'Key Framing / Strategy:'}
                      </span>
                      {project.hook}
                    </div>
                  )}

                  {/* Subject Line & Preheader */}
                  {project.fullContent?.subject && (
                    <div className="p-4 rounded-xl bg-[#FAF3E3]/60 border border-[#4A0E1C]/12 text-xs font-body space-y-1 text-[#3E131C]">
                      <div>
                        <strong className="text-[#0D5BEB] font-semibold">
                          {project.id === 'p7' ? 'Featured Article:' : 'Subject Line:'}
                        </strong>{' '}
                        {project.fullContent.subject}
                      </div>
                      {project.fullContent.preheader && (
                        <div>
                          <strong className="text-[#6E3844]">Preheader:</strong> {project.fullContent.preheader}
                        </div>
                      )}
                    </div>
                  )}

                  {/* ── E-Invoicing Email Mockup (p1) ── */}
                  {project.id === 'p1' && (
                    <EmailMockupCard
                      snapshots={EINVOICING_SNAPSHOTS}
                      subject="₦200,000. The Cost of Ignoring Nigeria E-Invoicing Mandate"
                      label="Email Campaign Mockup"
                    />
                  )}

                  {/* ── Payment Product Emails: Virtual Accounts & Smart POS Mockups (p2) ── */}
                  {project.id === 'p2' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                      <EmailMockupCard
                        snapshots={VIRTUALACCOUNT_SNAPSHOTS}
                        subject="Why Businesses Need a Smarter Way to Confirm Bank Transfers"
                        preheader="Make Bank Transfer Payments Easier to Confirm"
                        label="Virtual Accounts Email Campaign"
                      />
                      <EmailMockupCard
                        snapshots={SMARTPOS_SNAPSHOTS}
                        subject="The Smart POS Built for Growing Businesses"
                        preheader="One POS. Endless Possibilities. Accept more. Manage better. Grow faster."
                        label="Smart POS Email Campaign"
                      />
                    </div>
                  )}

                  {/* ── Webinar Email Sequence Mockups in 2 Columns (p4) ── */}
                  {project.id === 'p4' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                      <EmailMockupCard
                        snapshots={WEBINAR_WOMEN_SNAPSHOTS}
                        subject="When Women Move: Scaling Through Digital Commerce — RedSpace Webinar"
                        label="Women's Month Masterclass"
                      />
                      <EmailMockupCard
                        snapshots={WEBINAR_EINVOICING_SNAPSHOTS}
                        subject="E-Invoicing in Nigeria: Tax, Regulatory & Compliance Demystified"
                        label="E-Invoicing RedSpace Webinar (NRS Partnership)"
                      />
                    </div>
                  )}

                  {/* ── Newsletter Analytics / Performance Snapshot (p6) ── */}
                  {project.id === 'p6' && (
                    <div className="mt-3 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5BEB]">
                        <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
                        <span className="uppercase tracking-wider">Campaign Performance Dashboard</span>
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-[#4A0E1C]/14 shadow-sm bg-[#FAF3E3]">
                        <img
                          src="/newsletter-performance.png"
                          alt="Momentum RedPay Newsletter & The Redtech Brief Performance Dashboard"
                          className="w-full object-cover object-top block"
                          style={{ maxHeight: '240px' }}
                        />
                      </div>
                    </div>
                  )}

                  {/* ── Thought Leadership Article & Excerpt Display (p7) ── */}
                  {project.id === 'p7' && (
                    <div className="space-y-4 pt-2">
                      <div className="p-5 rounded-2xl bg-[#FAF3E3] border border-[#4A0E1C]/14 space-y-2.5 font-body text-sm text-[#3E131C] leading-relaxed">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#0D5BEB] uppercase tracking-wider font-mono">
                          <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
                          <span>Selected Excerpt</span>
                        </div>
                        <p className="italic text-[#2A050F]">
                          &ldquo;Across Africa, digital payments and commerce are becoming part of how businesses operate, from roadside kiosks and social-media storefronts to supermarkets, hotels and large enterprises. The spread of mobile technology has helped drive this change...&rdquo;
                        </p>
                        <p className="text-xs text-[#6E3844]">
                          &ldquo;The technology may be digital, but the decisions remain practical: Did the money arrive? Can I use it now? Can I account for it later?&rdquo;
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#FAF3E3]/80 border border-[#4A0E1C]/12 text-xs font-body">
                        <span className="font-semibold text-[#0D5BEB] block mb-1.5 uppercase tracking-wide text-xs font-mono">
                          Additional Business Articles
                        </span>
                        <ul className="space-y-1 text-[#3E131C] list-disc list-inside">
                          <li>The Trust Layer: Why Governance Matters in Fintech</li>
                          <li>The Future of Fashion Retail in Nigeria: E-Commerce and Digital Payments</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons (Electric Sapphire 10% on button) */}
                <div className="pt-5 mt-5 border-t border-[#4A0E1C]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full sapphire-btn text-white transition-all text-xs sm:text-sm font-semibold cursor-pointer active:scale-95 shadow-md"
                  >
                    <BookOpen className="w-4 h-4 text-white" />
                    <span>{project.id === 'p7' ? 'Read Full Excerpt & Details' : 'Read Copy & Details'}</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </button>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    {project.fullContent?.links?.map((lnk, lIdx) => (
                      <a
                        key={lIdx}
                        href={lnk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D5BEB] hover:underline px-3 py-1.5 rounded-full cyber-pill sm:border-0 sm:bg-transparent sm:p-0"
                      >
                        <span>{lnk.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0D5BEB]" />
                      </a>
                    ))}

                    {project.fullContent?.blogLink && (
                      <a
                        href={project.fullContent.blogLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D5BEB] hover:underline px-3 py-1.5 rounded-full cyber-pill sm:border-0 sm:bg-transparent sm:p-0"
                      >
                        <span>Read Article</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0D5BEB]" />
                      </a>
                    )}

                    {project.fullContent?.mediumLink && (
                      <a
                        href={project.fullContent.mediumLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D5BEB] hover:underline"
                      >
                        <span>Medium Essay</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0D5BEB]" />
                      </a>
                    )}

                    {project.fullContent?.substackLink && (
                      <a
                        href={project.fullContent.substackLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D5BEB] hover:underline"
                      >
                        <span>Substack</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#0D5BEB]" />
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </AnimatedSection>
  );
};
