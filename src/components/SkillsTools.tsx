import React from 'react';
import { PenTool, Wrench, CheckCircle } from 'lucide-react';

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
          <rect width="24" height="24" rx="5" className="fill-[#FAF4EC]"/>
          <path fill="#FF6719" d="M19.5 7.2H4.5V5h15v2.2zM4.5 9.2V20l7.5-4.2 7.5 4.2V9.2H4.5zM19.5 2.8H4.5V5h15V2.8z"/>
        </svg>
      )
    },
    {
      name: 'Notion',
      category: 'Workspace & Docs',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" className="fill-[#FAF4EC]"/>
          <path className="fill-black" d="M4.5 4.2c.7.6 1 .5 2.4.4l13.2-.8c.3 0 0-.3-.1-.4l-1.6-1c-.6-.5-1.3-.7-2.1-.6L3.9 2.8c-.6 0-.6.3-.4.5l1 .9zm-.6 3.5v13.1c0 .8.5 1.2 1.3 1.1l14.5-.8c.8 0 1.1-.6 1.1-1.3V6.6c0-.6-.3-1-.8-.9L4.7 6.5c-.6 0-.8.4-.8 1.2zm13.7.9c.1.4 0 .8-.4.9l-.7.1v8.9c-.4.2-.8.4-1.3.4-.6 0-1-.3-1.5-.9l-4.8-7.5v7.1l1.4.3c.1.4-.2.7-.6.7l-3.4.2c-.1-.4 0-.8.4-.9l.9-.2V9.5l-1.3-.1c-.1-.4.1-.8.5-.8l3.6-.2 5 7.6V9l-1.2-.2c-.1-.4.2-.7.6-.7l3.1-.2z"/>
        </svg>
      )
    },
    {
      name: 'Canva',
      category: 'Visual Design & Creatives',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <circle cx="12" cy="12" r="11" fill="#00C4CC"/>
          <path fill="#FFFFFF" d="M14.8 15.6c-1.1.7-2.3 1-3.6 1-3.5 0-5.7-2.4-5.7-5.5 0-3.2 2.3-5.6 5.8-5.6 1.4 0 2.5.4 3.4 1.1-.3.5-.7 1.1-1.1 1.6-.7-.5-1.4-.8-2.3-.8-2.3 0-3.8 1.6-3.8 3.7 0 2.1 1.5 3.7 3.7 3.7.8 0 1.6-.2 2.3-.7.4.5.9 1 1.3 1.5z"/>
        </svg>
      )
    },
    {
      name: 'Zoho CRM',
      category: 'CRM & Pipeline',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect x="2" y="2" width="9" height="9" rx="2" fill="#E42527"/>
          <rect x="13" y="2" width="9" height="9" rx="2" fill="#22AC38"/>
          <rect x="2" y="13" width="9" height="9" rx="2" fill="#0090D9"/>
          <rect x="13" y="13" width="9" height="9" rx="2" fill="#F8A51D"/>
        </svg>
      )
    },
    {
      name: 'Asana',
      category: 'Project Management',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" className="fill-[#FAF4EC]"/>
          <circle cx="12" cy="7.2" r="3.6" fill="#F06A6A"/>
          <circle cx="6.8" cy="16.2" r="3.6" fill="#F06A6A"/>
          <circle cx="17.2" cy="16.2" r="3.6" fill="#F06A6A"/>
        </svg>
      )
    },
    {
      name: 'Trello',
      category: 'Workflows & Boards',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#0079BF"/>
          <rect x="4.5" y="4.5" width="6" height="13" rx="1.5" fill="#FFFFFF"/>
          <rect x="13.5" y="4.5" width="6" height="8.5" rx="1.5" fill="#FFFFFF"/>
        </svg>
      )
    },
    {
      name: 'Calendly',
      category: 'Scheduling & Meetings',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <circle cx="12" cy="12" r="11" fill="#006BFF"/>
          <path fill="#FFFFFF" d="M12 6.5C8.96 6.5 6.5 8.96 6.5 12S8.96 17.5 12 17.5c2.31 0 4.29-1.43 5.12-3.48l-2.02-.79c-.53 1.32-1.79 2.27-3.1 2.27-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5c1.31 0 2.57.95 3.1 2.27l2.02-.79C16.29 7.93 14.31 6.5 12 6.5z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      category: 'B2B & Communications',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#0A66C2"/>
          <path fill="#FFFFFF" d="M7.3 9H4.6v8.5h2.7V9zM5.9 4.5c-.9 0-1.6.7-1.6 1.6s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6c0-.9-.7-1.6-1.6-1.6zm4.8 4.5h2.6v1.2h.1c.4-.7 1.3-1.4 2.6-1.4 2.8 0 3.3 1.8 3.3 4.2v4.5h-2.7v-4c0-1-.1-2.2-1.4-2.2s-1.6 1.1-1.6 2.2v4h-2.9V9z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      category: 'Visual & Brand Storytelling',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <defs>
            <radialGradient id="igToolGrad" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497"/>
              <stop offset="5%" stopColor="#fdf497"/>
              <stop offset="45%" stopColor="#fd5949"/>
              <stop offset="60%" stopColor="#d6249f"/>
              <stop offset="90%" stopColor="#285AEB"/>
            </radialGradient>
          </defs>
          <rect width="24" height="24" rx="5.5" fill="url(#igToolGrad)"/>
          <path fill="#FFFFFF" d="M12 6.8c-2.8 0-5.2 2.4-5.2 5.2s2.4 5.2 5.2 5.2 5.2-2.4 5.2-5.2-2.4-5.2-5.2-5.2zm0 8.5c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm6.5-8.7c0 .6-.5 1.1-1.1 1.1s-1.1-.5-1.1-1.1.5-1.1 1.1-1.1 1.1.5 1.1 1.1zM18.8 4H5.2C4.5 4 4 4.5 4 5.2v13.6c0 .7.5 1.2 1.2 1.2h13.6c.7 0 1.2-.5 1.2-1.2V5.2c0-.7-.5-1.2-1.2-1.2zm-.8 13.8c0 .6-.5 1-1 1H7c-.6 0-1-.5-1-1V7c0-.6.5-1 1-1h10c.6 0 1 .5 1 1v10.8z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      category: 'Short-Form Video & Audio',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#000000"/>
          <path fill="#25F4EE" d="M16.6 8.2c-.8-.5-1.3-1.4-1.4-2.4h-2.3v11.1c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6.1.9.2v-2.4c-.3 0-.6-.1-.9-.1-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1V9.9c1 .7 2.2 1.1 3.5 1.1V8.6c-.8 0-1.5-.2-2.2-.4z"/>
          <path fill="#FE2C55" d="M16.1 7.7c-.8-.5-1.3-1.4-1.4-2.4h-1.8v11.1c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6.1.9.2v-1.9c-.3 0-.6-.1-.9-.1-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1V9.9c1 .7 2.2 1.1 3.5 1.1V8.6c-.9 0-1.7-.3-2.7-.9z"/>
          <path fill="#FFFFFF" d="M16.3 7.9c-.8-.5-1.3-1.4-1.4-2.4H13v11.1c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .6.1.9.2v-2.1c-.3 0-.6-.1-.9-.1-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1 5.1-2.3 5.1-5.1V9.9c1 .7 2.2 1.1 3.5 1.1V8.6c-.8 0-1.6-.2-2.3-.7z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      category: 'Direct Outreach & Thought Leadership',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#000000"/>
          <path fill="#FFFFFF" d="M17.4 4.5h2.5l-5.4 6.2 6.4 8.5h-5l-3.9-5.1-4.5 5.1H5l5.8-6.6L4.7 4.5h5.1l3.5 4.7 4.1-4.7zm-.9 13.2h1.4L8.1 5.9H6.6l9.9 11.8z"/>
        </svg>
      )
    },
    {
      name: 'Medium',
      category: 'Editorial & Articles',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" className="fill-[#FAF4EC]"/>
          <circle cx="6.5" cy="12" r="4.8" className="fill-black"/>
          <ellipse cx="14.5" cy="12" rx="2.6" ry="4.8" className="fill-black"/>
          <ellipse cx="19.8" cy="12" rx="1" ry="4.5" className="fill-black"/>
        </svg>
      )
    },
    {
      name: 'Meta Suite',
      category: 'Campaign & Audience Management',
      icon: (
        <svg viewBox="0 0 24 24" className="w-9 h-9 sm:w-10 sm:h-10">
          <rect width="24" height="24" rx="5" fill="#0668E1"/>
          <path fill="#FFFFFF" d="M16.9 8.2c-1.3 0-2.4.7-3.1 1.7-.7-1-1.8-1.7-3.1-1.7-2.3 0-4.1 1.9-4.1 4.2 0 2.5 1.7 4.6 4.1 5.6.8.3 1.7.5 2.6.5.9 0 1.8-.2 2.6-.5 2.4-1 4.1-3.1 4.1-5.6 0-2.3-1.8-4.2-4.1-4.2zm-6.2 7.7c-1.8-.7-3-2.1-3-3.7 0-1.6 1.2-2.9 2.7-2.9 1 0 1.9.6 2.4 1.5l-2.1 5.1zm5.9-1.5c-.8.8-1.8 1.4-2.8 1.7l2.1-5.1c.5-.9 1.4-1.5 2.4-1.5 1.5 0 2.7 1.3 2.7 2.9 0 1.6-1.8 3.1-4.4 3.9v-.1z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="skills-tools" className="py-16 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A0E1C] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Capabilities &amp; Stack</span>
          </div>
          <h2 className="font-headline font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#4A0E1C] tracking-tight">
            Skills &amp; Tools
          </h2>
          <p className="font-body text-sm sm:text-base lg:text-lg text-[#38272D]/80 mt-2 sm:mt-3 leading-relaxed">
            The core competencies, communication disciplines, and digital toolstack supporting high-impact marketing and brand storytelling.
          </p>
        </div>

        {/* Two-Column Grid: Skills on Left, Tools on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">

          {/* Left Column: Skills (8 items) */}
          <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#4A0E1C]/10 shadow-sm space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#4A0E1C]/10">
              <div className="w-10 h-10 rounded-xl bg-[#4A0E1C]/10 flex items-center justify-center text-[#4A0E1C]">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-xl sm:text-2xl text-[#4A0E1C]">
                  Core Skills
                </h3>
                <p className="text-xs text-[#38272D]/70 font-body">
                  Writing, strategy, and audience-facing communication
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF4EC] border border-[#4A0E1C]/10 flex items-start gap-3 text-xs sm:text-sm font-body font-medium text-[#38272D]"
                >
                  <CheckCircle className="w-4 h-4 text-[#4A0E1C] shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tools & Platforms (Enhanced Responsive Icon/Logo Grid) */}
          <div className="lg:col-span-5 p-5 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#4A0E1C]/10 shadow-sm space-y-5 sm:space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#4A0E1C]/10">
              <div className="w-10 h-10 rounded-xl bg-[#E5B86B]/20 flex items-center justify-center text-[#4A0E1C]">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-semibold text-xl sm:text-2xl text-[#4A0E1C]">
                  Tools &amp; Platforms
                </h3>
                <p className="text-xs text-[#38272D]/70 font-body">
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
                  className="group relative p-2.5 sm:p-3 rounded-2xl bg-[#FAF4EC] hover:bg-white border border-[#4A0E1C]/10 hover:border-[#4A0E1C]/30 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center cursor-pointer min-h-[78px] sm:min-h-[88px]"
                >
                  {/* Floating Tooltip for Desktop */}
                  <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 absolute -top-8 px-2.5 py-1 rounded-md bg-[#38272D] text-white text-[11px] whitespace-nowrap z-20 shadow-md font-body hidden sm:block">
                    {tool.name}
                  </div>

                  <div className="group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                    {tool.icon}
                  </div>

                  {/* Clean text label visible on mobile and desktop */}
                  <span className="text-[10px] sm:text-[11px] font-medium font-body text-[#38272D] text-center truncate w-full mt-1.5 leading-tight block">
                    {tool.name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-body text-[#38272D]/60 text-center pt-1">
              Tap or hover any platform to view stack details
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
