import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import { AnimatedSection } from './animations/AnimatedSection';
import { TiltCard } from './animations/TiltCard';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Social Media content & copy',
    message: '',
  });

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xljjokyr';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abisolaaoluwatoyin@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(false);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiry: formData.projectType,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-20 sm:py-28 relative border-t border-[#4A0E1C]/12 bg-[#FAF3E3] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#0D5BEB] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D5BEB]" />
            <span>Let’s Work Together</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl lg:text-6xl text-[#2A050F] tracking-tight">
            Need someone to put your ideas into words?
          </h2>
          <div className="font-body text-lg text-[#3E131C] mt-6 leading-relaxed space-y-4">
            <p>
              I write content, copy and stories for founders, brands, businesses and individuals who have something to say but need the right words to say it.
            </p>
            <p>
              From website and product copy, email marketing, newsletters and campaign content to corporate communications, editorial writing, articles, personal essays and creative writing, I help bring ideas to life through writing that informs, connects and holds attention.
            </p>
            <p className="font-medium text-[#0D5BEB]">
              Whether you’re building a brand, communicating with your audience, developing a publication or trying to tell a story that matters, let’s make the words work for you.
            </p>
            <p className="font-semibold text-[#2A050F] pt-2 font-headline italic text-xl">
              Have a project in mind? Let’s talk.
            </p>
          </div>
        </div>

        {/* Direct Contact Action Row (Electric Sapphire 10% on primary email button) */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="mailto:abisolaaoluwatoyin@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full sapphire-btn text-white text-sm font-semibold shadow-[0_4px_18px_rgba(13,91,235,0.38)] transition-all"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>Send Email Directly</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full cyber-pill text-[#2A050F] text-sm font-medium hover:text-[#0D5BEB] hover:border-[#0D5BEB]/40 shadow-sm transition-all border border-[#4A0E1C]/14 bg-[#FFFDF9]"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#0D5BEB]" />
                <span>Copy: abisolaaoluwatoyin@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="https://www.linkedin.com/in/abisola-oluwatoyin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full cyber-pill text-[#2A050F] text-sm font-medium hover:text-[#0D5BEB] hover:border-[#0D5BEB]/40 shadow-sm transition-all border border-[#4A0E1C]/14 bg-[#FFFDF9]"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-4 h-4 text-[#0D5BEB]" />
          </a>

          <a
            href="https://abisolawrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full cyber-pill text-[#2A050F] text-sm font-medium hover:text-[#0D5BEB] hover:border-[#0D5BEB]/40 shadow-sm transition-all border border-[#4A0E1C]/14 bg-[#FFFDF9]"
          >
            <span>Abisola Writes Substack</span>
            <ArrowUpRight className="w-4 h-4 text-[#0D5BEB]" />
          </a>
        </div>

        {/* Contact Form Card */}
        <TiltCard
          glowColor="sapphire"
          className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border border-[#4A0E1C]/14 shadow-2xl"
        >
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#4A0E1C]/12 pb-4 mb-6">
                <h3 className="font-headline font-semibold text-2xl text-[#2A050F]">
                  Start a Conversation
                </h3>
                <p className="text-sm text-[#6E3844] font-body mt-1">
                  Fill out the form below to discuss a campaign, project, publication or communication role.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#2A050F] font-mono">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Adebayo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF3E3] border border-[#4A0E1C]/15 text-[#2A050F] placeholder:text-[#857567] focus:border-[#0D5BEB] focus:ring-1 focus:ring-[#0D5BEB] outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#2A050F] font-mono">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF3E3] border border-[#4A0E1C]/15 text-[#2A050F] placeholder:text-[#857567] focus:border-[#0D5BEB] focus:ring-1 focus:ring-[#0D5BEB] outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#2A050F] font-mono">
                  Nature of Inquiry
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF3E3] border border-[#4A0E1C]/15 text-[#2A050F] focus:border-[#0D5BEB] focus:ring-1 focus:ring-[#0D5BEB] outline-none text-sm transition-all cursor-pointer"
                >
                  <option value="Social Media content & copy">Social Media content &amp; copy</option>
                  <option value="Email Copywriting & Conversion Funnels">Email Copywriting &amp; Conversion Funnels</option>
                  <option value="Product & Website Messaging">Product &amp; Website Messaging</option>
                  <option value="Internal Storytelling & Executive Comms">Internal Storytelling &amp; Executive Comms</option>
                  <option value="Full-Time / Contract Leadership Role">Full-Time / Contract Leadership Role</option>
                  <option value="Editorial & Essay Commissions">Editorial &amp; Essay Commissions</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#2A050F] font-mono">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your scope, objectives, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF3E3] border border-[#4A0E1C]/15 text-[#2A050F] placeholder:text-[#857567] focus:border-[#0D5BEB] focus:ring-1 focus:ring-[#0D5BEB] outline-none text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button (Electric Sapphire 10%) */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-full sapphire-btn text-white disabled:opacity-60 text-sm font-bold inline-flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(13,91,235,0.4)] transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formError && (
                <p className="text-sm font-body text-[#942642] mt-2">
                  Something went wrong. Please try again or email directly at abisolaaoluwatoyin@gmail.com.
                </p>
              )}
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <h3 className="font-headline font-semibold text-3xl text-[#2A050F]">
                Message Received!
              </h3>
              <p className="font-body text-base text-[#3E131C] max-w-md mx-auto">
                Thank you, {formData.name}. Your inquiry has been dispatched to Abisola's inbox. Expect a response shortly.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Social Media content & copy', message: '' });
                }}
                className="font-body text-xs font-semibold text-[#0D5BEB] hover:text-[#0848C4] underline pt-2 cursor-pointer"
              >
                Send Another Message &rarr;
              </button>
            </div>
          )}
        </TiltCard>

      </div>
    </AnimatedSection>
  );
};
