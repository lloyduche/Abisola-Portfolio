import React, { useState } from 'react';
import { ConfettiBow } from './ConfettiBow';
import { Mail, Copy, Check, Send, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

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
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 },
      });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { y: 0.7 },
    });
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto text-center">
      {/* Big Confetti Bow */}
      <div className="flex justify-center mb-6">
        <ConfettiBow size="big" className="animate-wiggle" title="Tap me for confetti!" />
      </div>

      <span className="hand text-2xl text-theme-accent block mb-2">let's build together</span>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-theme-ink mb-5 leading-tight">
        Good work begins with a good conversation.
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-theme-ink/80 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
        I’m open to opportunities in communications, internal communications, marketing and content development. I’m interested in working with people who value thoughtful ideas, clear communication and the power of good storytelling.
      </p>

      {/* Main Action CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
        <a
          href="mailto:abisolaaoluwatoyin@gmail.com"
          className="px-7 py-3.5 rounded-full bg-theme-accent text-white font-bold text-base sm:text-lg border-2 border-theme-border shadow-[4px_4px_0_var(--color-border)] hover:shadow-[7px_7px_0_var(--color-border)] hover:-translate-y-0.5 transition-all flex items-center gap-2"
        >
          <Mail className="w-5 h-5" />
          <span>Email Me (abisolaaoluwatoyin@gmail.com)</span>
        </a>

        <button
          onClick={handleCopyEmail}
          className="px-6 py-3.5 rounded-full bg-theme-card text-theme-ink font-semibold text-base border-2 border-theme-border hover:bg-theme-ribbon transition-colors flex items-center gap-2"
        >
          {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
        </button>
      </div>

      {/* Interactive Inquiry Form */}
      <div className="max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-theme-card border-2 border-theme-border shadow-[10px_10px_0_var(--color-ribbon)] text-left">
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-theme-ink text-center mb-1">
              Have something in mind? Let’s talk.
            </h3>
            <p className="text-xs sm:text-sm text-theme-muted text-center mb-6">
              Whether it’s shaping a message, telling a brand’s story or creating content that connects, send me a brief note.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-theme-ink block mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Adebayo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-theme-border bg-theme-bg text-sm text-theme-ink focus:outline-none focus:border-theme-accent"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-theme-ink block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border-2 border-theme-border bg-theme-bg text-sm text-theme-ink focus:outline-none focus:border-theme-accent"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-theme-ink block mb-1">
                Project / Collaboration Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-theme-border bg-theme-bg text-sm text-theme-ink focus:outline-none focus:border-theme-accent"
              >
                <option value="Marketing & Corporate Communications">Marketing &amp; Corporate Communications</option>
                <option value="Email Copywriting & Funnels">Email Copywriting &amp; Funnels</option>
                <option value="Product & Website Messaging">Product &amp; Website Messaging</option>
                <option value="Internal Storytelling & Culture">Internal Storytelling &amp; Culture</option>
                <option value="Editorial & Creative Writing">Editorial &amp; Creative Writing</option>
                <option value="Full-Time / Contract Role">Full-Time / Contract Role Opportunity</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-theme-ink block mb-1">
                Project Overview / Note
              </label>
              <textarea
                rows={4}
                required
                placeholder="Share a few details about what you're working on, timeline, and goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-theme-border bg-theme-bg text-sm text-theme-ink focus:outline-none focus:border-theme-accent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-theme-accent text-white font-bold text-base border-2 border-theme-border shadow-[4px_4px_0_var(--color-border)] hover:shadow-[6px_6px_0_var(--color-border)] transition-all flex items-center justify-center gap-2 mt-4"
            >
              <Send className="w-4 h-4" />
              <span>Send Message &amp; Say Hello 🎀</span>
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <ConfettiBow size="medium" />
            <h4 className="font-display text-2xl font-bold text-theme-ink">
              Thank You, {formData.name || 'there'}!
            </h4>
            <p className="text-sm text-theme-muted max-w-md mx-auto">
              Your note has been received. I look forward to connecting and discussing how we can bring your ideas to life.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="text-xs font-bold text-theme-accent underline"
            >
              Send another note
            </button>
          </div>
        )}
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
        <a
          href="https://www.linkedin.com/in/abisola-oluwatoyin/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border-2 border-theme-border bg-white text-xs sm:text-sm font-semibold text-theme-ink hover:bg-theme-ribbon transition-colors flex items-center gap-2"
        >
          <span className="text-theme-accent"><LinkedInIcon /></span>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://abisolawrites.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border-2 border-theme-border bg-white text-xs sm:text-sm font-semibold text-theme-ink hover:bg-theme-ribbon transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-theme-accent" />
          <span>Substack (Abisola Writes)</span>
        </a>

        <a
          href="https://www.instagram.com/p/DL18Ka-s6xj"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border-2 border-theme-border bg-white text-xs sm:text-sm font-semibold text-theme-ink hover:bg-theme-ribbon transition-colors flex items-center gap-2"
        >
          <span className="text-theme-accent"><InstagramIcon /></span>
          <span>Instagram Property Feature</span>
        </a>
      </div>
    </section>
  );
};
