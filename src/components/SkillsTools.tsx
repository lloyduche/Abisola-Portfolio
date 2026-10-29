import React from 'react';
import { PenTool, Wrench, CheckCircle } from 'lucide-react';

export const SkillsTools: React.FC = () => {
  const skills = [
    'Email and campaign copywriting',
    'Product and website messaging',
    'Webinar and event communications',
    'Corporate and internal communications',
    'Newsletter and editorial writing',
    'Thought leadership and brand storytelling',
    'Lead nurturing and campaign reporting',
    'Creative writing',
  ];

  const tools = [
    'Canva',
    'Microsoft Office',
    'Asana',
    'Calendly',
    'Medium',
    'Google Workspace',
    'Mailchimp',
    'Zoho CRM',
    'Notion',
    'Trello',
    'LinkedIn',
    'Instagram',
    'TikTok',
    'X',
    'Meta Business Suite',
    'Substack',
  ];

  return (
    <section id="skills-tools" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#72213A] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Capabilities &amp; Stack</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl text-[#72213A] tracking-tight">
            Skills &amp; Tools
          </h2>
          <p className="font-body text-base sm:text-lg text-[#38272D]/80 mt-3 leading-relaxed">
            The core competencies, communication disciplines, and digital toolstack supporting high-impact marketing and brand storytelling.
          </p>
        </div>

        {/* Two-Column Grid: Skills on Left, Tools on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Skills (8 items) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-[#72213A]/10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#72213A]/10">
              <div className="w-10 h-10 rounded-xl bg-[#72213A]/10 flex items-center justify-center text-[#72213A]">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-2xl text-[#72213A]">
                  Core Skills
                </h3>
                <p className="text-xs text-[#38272D]/70 font-body">
                  Writing, strategy, and audience-facing communication
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FAF4EC] border border-[#72213A]/10 flex items-start gap-3 text-sm font-body font-medium text-[#38272D]"
                >
                  <CheckCircle className="w-4 h-4 text-[#72213A] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tools */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white border border-[#72213A]/10 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#72213A]/10">
              <div className="w-10 h-10 rounded-xl bg-[#E5B86B]/20 flex items-center justify-center text-[#72213A]">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-2xl text-[#72213A]">
                  Tools &amp; Platforms
                </h3>
                <p className="text-xs text-[#38272D]/70 font-body">
                  Software and platforms used in day-to-day work
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-xs font-body font-medium bg-[#FAF4EC] text-[#38272D] border border-[#72213A]/10 hover:border-[#72213A]/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
