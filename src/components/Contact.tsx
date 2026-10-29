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
    <section id="contact" className="py-20 lg:py-28 border-b" style={{ borderColor: 'var(--ink-rule)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">

        {/* Epilogue Marker */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase mb-4" style={{ color: 'var(--ink-muted)' }}>
          <span className="font-bold" style={{ color: 'var(--red-pencil)' }}>¶ EPILOGUE</span>
          <span>/</span>
          <span>OPEN CORRESPONDENCE</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-tight" style={{ color: 'var(--ink)' }}>
          Good work begins with a good conversation.
        </h2>

        <p className="font-serif text-lg sm:text-xl text-ink/85 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
          I’m open to opportunities in corporate communications, internal storytelling, marketing strategy and content development. I’m interested in working with teams who value thoughtful ideas, clear communication and the power of deliberate storytelling.
        </p>

        {/* Correspondence Action Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="mailto:abisolaaoluwatoyin@gmail.com"
            className="px-7 py-3.5 rounded text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 text-white transition-all shadow-sm"
            style={{ background: 'var(--ink)' }}
          >
            <Mail className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
            <span>Write to Me (Direct Email)</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-6 py-3.5 rounded border text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 transition-all hover:bg-black/5"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule-strong)',
              color: 'var(--ink)',
            }}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                <span>Copy Email Address</span>
              </>
            )}
          </button>
        </div>

        {/* The Letterform Inquiry Sheet */}
        <div className="paper-sheet p-8 sm:p-12 rounded-lg border text-left">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="pb-4 border-b flex items-center justify-between" style={{ borderColor: 'var(--ink-rule)' }}>
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl" style={{ color: 'var(--ink)' }}>
                    Dispatch a Letter or Inquiry
                  </h3>
                  <p className="font-serif text-sm text-ink/70 mt-1">
                    Send a note regarding your project, timeline, or open role.
                  </p>
                </div>
                <span className="font-mono text-xs text-[var(--red-pencil)] hidden sm:inline">
                  CONFIDENTIAL
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider block mb-1.5 font-bold" style={{ color: 'var(--ink)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Adebayo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded border text-sm text-ink font-serif focus:outline-none focus:border-[var(--red-pencil)]"
                    style={{
                      background: 'var(--paper)',
                      borderColor: 'var(--ink-rule)',
                    }}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider block mb-1.5 font-bold" style={{ color: 'var(--ink)' }}>
                    Corporate / Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded border text-sm text-ink font-serif focus:outline-none focus:border-[var(--red-pencil)]"
                    style={{
                      background: 'var(--paper)',
                      borderColor: 'var(--ink-rule)',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider block mb-1.5 font-bold" style={{ color: 'var(--ink)' }}>
                  Nature of Inquiry
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded border text-sm text-ink font-serif focus:outline-none focus:border-[var(--red-pencil)]"
                  style={{
                    background: 'var(--paper)',
                    borderColor: 'var(--ink-rule)',
                  }}
                >
                  <option value="Marketing & Corporate Communications">Marketing &amp; Corporate Communications</option>
                  <option value="Email Copywriting & Conversion Funnels">Email Copywriting &amp; Conversion Funnels</option>
                  <option value="Product & Website Messaging">Product &amp; Website Messaging</option>
                  <option value="Internal Storytelling & Executive Comms">Internal Storytelling &amp; Executive Comms</option>
                  <option value="Full-Time / Contract Leadership Role">Full-Time / Contract Leadership Role</option>
                  <option value="Editorial & Essay Commissions">Editorial &amp; Essay Commissions</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider block mb-1.5 font-bold" style={{ color: 'var(--ink)' }}>
                  Message / Brief
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a few details regarding your scope, audience, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded border text-sm text-ink font-serif focus:outline-none focus:border-[var(--red-pencil)] resize-none"
                  style={{
                    background: 'var(--paper)',
                    borderColor: 'var(--ink-rule)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 text-white transition-all"
                style={{ background: 'var(--ink)' }}
              >
                <Send className="w-4 h-4" style={{ color: 'var(--red-pencil)' }} />
                <span>Send Letter ✍</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full border border-dashed flex items-center justify-center mx-auto" style={{ borderColor: 'var(--red-pencil)' }}>
                <Check className="w-6 h-6" style={{ color: 'var(--red-pencil)' }} />
              </div>
              <h4 className="font-display font-bold text-2xl" style={{ color: 'var(--ink)' }}>
                Letter Received, {formData.name || 'friend'}!
              </h4>
              <p className="font-serif text-base text-ink/80 max-w-md mx-auto">
                Your correspondence has been placed on my desk. I will reply shortly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-mono font-bold text-[var(--red-pencil)] underline mt-2"
              >
                Send another note
              </button>
            </div>
          )}
        </div>

        {/* Author's Public Networks */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 font-mono text-xs">
          <a
            href="https://www.linkedin.com/in/abisola-oluwatoyin/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded border flex items-center gap-2 transition-all hover:border-[var(--red-pencil)]"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule)',
              color: 'var(--ink)',
            }}
          >
            <span style={{ color: 'var(--red-pencil)' }}><LinkedInIcon /></span>
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://abisolawrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded border flex items-center gap-2 transition-all hover:border-[var(--red-pencil)]"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule)',
              color: 'var(--ink)',
            }}
          >
            <BookOpen className="w-3.5 h-3.5" style={{ color: 'var(--red-pencil)' }} />
            <span>SUBSTACK (ABISOLA WRITES)</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <a
            href="https://www.instagram.com/p/DL18Ka-s6xj"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded border flex items-center gap-2 transition-all hover:border-[var(--red-pencil)]"
            style={{
              background: 'var(--paper-leaf)',
              borderColor: 'var(--ink-rule)',
              color: 'var(--ink)',
            }}
          >
            <span style={{ color: 'var(--red-pencil)' }}><InstagramIcon /></span>
            <span>PROPERTY FEATURE</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>
    </section>
  );
};
