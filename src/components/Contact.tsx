import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abisolaaoluwatoyin@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4A0E1C] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E5B86B]" />
            <span>Let’s Work Together</span>
          </div>
          <h2 className="font-headline font-semibold text-3xl sm:text-5xl lg:text-6xl text-[#4A0E1C] tracking-tight">
            Need someone to put your ideas into words?
          </h2>
          <div className="font-body text-lg text-[#38272D]/90 mt-6 leading-relaxed space-y-4">
            <p>
              I write content, copy and stories for founders, brands, businesses and individuals who have something to say but need the right words to say it.
            </p>
            <p>
              From website and product copy, email marketing, newsletters and campaign content to corporate communications, editorial writing, articles, personal essays and creative writing, I help bring ideas to life through writing that informs, connects and holds attention.
            </p>
            <p className="font-medium text-[#4A0E1C]">
              Whether you’re building a brand, communicating with your audience, developing a publication or trying to tell a story that matters, let’s make the words work for you.
            </p>
            <p className="font-semibold text-[#4A0E1C] pt-2 font-headline italic text-xl">
              Have a project in mind? Let’s talk.
            </p>
          </div>
        </div>

        {/* Direct Contact Action Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#4A0E1C]/15 shadow-sm space-y-6">
          <div>
            <h3 className="font-headline font-semibold text-2xl text-[#4A0E1C]">
              Get in Touch Directly
            </h3>
            <p className="font-body text-sm text-[#38272D]/75 mt-1">
              For project inquiries, partnerships, editorial commissions, or full-time / contract roles, reach out through any of the channels below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="mailto:abisolaaoluwatoyin@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4A0E1C] text-white text-sm font-medium hover:bg-[#340611] shadow-md transition-all"
            >
              <Mail className="w-4 h-4 text-[#E5B86B]" />
              <span>Send Email Directly</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#4A0E1C]/20 text-[#38272D] text-sm font-medium hover:bg-[#FAF4EC] shadow-sm transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#4A0E1C]" />
                  <span>Copy: abisolaaoluwatoyin@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="https://www.linkedin.com/in/abisola-oluwatoyin/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white border border-[#4A0E1C]/20 text-[#4A0E1C] text-sm font-medium hover:bg-[#FAF4EC] shadow-sm transition-all"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://abisolawrites.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full bg-white border border-[#4A0E1C]/20 text-[#4A0E1C] text-sm font-medium hover:bg-[#FAF4EC] shadow-sm transition-all"
            >
              <span>Abisola Writes Substack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4 border-t border-[#4A0E1C]/10 flex flex-wrap items-center justify-between text-xs text-[#38272D]/70 font-body gap-2">
            <span>Direct inbox: abisolaaoluwatoyin@gmail.com</span>
            <span>Typically responds within 24–48 hours</span>
          </div>
        </div>

      </div>
    </section>
  );
};
