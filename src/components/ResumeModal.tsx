import React from 'react';
import { X, Download, Printer, ArrowUpRight } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl?: string;
  cvTitle?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  cvUrl = '/cv-content-writing.pdf',
  cvTitle = 'CV — Abisola Oluwatoyin',
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const win = window.open(cvUrl, '_blank');
    if (win) {
      win.addEventListener('load', () => win.print(), { once: true });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      style={{ background: 'rgba(56,39,45,0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#72213A]/15"
        style={{ background: '#fff', maxHeight: '92vh', display: 'flex', flexDirection: 'column' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal Header ── */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-[#72213A]/10 shrink-0"
          style={{ background: '#FAF4EC' }}
        >
          {/* Left: title */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#72213A]/60 font-body">
              Curriculum Vitae
            </p>
            <h3 className="font-headline font-semibold text-base text-[#72213A] leading-tight mt-0.5">
              {cvTitle}
            </h3>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            {/* Download */}
            <a
              href={cvUrl}
              download
              title="Download PDF"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-body border border-[#72213A]/20 text-[#72213A] bg-white hover:bg-[#f0e5d6] transition-all no-underline"
            >
              <Download className="w-3.5 h-3.5" />
              Download
            </a>

            {/* Print */}
            <button
              onClick={handlePrint}
              title="Print PDF"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold font-body border border-[#72213A]/20 text-[#38272D]/70 bg-white hover:bg-[#FAF4EC] transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              Print
            </button>

            {/* Open in new tab */}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open in new tab"
              className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-semibold font-body border border-[#72213A]/20 text-[#72213A] bg-white hover:bg-[#FAF4EC] transition-all no-underline"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open</span>
            </a>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#72213A]/10 text-[#38272D]/70 hover:text-[#72213A] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── PDF Viewer ── */}
        <div className="flex-1 overflow-hidden" style={{ minHeight: '60vh' }}>
          <iframe
            src={`${cvUrl}#toolbar=0&navpanes=0`}
            title={cvTitle}
            className="w-full h-full border-0"
            style={{ minHeight: '60vh', height: '100%' }}
          />
        </div>

        {/* ── Mobile Action Bar ── */}
        <div
          className="flex sm:hidden items-center justify-center gap-3 px-6 py-4 border-t border-[#72213A]/10 shrink-0"
          style={{ background: '#FAF4EC' }}
        >
          <a
            href={cvUrl}
            download
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold font-body bg-[#72213A] text-white no-underline"
          >
            <Download className="w-3.5 h-3.5" />
            Download
          </a>
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold font-body border border-[#72213A]/20 text-[#72213A] bg-white"
          >
            <Printer className="w-3.5 h-3.5" />
            Print
          </button>
        </div>
      </div>
    </div>
  );
};
