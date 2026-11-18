import React from 'react';
import { PenTool, Wrench, CheckCircle } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';
import { TiltCard } from './animations/TiltCard';

interface ToolItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

export const SkillsTools: React.FC = () => {
  const skills = [
    'Email and campaign copywriting',
    'Product and website messaging',
    'Webinar and event communications',
    'Corporate and internal communications',
    'Newsletter and editorial writing',
    'Thought leadership and brand storytelling',
    'Lead nurturing and campaign reporting',
    'Brand positioning & editorial strategy',
  ];

  const tools: ToolItem[] = [
    {
      name: 'Google Workspace',
      category: 'Productivity & Docs',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      )
    },
    {
      name: 'Microsoft Office',
      category: 'Productivity Suite',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect x="1.5" y="1.5" width="9.5" height="9.5" rx="1" fill="#F25022"/>
          <rect x="13" y="1.5" width="9.5" height="9.5" rx="1" fill="#7FBA00"/>
          <rect x="1.5" y="13" width="9.5" height="9.5" rx="1" fill="#00A4EF"/>
          <rect x="13" y="13" width="9.5" height="9.5" rx="1" fill="#FFB900"/>
        </svg>
      )
    },
    {
      name: 'Mailchimp',
      category: 'Email Marketing',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#FFE01B"/>
          <path fill="#241C15" d="M12 4.2c-4.1 0-7.4 3.3-7.4 7.4 0 2 .8 3.8 2.1 5.2.3.3.7.5 1.1.5h8.4c.4 0 .8-.2 1.1-.5 1.3-1.4 2.1-3.2 2.1-5.2 0-4.1-3.3-7.4-7.4-7.4zm-3 7.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm6 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2zm-3 4.2c-1.8 0-3.3-1-4.1-2.4-.1-.2 0-.5.2-.6.2-.1.5 0 .6.2.6 1.1 1.8 1.8 3.3 1.8s2.7-.7 3.3-1.8c.1-.2.4-.3.6-.2.2.1.3.4.2.6-.8 1.4-2.3 2.4-4.1 2.4z"/>
        </svg>
      )
    },
    {
      name: 'Substack',
      category: 'Publishing & Newsletters',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#FAF4EC"/>
          <path fill="#FF6719" d="M19.5 7.2H4.5V5h15v2.2zM4.5 9.2V20l7.5-4.2 7.5 4.2V9.2H4.5zM19.5 2.8H4.5V5h15V2.8z"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      category: 'Workspace & Docs',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#FFFFFF"/>
          <path fill="#000000" d="M4.5 4.2c.7.6 1 .5 2.4.4l13.2-.8c.3 0 0-.3-.1-.4l-1.6-1c-.6-.5-1.3-.7-2.1-.6L3.9 2.8c-.6 0-.6.3-.4.5l1 .9zm-.6 3.5v13.1c0 .8.5 1.2 1.3 1.1l14.5-.8c.8 0 1.1-.6 1.1-1.3V6.6c0-.6-.3-1-.8-.9L4.7 6.5c-.6 0-.8.4-.8 1.2zm13.7.9c.1.4 0 .8-.4.9l-.7.1v8.9c-.4.2-.8.4-1.3.4-.6 0-1-.3-1.5-.9l-4.8-7.5v7.1l1.4.3c.1.4-.2.7-.6.7l-3.4.2c-.1-.4 0-.8.4-.9l.9-.2V9.5l-1.3-.1c-.1-.4.1-.8.5-.8l3.6-.2 5 7.6V9l-1.2-.2c-.1-.4.2-.7.6-.7l3.1-.2z"/>
        </svg>
      )
    },
    {
      name: 'Canva',
      category: 'Design & Visuals',
      icon: (
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center text-white font-bold text-lg font-headline shadow-sm">
          C
        </div>
      )
    },
    {
      name: 'Medium',
      category: 'Long-Form Publishing',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#000000"/>
          <path fill="#FFFFFF" d="M13.5 12c0 3.2-1.6 5.8-3.6 5.8s-3.6-2.6-3.6-5.8 1.6-5.8 3.6-5.8 3.6 2.6 3.6 5.8zm5.2 0c0 3-0.8 5.5-1.8 5.5s-1.8-2.5-1.8-5.5 0.8-5.5 1.8-5.5 1.8 2.5 1.8 5.5zm2.1 0c0 2.6-0.3 4.8-0.6 4.8s-0.6-2.2-0.6-4.8 0.3-4.8 0.6-4.8 0.6 2.2 0.6 4.8z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      category: 'B2B & Thought Leadership',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#0A66C2"/>
          <path fill="#FFFFFF" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.63-1.63 1.64 1.64 0 0 0-1.63-1.63 1.64 1.64 0 0 0-1.63 1.63 1.64 1.64 0 0 0 1.63 1.63m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
        </svg>
      )
    },
  ];

  return (
    <AnimatedSection
      id="skills-tools"
      className="py-16 sm:py-24 lg:py-28 relative border-y border-[#18303D]/12 bg-[#F7F5F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF5E36] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF5E36]" />
            <span>Capabilities &amp; Stack</span>
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#0F1D24] tracking-tight">
            Skills &amp; Tools
          </h2>
          <p className="font-body text-sm sm:text-base lg:text-lg text-[#243A47] mt-2 sm:mt-3 leading-relaxed">
            The core competencies, communication disciplines, and digital toolstack supporting high-impact marketing and brand storytelling.
          </p>
        </div>

        {/* Two-Column Grid: Skills on Left, Tools on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left Column: Skills (8 items) */}
          <TiltCard
            glowColor="persimmon"
            className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#FCFBF9] border border-[#18303D]/14 shadow-xl space-y-5 sm:space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-[#18303D]/12">
              <div className="w-10 h-10 rounded-xl bg-[#FF5E36]/12 border border-[#FF5E36]/25 flex items-center justify-center text-[#FF5E36]">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-xl sm:text-2xl text-[#0F1D24]">
                  Core Skills
                </h3>
                <p className="text-xs text-[#59707E] font-body">
                  Writing, strategy, and audience-facing communication
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#F7F5F0] border border-[#18303D]/12 flex items-start gap-3 text-xs sm:text-sm font-body font-medium text-[#0F1D24]"
                >
                  <CheckCircle className="w-4 h-4 text-[#FF5E36] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </TiltCard>

          {/* Right Column: Tools & Platforms (Enhanced Responsive Icon/Logo Grid) */}
          <TiltCard
            glowColor="petrol"
            className="lg:col-span-5 p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#FCFBF9] border border-[#18303D]/14 shadow-xl space-y-5 sm:space-y-6"
          >
            <div className="flex items-center gap-3 pb-4 border-b border-[#18303D]/12">
              <div className="w-10 h-10 rounded-xl bg-[#18303D]/10 border border-[#18303D]/20 flex items-center justify-center text-[#18303D]">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-xl sm:text-2xl text-[#0F1D24]">
                  Tools &amp; Platforms
                </h3>
                <p className="text-xs text-[#59707E] font-body">
                  Software and platforms used in day-to-day work
                </p>
              </div>
            </div>

            {/* Icon / Logo Grid (4x4) */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  title={`${tool.name} · ${tool.category}`}
                  aria-label={`${tool.name} · ${tool.category}`}
                  className="group relative p-2.5 sm:p-3 rounded-2xl bg-[#F7F5F0] hover:bg-[#FCFBF9] border border-[#18303D]/12 hover:border-[#FF5E36]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center cursor-pointer min-h-[78px] sm:min-h-[88px]"
                >
                  {/* Floating Tooltip for Desktop */}
                  <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 absolute -top-8 px-2.5 py-1 rounded-md bg-[#0F1D24] border border-[#18303D] text-[#F7F5F0] text-[11px] whitespace-nowrap z-20 shadow-md font-body hidden sm:block">
                    {tool.name}
                  </div>

                  <div className="group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                    {tool.icon}
                  </div>

                  {/* Clean text label visible on mobile and desktop */}
                  <span className="text-[10px] sm:text-[11px] font-medium font-body text-[#0F1D24] text-center truncate w-full mt-1.5 leading-tight block">
                    {tool.name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-body text-[#59707E] text-center pt-1 font-mono">
              Tap or hover any platform to view stack details
            </p>
          </TiltCard>

        </div>

      </div>
    </AnimatedSection>
  );
};
