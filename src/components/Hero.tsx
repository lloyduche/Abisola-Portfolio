import React from 'react';
import { HERO_DATA } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-8 sm:pt-14 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-ink/70">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>DISPATCH REF: 2026.COMMS.01</span>
            <span className="text-ink/30">/</span>
            <span className="text-accent uppercase">ENTERPRISE COPYWRITING & BRAND STRATEGY</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-ink/60">
            <span className="hidden sm:inline">CLEARANCE:</span>
            <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 font-bold uppercase text-[10px]">
              VERIFIED PORTFOLIO
            </span>
          </div>
        </div>

        {/* Main 2-Column Command Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold Strategic Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-accent/10 border border-accent/20 w-fit mb-6">
              <Activity className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                {HERO_DATA.title}
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] text-ink mb-6">
              Language with intent. <br />
              <span className="font-serif italic font-normal text-accent">
                Strategy with soul.
              </span>
            </h1>

            {/* Strategic Lede */}
            <p className="text-base sm:text-xl text-ink/80 leading-relaxed max-w-2xl font-normal mb-8">
              {HERO_DATA.lede}
            </p>

            {/* Core Roles Grid Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10 max-w-xl">
              {HERO_DATA.roles.map((role, i) => (
                <div
                  key={role}
                  className="flex items-center gap-2 px-3.5 py-2.5 rounded border text-xs font-mono font-medium tracking-wide"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--border)',
                    color: 'var(--ink)',
                  }}
                >
                  <span className="text-accent font-bold">0{i + 1} //</span>
                  <span>{role}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 sm:px-8 py-3.5 rounded font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all duration-200 shadow-sm"
                style={{
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                }}
              >
                <span>EXPLORE WORK ARCHIVE</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 rounded border font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all duration-200 hover:bg-black/5"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'var(--ink)',
                }}
              >
                <span>READ ON SUBSTACK</span>
                <ArrowUpRight className="w-4 h-4 text-accent" />
              </a>
            </div>
          </div>

          {/* Right Column: Tactical Visual Terminal */}
          <div className="lg:col-span-5">
            <div
              className="relative p-6 sm:p-8 rounded-2xl border transition-all duration-300"
              style={{
                background: 'var(--bg-card)',
                borderColor: 'var(--border)',
                boxShadow: '0 20px 40px var(--shadow-color)',
              }}
            >
              {/* Terminal Frame Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent2 opacity-60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ink/20" />
                  <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-ink/60 font-bold">
                    TRANSMISSION TERMINAL
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-accent">SECURE</span>
              </div>

              {/* High-Resolution Portrait Visual */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border mb-6" style={{ borderColor: 'var(--border)' }}>
                <img
                  src="/abisola.svg"
                  alt="Abisola Oluwatoyin - Corporate Communications & Brand Strategy"
                  className="w-full h-full object-cover"
                />
                {/* Precision Overlay Telemetry */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                    EXECUTIVE PROFILE
                  </span>
                  <div className="font-display font-bold text-lg leading-tight mt-0.5">
                    Abisola Oluwatoyin
                  </div>
                  <p className="text-xs text-white/80 font-mono mt-1">
                    Writer · Corporate Comms · Brand Storyteller
                  </p>
                </div>

                <div className="absolute top-3 right-3 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  LIVE
                </div>
              </div>

              {/* Executive Impact Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                <div className="text-center p-2 rounded bg-black/5 dark:bg-white/5">
                  <div className="font-display font-extrabold text-base sm:text-lg text-accent">
                    ₦1.07Q
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-ink/60 mt-0.5 font-bold">
                    Fintech Hook
                  </div>
                </div>

                <div className="text-center p-2 rounded bg-black/5 dark:bg-white/5">
                  <div className="font-display font-extrabold text-base sm:text-lg text-accent">
                    12%
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-ink/60 mt-0.5 font-bold">
                    Conversion
                  </div>
                </div>

                <div className="text-center p-2 rounded bg-black/5 dark:bg-white/5">
                  <div className="font-display font-extrabold text-base sm:text-lg text-accent">
                    823+
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-ink/60 mt-0.5 font-bold">
                    Attendees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Proof Metric Bar */}
        <div
          className="mt-14 p-6 sm:p-8 rounded-xl border grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
          }}
        >
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/50 font-bold block mb-1">
              [ 01 // LEAD IMPACT ]
            </span>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent">
              12% Active
            </div>
            <p className="text-xs text-ink/70 font-mono mt-1">
              Exceeded standard 5% benchmark by 240% at Redtech
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/50 font-bold block mb-1">
              [ 02 // AUDIENCE SCALE ]
            </span>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent">
              823+ Leads
            </div>
            <p className="text-xs text-ink/70 font-mono mt-1">
              Webinar funnels across hospitality & fiscal taxation
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/50 font-bold block mb-1">
              [ 03 // READERSHIP ]
            </span>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent">
              28k+ Views
            </div>
            <p className="text-xs text-ink/70 font-mono mt-1">
              1,469+ Substack subscribers on Abisola Writes
            </p>
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-ink/50 font-bold block mb-1">
              [ 04 // FOUNDATION ]
            </span>
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-accent">
              B.A. (2:1)
            </div>
            <p className="text-xs text-ink/70 font-mono mt-1">
              English Language syntax & linguistics discipline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
