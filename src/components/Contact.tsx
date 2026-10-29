import React, { useState } from 'react';
import { RedArrow, EditorialStamp } from './ManuscriptMarks';
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
    <section id="contact" className="py-20 lg:py-32 border-b border-[var(--rule)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">

        {/* Broadsheet Folio Chapter Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--red-pencil)]">&para; CHAPTER VI</span>
              <span>/</span>
              <span>OPEN CORRESPONDENCE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-[var(--ink)]">
              Good work begins with a good conversation.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <EditorialStamp text="open for mandates" />
          </div>
        </div>

        {/* Introductory Manuscript Dispatch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-[var(--rule)]">
          <div className="lg:col-span-7 font-serif text-xl sm:text-2xl text-[var(--ink)]/90 leading-relaxed">
            <p className="mb-6">
              I’m open to opportunities in corporate communications, internal storytelling, marketing strategy and content development.
            </p>
            <p className="text-lg text-[var(--ink)]/80 font-normal">
              I’m interested in working with teams who value thoughtful ideas, clear communication and the power of deliberate storytelling.
            </p>
          </div>

          {/* Direct Address & Quick Links */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--rule)] lg:pl-10 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--ink-secondary)] block mb-1">
                DIRECT INBOX
              </span>
              <a
                href="mailto:abisolaaoluwatoyin@gmail.com"
                className="font-serif font-bold text-2xl text-[var(--ink)] hover:text-[var(--red-pencil)] transition-colors break-all underline decoration-[var(--rule)] underline-offset-4"
              >
                abisolaaoluwatoyin@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--ink-secondary)] hover:text-[var(--ink)] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-600 font-bold">Address Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[var(--red-pencil)]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <span className="text-[var(--rule)]">&bull;</span>

              <a
                href="https://abisolawrites.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--red-pencil)] hover:underline"
              >
                <span>Substack</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-[var(--rule)]">&bull;</span>

              <a
                href="https://linkedin.com/in/abisola-oluwatoyin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[var(--ink-secondary)] hover:text-[var(--ink)]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="font-hand text-lg text-[var(--red-pencil)] pt-4">
              ~ replies typically dispatched within 24–48 hours.
            </div>
          </div>
        </div>

        {/* The Open Inquiry Sheet (NO CARD BOXES — Open Form on Paper) */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[var(--rule)] font-mono text-xs uppercase tracking-widest text-[var(--ink-secondary)]">
            <div className="flex items-center gap-2">
              <RedArrow direction="right" />
              <span>TRANSMIT A BRIEF OR INQUIRY</span>
            </div>
            <span>EDITORIAL DESK // NIGERIA &bull; REMOTE GLOBAL</span>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--ink)]">
                    01 // YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Adebayo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="editorial-input"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--ink)]">
                    02 // WORK EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="editorial-input"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--ink)]">
                  03 // NATURE OF INQUIRY
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="editorial-input cursor-pointer"
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
                <label className="text-xs font-mono uppercase tracking-widest block mb-2 font-bold text-[var(--ink)]">
                  04 // MESSAGE &amp; BRIEF
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the core objective, context, timeline, or key challenge..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="editorial-input resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <button
                  type="submit"
                  className="font-mono text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 text-[var(--paper)] bg-[var(--ink)] px-8 py-4 hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4 text-[var(--red-pencil)]" />
                  <span>Dispatch Letter to Author &rarr;</span>
                </button>

                <div className="font-hand text-base text-[var(--red-pencil)]">
                  ( received directly by Abisola Oluwatoyin )
                </div>
              </div>
            </form>
          ) : (
            <div className="py-16 text-center space-y-4">
              <div className="font-display font-bold text-3xl sm:text-4xl text-[var(--ink)]">
                Correspondence Received.
              </div>
              <p className="font-serif italic text-xl text-[var(--ink)]/85 max-w-md mx-auto">
                Thank you, {formData.name}. Your note has been placed on the author's reading desk.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Marketing & Corporate Communications', message: '' });
                }}
                className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--red-pencil)] underline pt-4"
              >
                Send Another Note &rarr;
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
