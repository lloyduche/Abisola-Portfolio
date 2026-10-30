import React from 'react';
import { Project } from '../types';
import { X, ArrowUpRight, BookOpen, Mail } from 'lucide-react';

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
  { src: '/smartpos-email-4.png', alt: 'Smart POS Email — CTAs: Request Your FREE RedPay POS Today' },
  { src: '/smartpos-email-5.png', alt: 'Smart POS Email — Move to RedPay product suite + compliance badges' },
];

const VIRTUALACCOUNT_SNAPSHOTS = [
  { src: '/virtualaccount-email-1.png', alt: 'Virtual Accounts Email — Banner: Make Bank Transfers Payments Easier to Confirm' },
  { src: '/virtualaccount-email-2.png', alt: 'Virtual Accounts Email — What Does This Mean For Your Business?' },
  { src: '/virtualaccount-email-3.png', alt: 'Virtual Accounts Email — Value Pillars: Instant Confirmation & Real-time Reporting' },
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// ── Shared email snapshots gallery block ─────────────────────────────────────
interface ModalSnapshotsBlockProps {
  snapshots: { src: string; alt: string }[];
  subject: string;
  caption: string;
  label: string;
}

const ModalSnapshotsBlock: React.FC<ModalSnapshotsBlockProps> = ({ snapshots, subject, caption, label }) => (
  <div className="mb-6">
    <div className="flex items-center gap-2 text-xs font-semibold text-[#4A0E1C] mb-3">
      <Mail className="w-3.5 h-3.5 text-[#E5B86B]" />
      <span className="uppercase tracking-wider">{label}</span>
    </div>

    <div className="rounded-2xl overflow-hidden border border-[#4A0E1C]/10 shadow-sm">
      {/* Email chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 border-b border-[#4A0E1C]/08 bg-[#FAF4EC]"
      >
        <span className="w-2 h-2 rounded-full bg-[#4A0E1C]/20 block" />
        <span className="w-2 h-2 rounded-full bg-[#D995A9]/35 block" />
        <span className="w-2 h-2 rounded-full bg-[#E5B86B]/45 block" />
        <div className="flex-1 ml-2 px-3 py-1 rounded-full text-[10px] font-body text-[#38272D]/45 bg-white border border-[#4A0E1C]/08 truncate">
          <span className="font-semibold text-[#4A0E1C]">Subject: </span>
          {subject}
        </div>
      </div>

      {/* Stacked scrollable snapshots */}
      <div className="overflow-y-auto" style={{ maxHeight: '480px' }}>
        {snapshots.map((snap, i) => (
          <div
            key={i}
            className={i < snapshots.length - 1 ? 'border-b border-[#4A0E1C]/08' : ''}
          >
            <img
              src={snap.src}
              alt={snap.alt}
              className="w-full object-cover object-top block"
            />
          </div>
        ))}
      </div>

      {/* Caption bar */}
      <div
        className="px-4 py-2.5 flex items-center justify-between bg-[#FAF4EC]"
      >
        <p className="text-[10px] font-body text-[#38272D]/50">{caption}</p>
        <span className="text-[10px] font-semibold text-[#4A0E1C] font-body">
          {snapshots.length} sections shown ↑
        </span>
      </div>
    </div>
  </div>
);

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 rounded-3xl bg-white border border-[#4A0E1C]/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio & Close Button */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#4A0E1C]/10 text-xs font-semibold uppercase tracking-wider text-[#4A0E1C]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#E5B86B]" />
            <span>{project.tagCategory}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF4EC] text-[#38272D]/70 hover:text-[#4A0E1C] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title */}
        <h3 className="font-headline font-semibold text-2xl sm:text-3xl text-[#4A0E1C] leading-snug mb-4">
          {project.title}
        </h3>

        {/* Hook */}
        {project.hook && (
          <div className="mb-6 p-4 rounded-xl bg-[#FAF4EC] border-l-4 border-[#4A0E1C] text-sm font-body text-[#38272D]">
            <span className="font-semibold text-[#4A0E1C] block text-xs uppercase mb-1">
              {project.id === 'p7' ? 'Work Disciplines:' : 'Strategic Hook:'}
            </span>
            {project.hook}
          </div>
        )}

        {/* Subject & Preheader */}
        {project.fullContent?.subject && (
          <div className="p-4 mb-6 rounded-xl bg-[#FAF4EC] text-xs font-body space-y-1.5 border border-[#4A0E1C]/10">
            <div>
              <span className="font-semibold text-[#4A0E1C] uppercase">
                {project.id === 'p7' ? 'Featured Long-Form Article: ' : 'Subject Line: '}
              </span>
              <span className="text-[#38272D] font-medium">{project.fullContent.subject}</span>
            </div>
            {project.fullContent.preheader && (
              <div>
                <span className="font-semibold text-[#38272D]/70 uppercase">Preheader: </span>
                <span className="text-[#38272D]/85">{project.fullContent.preheader}</span>
              </div>
            )}
          </div>
        )}

        {/* Copy Excerpt */}
        {project.fullContent?.excerpt && (
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38272D]/60 block mb-3">
              {project.id === 'p7' ? 'Selected Article Excerpt' : 'Selected Copy Excerpt'}
            </span>
            <div className="p-6 rounded-2xl bg-[#FAF4EC]/60 border border-[#4A0E1C]/10 space-y-3 font-body text-base text-[#38272D]/90 leading-relaxed">
              {project.fullContent.excerpt.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* ── Email Snapshots (E-Invoicing project only) ── */}
        {project.id === 'p1' && (
          <ModalSnapshotsBlock
            snapshots={EINVOICING_SNAPSHOTS}
            subject="₦200,000. The Cost of Ignoring Nigeria E-Invoicing Mandate"
            caption="RedPay E-Invoicing Campaign · redtech | RedPay · 2025"
            label="Email Newsletter — Original Design Snapshots"
          />
        )}

        {/* ── Virtual Accounts & Smart POS Email Snapshots (p2) ── */}
        {project.id === 'p2' && (
          <div className="space-y-6">
            <ModalSnapshotsBlock
              snapshots={VIRTUALACCOUNT_SNAPSHOTS}
              subject="Why Businesses Need a Smarter Way to Confirm Bank Transfers"
              caption="Virtual Accounts Campaign · redtech | RedPay · 2025"
              label="Virtual Accounts Email — Original Design Snapshots"
            />
            <ModalSnapshotsBlock
              snapshots={SMARTPOS_SNAPSHOTS}
              subject="The Smart POS Built for Growing Businesses"
              caption="Smart POS Campaign · redtech | RedPay · 2025"
              label="Smart POS Email — Original Design Snapshots"
            />
          </div>
        )}

        {/* ── Webinar Email Snapshots (p4) ── */}
        {project.id === 'p4' && (
          <div className="space-y-6">
            <ModalSnapshotsBlock
              snapshots={WEBINAR_WOMEN_SNAPSHOTS}
              subject="When Women Move: Scaling Through Digital Commerce — RedSpace Webinar"
              caption="RedSpace International Women's Month Masterclass · Redtech Limited · 2026"
              label="01. Women's Month Webinar — Original Design Snapshots"
            />
            <ModalSnapshotsBlock
              snapshots={WEBINAR_EINVOICING_SNAPSHOTS}
              subject="E-Invoicing in Nigeria: Tax, Regulatory & Compliance Demystified"
              caption="RedSpace Webinar organised in partnership with Nigeria Revenue Service (NRS) · 2026"
              label="02. E-Invoicing in Nigeria Webinar — Original Design Snapshots"
            />
          </div>
        )}

        {/* ── Newsletter Analytics / Performance Dashboard (p6) ── */}
        {project.id === 'p6' && (
          <div className="mb-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4A0E1C]">
              <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
              <span className="uppercase tracking-wider">Campaign Performance Dashboard</span>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[#4A0E1C]/10 shadow-sm bg-white">
              <img
                src="/newsletter-performance.png"
                alt="Momentum RedPay Newsletter & The Redtech Brief Performance Dashboard"
                className="w-full object-cover object-top block"
              />
              <div
                className="px-4 py-2.5 flex items-center justify-between bg-[#FAF4EC]"
              >
                <p className="text-[10px] font-body text-[#38272D]/50">
                  Performance Reporting · Momentum RedPay Newsletter &amp; The Redtech Brief
                </p>
                <span className="text-[10px] font-semibold text-[#4A0E1C] font-body">
                  Verified Analytics
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Strategic Details */}
        {project.fullContent?.details && (
          <div className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#38272D]/60 block mb-2">
              {project.id === 'p7' ? 'Additional Business Articles' : 'Context & Results'}
            </span>
            <div className="p-4 rounded-xl bg-[#FAF4EC] font-body text-sm leading-relaxed text-[#38272D]/85 whitespace-pre-line border border-[#4A0E1C]/10">
              {project.fullContent.details}
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#4A0E1C]/10 font-body text-sm">
          <div className="flex flex-wrap items-center gap-4">
            {project.fullContent?.links?.map((lnk, lIdx) => (
              <a
                key={lIdx}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A0E1C] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read: {lnk.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            ))}

            {project.fullContent?.blogLink && (
              <a
                href={project.fullContent.blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A0E1C] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Full Article</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            )}

            {project.fullContent?.mediumLink && (
              <a
                href={project.fullContent.mediumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A0E1C] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Essay on Medium</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            )}

            {project.fullContent?.substackLink && (
              <a
                href={project.fullContent.substackLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A0E1C] hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Full Essay on Substack</span>
                <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full border border-[#4A0E1C]/20 text-[#4A0E1C] font-semibold hover:bg-[#FAF4EC] transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
