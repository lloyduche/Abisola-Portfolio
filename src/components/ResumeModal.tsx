import React from 'react';
import { X, Download, Printer, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(15, 29, 36, 0.70)', backdropFilter: 'blur(16px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.97 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(15,29,36,0.25)] border border-[#18303D]/18 bg-[#FCFBF9] flex flex-col"
          style={{ maxHeight: '92vh' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#18303D]/12 shrink-0 bg-[#EFECE4]">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-[#FF5E36]">
                Curriculum Vitae
              </p>
              <h3 className="font-headline font-semibold text-base text-[#0F1D24] leading-tight mt-0.5">
                {cvTitle}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {/* Download (Persimmon Spark 10% on button) */}
              <a
                href={cvUrl}
                download
                title="Download PDF"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono persimmon-btn text-white transition-all no-underline shadow-sm"
              >
                <Download className="w-3.5 h-3.5 text-white" />
                <span>Download</span>
              </a>

              {/* Print */}
              <button
                onClick={handlePrint}
                title="Print PDF"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono bg-[#F7F5F0] border border-[#18303D]/14 text-[#0F1D24] hover:text-[#FF5E36] transition-all cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#59707E]" />
                <span>Print</span>
              </button>

              {/* Open in new tab */}
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Open in new tab"
                className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-mono bg-[#F7F5F0] border border-[#18303D]/14 text-[#0F1D24] hover:text-[#FF5E36] transition-all no-underline"
              >
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5E36]" />
                <span className="hidden sm:inline">Open</span>
              </a>

              {/* Close */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#F7F5F0] border border-[#18303D]/14 text-[#18303D] hover:text-[#FF5E36] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-hidden bg-[#F7F5F0]" style={{ minHeight: '60vh' }}>
            <iframe
              src={`${cvUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full border-0"
              style={{ minHeight: '60vh' }}
              title={cvTitle}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
