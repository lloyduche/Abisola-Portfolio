import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

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
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#72213A] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Let’s Work Together</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl lg:text-6xl text-[#72213A] tracking-tight">
            Need someone to put your ideas into words?
          </h2>
          <div className="font-body text-lg text-[#38272D]/90 mt-6 leading-relaxed space-y-4">
            <p>
              I write content, copy and stories for founders, brands, businesses and individuals who have something to say but need the right words to say it.
            </p>
            <p>
              From website and product copy, email marketing, newsletters and campaign content to corporate communications, editorial writing, articles, personal essays and creative writing, I help bring ideas to life through writing that informs, connects and holds attention.
            </p>
            <p className="font-medium text-[#72213A]">
              Whether you’re building a brand, communicating with your audience, developing a publication or trying to tell a story that matters, let’s make the words work for you.
            </p>
          </div>
        </div>

        {/* Direct Contact Action Row */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="mailto:abisolaaoluwatoyin@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#72213A] text-white text-sm font-medium hover:bg-[#54172A] shadow-md transition-all"
          >
            <Mail className="w-4 h-4 text-[#E5B86B]" />
            <span>Send Email Directly</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#72213A]/20 text-[#38272D] text-sm font-medium hover:bg-[#FAF4EC] shadow-sm transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-semibold">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#72213A]" />
                <span>Copy: abisolaaoluwatoyin@gmail.com</span>
              </>
            )}
          </button>

          <a
            href="https://www.linkedin.com/in/abisola-oluwatoyin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white border border-[#72213A]/20 text-[#72213A] text-sm font-medium hover:bg-[#FAF4EC] shadow-sm transition-all"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="https://abisolawrites.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white border border-[#72213A]/20 text-[#72213A] text-sm font-medium hover:bg-[#FAF4EC] shadow-sm transition-all"
          >
            <span>Abisola Writes</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Contact Form Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-[#72213A]/10 shadow-sm">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="pb-4 border-b border-[#72213A]/10">
                <h3 className="font-headline font-semibold text-2xl text-[#72213A]">
                  Send a Direct Message or Inquiry
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#38272D]/75 mt-1">
                  Share a brief regarding your project, scope, timeline, or open role.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#38272D]">
                    Your Name
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
                  <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#38272D]">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="editorial-input"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#38272D]">
                  Nature of Inquiry
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="editorial-input cursor-pointer"
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
                <label className="text-xs font-semibold uppercase tracking-wider block mb-2 text-[#38272D]">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your scope, objectives, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="editorial-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#72213A] hover:bg-[#54172A] text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Send className="w-4 h-4 text-[#E5B86B]" />
                <span>Send Message</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <h3 className="font-headline font-semibold text-3xl text-[#72213A]">
                Message Received!
              </h3>
              <p className="font-body text-base text-[#38272D]/85 max-w-md mx-auto">
                Thank you, {formData.name}. Your inquiry has been dispatched to Abisola's inbox. Expect a response shortly.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', projectType: 'Marketing & Corporate Communications', message: '' });
                }}
                className="font-body text-xs font-semibold text-[#72213A] underline pt-2"
              >
                Send Another Message &rarr;
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
