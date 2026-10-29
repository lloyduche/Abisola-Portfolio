import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { X, Printer, ArrowUpRight } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto p-6 sm:p-12 rounded-3xl bg-white border border-[#72213A]/15 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Folio & Actions */}
        <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#72213A]/10 text-xs font-semibold uppercase tracking-wider text-[#72213A]">
          <span>Official Resume &bull; Curriculum Vitae</span>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#38272D]/70 hover:text-[#72213A]"
            >
              <Printer className="w-4 h-4 text-[#E5B86B]" />
              <span>Print Resume</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#FAF4EC] text-[#38272D]/70 hover:text-[#72213A] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Masterhead */}
        <div className="pb-8 mb-8 border-b border-[#72213A]/10">
          <h2 className="font-headline font-bold text-3xl sm:text-4xl text-[#72213A]">
            Abisola Oluwatoyin
          </h2>
          <div className="font-body font-semibold text-lg text-[#38272D] mt-1">
            Writer | Marketing, Communications &amp; Brand Storytelling
          </div>
          <div className="text-xs font-body text-[#38272D]/75 mt-2 flex flex-wrap gap-x-6 gap-y-1">
            <span>Email: abisolaaoluwatoyin@gmail.com</span>
            <span>Location: Lagos, Nigeria</span>
            <span>LinkedIn: linkedin.com/in/abisola-oluwatoyin</span>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8 pb-8 border-b border-[#72213A]/10">
          <h3 className="font-headline font-semibold text-xl text-[#72213A] mb-3">
            Professional Summary
          </h3>
          <p className="font-body text-base text-[#38272D]/90 leading-relaxed font-normal">
            {RESUME_DATA.summary}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8 pb-8 border-b border-[#72213A]/10 space-y-6">
          <h3 className="font-headline font-semibold text-xl text-[#72213A]">
            Professional Experience
          </h3>

          <div className="space-y-6">
            {RESUME_DATA.experiences.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FAF4EC]/60 border border-[#72213A]/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="font-headline font-semibold text-xl text-[#72213A]">
                      {exp.role}
                    </h4>
                    <div className="font-body font-medium text-sm text-[#38272D]">
                      {exp.company} &bull; Lagos, Nigeria
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#72213A] bg-white px-3 py-1 rounded-full border border-[#72213A]/10 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 font-body text-sm text-[#38272D]/85 pt-1">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5B86B] mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-8 pb-8 border-b border-[#72213A]/10">
          <h3 className="font-headline font-semibold text-xl text-[#72213A] mb-3">
            Education
          </h3>
          <div>
            <div className="font-body font-semibold text-base text-[#38272D]">
              {RESUME_DATA.education.degree}
            </div>
            <div className="font-body text-sm text-[#38272D]/75">
              {RESUME_DATA.education.school} &bull; Department of English
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div className="mb-8 pb-6 border-b border-[#72213A]/10">
          <h3 className="font-headline font-semibold text-xl text-[#72213A] mb-3">
            Areas of Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.areasOfExpertise.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-body font-medium rounded-lg bg-[#FAF4EC] text-[#38272D] border border-[#72213A]/10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2 font-body text-sm">
          <a
            href="mailto:abisolaaoluwatoyin@gmail.com"
            className="text-[#72213A] font-semibold inline-flex items-center gap-1 hover:underline"
          >
            <span>Inquire Directly</span>
            <ArrowUpRight className="w-4 h-4 text-[#E5B86B]" />
          </a>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#72213A] text-white font-medium hover:bg-[#54172A] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
