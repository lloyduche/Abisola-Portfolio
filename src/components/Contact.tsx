import React, { useState } from 'react';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';

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
    <section id="correspondence" className="py-20 lg:py-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">

        {/* Archival Drawer Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--cabinet-rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--cabinet-brass)]">&para; DRAWER V</span>
              <span>/</span>
              <span>CORRESPONDENCE &bull; OPEN INQUIRY DISPATCH</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--cabinet-burgundy)]">
              Good work begins with a good conversation.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="dossier-stamp">OPEN FOR MANDATES</span>
          </div>
        </div>

        {/* Introduction & Direct Correspondence Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-[var(--cabinet-rule)]">
          <div className="lg:col-span-7 font-serif text-xl text-[var(--ink)]/90 leading-relaxed space-y-4">
            <p>
              I’m open to opportunities in corporate communications, internal storytelling, marketing strategy and content development.
            </p>
            <p className="text-base text-[var(--ink)]/80">
              I’m interested in working with teams who value thoughtful ideas, clear communication and the power of deliberate storytelling.
            </p>
          </div>

          {/* Right Direct Inbox Slip */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--cabinet-rule)] lg:pl-10 space-y-5">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--cabinet-brass)] font-bold block mb-1">
                DIRECT INBOX //
              </span>
              <a
                href="mailto:abisolaaoluwatoyin@gmail.com"
                className="font-serif font-bold text-xl sm:text-2xl text-[var(--cabinet-burgundy)] hover:text-[var(--cabinet-brass)] transition-colors break-all underline decoration-[var(--cabinet-rule)] underline-offset-4"
              >
                abisolaaoluwatoyin@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--ink-secondary)] hover:text-[var(--cabinet-burgundy)] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600 font-bold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[var(--cabinet-brass)]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <span className="text-[var(--cabinet-rule)]">&bull;</span>

              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--cabinet-brass)] font-bold hover:underline"
              >
                <span>Substack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-[var(--cabinet-rule)]">&bull;</span>

              <a
                href="https://linkedin.com/in/abisola-oluwatoyin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--ink-secondary)] hover:text-[var(--cabinet-burgundy)]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="font-serif italic text-xs text-[var(--ink-secondary)] pt-2">
              ~ Direct correspondence received by Abisola Oluwatoyin.
            </div>
          </div>
        </div>

        {/* Archival Inquiry Transmission Sheet */}
        <div className="border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] p-8 sm:p-14 rounded-sm shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[var(--cabinet-rule)] font-mono text-xs uppercase text-[var(--ink-secondary)]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--cabinet-brass)]" />
              <span>DISPATCH INQUIRY OR BRIEF</span>
            </div>
            <span>CABINET ARCHIVE &bull; CONFIDENTIAL TRANSMISSION</span>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--cabinet-burgundy)]">
                    01 // YOUR NAME &bull; ORGANIZATION
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Adebayo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="cabinet-input"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--cabinet-burgundy)]">
                    02 // WORK EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="cabinet-input"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--cabinet-burgundy)]">
                  03 // NATURE OF ENGAGEMENT
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="cabinet-input cursor-pointer"
                  style={{ background: 'transparent' }}
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
                <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--cabinet-burgundy)]">
                  04 // MESSAGE &amp; BRIEF OVERVIEW
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share a few details regarding your scope, audience, and timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="cabinet-input resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <button
                  type="submit"
                  className="font-mono text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 text-[var(--cabinet-cream)] bg-[var(--cabinet-burgundy)] hover:opacity-90 px-8 py-4 rounded-sm transition-opacity shadow-md"
                >
                  <Send className="w-4 h-4 text-[var(--cabinet-brass)]" />
                  <span>Transmit Letter to Cabinet Archive &rarr;</span>
                </button>

                <div className="font-serif italic text-xs text-[var(--ink-secondary)]">
                  Expected response within 24–48 hours.
                </div>
              </div>
            </form>
          ) : (
            <div className="py-16 text-center space-y-4">
              <div className="font-display font-bold text-3xl sm:text-4xl text-[var(--cabinet-burgundy)]">
                Correspondence Received.
              </div>
              <p className="font-serif italic text-lg text-[var(--ink)]/85 max-w-md mx-auto">
                Thank you, {formData.name}. Your note has been safely catalogued in the correspondence drawer.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Marketing & Corporate Communications', message: '' });
                }}
                className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cabinet-brass)] underline pt-2"
              >
                Send Another Dispatch &rarr;
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
