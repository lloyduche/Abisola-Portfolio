import React from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { FileText, ArrowUpRight } from 'lucide-react';

interface ResumeExpertiseProps {
  onOpenResume: () => void;
}

export const ResumeExpertise: React.FC<ResumeExpertiseProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 sm:py-28 bg-[#F0E7DB]/45 border-y border-[#72213A]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#72213A] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Career Overview</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#72213A] tracking-tight">
            Resume &amp; Expertise
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
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#72213A]/10 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#72213A]/10">
                <div>
                  <h3 className="font-headline font-semibold text-2xl text-[#72213A]">
                    {exp.role}
                  </h3>
                  <div className="font-body font-semibold text-base text-[#38272D]">
                    {exp.company}
                  </div>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#FAF4EC] border border-[#72213A]/15 text-xs font-medium text-[#72213A] self-start sm:self-auto">
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

        {/* Two-Column Bottom Row: Areas of Expertise & View Resume CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Areas of Expertise */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-white border border-[#72213A]/10 shadow-sm space-y-4">
            <h4 className="font-headline font-semibold text-xl text-[#72213A]">
              Areas of Expertise
            </h4>
            <div className="flex flex-wrap gap-2 pt-2">
              {RESUME_DATA.areasOfExpertise.map((item, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-xs font-body font-medium bg-[#FAF4EC] text-[#38272D] border border-[#72213A]/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: View Full Resume CTA */}
          <div className="lg:col-span-4 p-8 sm:p-10 rounded-3xl bg-[#72213A] text-white shadow-md space-y-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#E5B86B] mx-auto sm:mx-0">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-semibold text-2xl">
              Curriculum Vitae
            </h4>
            <p className="font-body text-xs text-white/80 leading-relaxed">
              For a more detailed overview of my professional experience, qualifications and achievements, view my full resume.
            </p>
            <button
              onClick={onOpenResume}
              className="w-full py-3.5 px-6 rounded-full bg-white text-[#72213A] text-sm font-semibold hover:bg-[#FAF4EC] flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-4 h-4 text-[#72213A]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
