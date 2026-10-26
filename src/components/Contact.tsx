import React, { useState } from 'react';
import { Mail, Copy, Check, Send, BookOpen, ArrowUpRight } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Marketing & Corporate Communications',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abisolaaoluwatoyin@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-accent/10 border border-accent/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
          <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
            [ 06 // DIRECT CHANNEL &amp; INQUIRY ]
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight mb-6 leading-tight">
          Good work begins with a good conversation.
        </h2>

        <p className="text-base sm:text-lg text-ink/80 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          I’m open to opportunities in corporate communications, internal storytelling, marketing and content strategy. I’m interested in working with teams who value thoughtful ideas, clear communication and the power of deliberate storytelling.
        </p>

        {/* Direct Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="mailto:abisolaaoluwatoyin@gmail.com"
            className="px-7 py-3.5 rounded text-xs sm:text-sm font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all duration-200 shadow-sm"
            style={{
              background: 'var(--accent)',
              color: '#FFFFFF',
            }}
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME DIRECTLY</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded border text-xs sm:text-sm font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all duration-200"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border-strong)',
              color: 'var(--ink)',
            }}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span>COPIED TO CLIPBOARD!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-accent" />
                <span>COPY EMAIL ADDRESS</span>
              </>
            )}
          </button>
        </div>

        {/* Inquiry Terminal Form */}
        <div
          className="p-8 sm:p-10 rounded-3xl border text-left"
          style={{
            background: 'var(--bg-card)',
            borderColor: 'var(--border)',
            boxShadow: '0 20px 40px var(--shadow-color)',
          }}
        >
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="pb-4 mb-2 border-b" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                  Transmit an Inquiry or Project Brief
                </h3>
                <p className="text-xs text-ink/60 font-mono mt-1">
                  Fill in your details below and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/70 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Adebayo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border text-sm text-ink focus:outline-none focus:border-accent"
                    style={{
                      background: 'var(--bg)',
                      borderColor: 'var(--border)',
                    }}
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/70 block mb-1.5">
                    Corporate / Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border text-sm text-ink focus:outline-none focus:border-accent"
                    style={{
                      background: 'var(--bg)',
                      borderColor: 'var(--border)',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/70 block mb-1.5">
                  Nature of Engagement
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border text-sm text-ink focus:outline-none focus:border-accent"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <option value="Marketing & Corporate Communications">Marketing &amp; Corporate Communications</option>
                  <option value="Email Copywriting & Conversion Funnels">Email Copywriting &amp; Conversion Funnels</option>
                  <option value="Product & Website Messaging">Product &amp; Website Messaging</option>
                  <option value="Internal Storytelling & Executive Comms">Internal Storytelling &amp; Executive Comms</option>
                  <option value="Full-Time / Contract Leadership Role">Full-Time / Contract Leadership Role</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink/70 block mb-1.5">
                  Brief Overview / Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a few details regarding your scope, timeline, and strategic goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border text-sm text-ink focus:outline-none focus:border-accent resize-none"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--border)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded font-mono font-bold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200"
                style={{
                  background: 'var(--accent)',
                  color: '#FFFFFF',
                }}
              >
                <Send className="w-4 h-4" />
                <span>DISPATCH TRANSMISSION →</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-2xl text-ink">
                Transmission Received, {formData.name || 'there'}!
              </h4>
              <p className="text-sm text-ink/70 max-w-md mx-auto">
                Your message has been logged. I look forward to connecting and discussing how we can turn your ideas into meaningful commercial outcomes.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-mono font-bold text-accent underline mt-2"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

        {/* Verified Network Footprint */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="https://www.linkedin.com/in/abisola-oluwatoyin/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all duration-200"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--ink)',
            }}
          >
            <span className="text-accent"><LinkedInIcon /></span>
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>

          <a
            href="https://abisolawrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all duration-200"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--ink)',
            }}
          >
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span>SUBSTACK (ABISOLA WRITES)</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>

          <a
            href="https://www.instagram.com/p/DL18Ka-s6xj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all duration-200"
            style={{
              background: 'var(--bg-card)',
              borderColor: 'var(--border)',
              color: 'var(--ink)',
            }}
          >
            <span className="text-accent"><InstagramIcon /></span>
            <span>PROPERTY FEATURE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
};
