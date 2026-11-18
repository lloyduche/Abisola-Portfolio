import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditorialIntroProps {
  onComplete: () => void;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => {
      setIsDismissing(true);
      setTimeout(onComplete, 600);
    }, 6500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(onComplete, 250);
  };

  return (
    <AnimatePresence>
      {!isDismissing && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 select-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(247,245,240,0.98) 0%, rgba(239,236,228,0.99) 100%)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Ambient floating sparkles (Persimmon & Petrol) */}
          <div className="absolute top-1/4 left-1/4 text-[#FF5E36]/60 text-2xl animate-sparkle">✦</div>
          <div className="absolute bottom-1/3 right-1/4 text-[#18303D]/40 text-xl animate-sparkle-delayed">✧</div>
          <div className="absolute top-1/3 right-1/3 text-[#FF5E36]/40 text-sm animate-sparkle">✦</div>
          <div className="absolute bottom-1/4 left-1/3 text-amber-500/40 text-lg animate-sparkle-delayed">✧</div>

          {/* Radial glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#EFECE4]/50 blur-[130px] pointer-events-none" />

          {/* Center Identity Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg p-10 sm:p-14 rounded-3xl text-center space-y-7 overflow-hidden bg-[#FCFBF9] border border-[#18303D]/14 shadow-[0_20px_60px_rgba(24,48,61,0.12)]"
          >
            {/* Skip button */}
            <button
              onClick={handleSkip}
              className="absolute top-5 right-6 text-xs font-mono text-[#59707E] hover:text-[#FF5E36] transition-colors flex items-center gap-1 cursor-pointer"
            >
              Skip <ArrowRight className="w-3 h-3" />
            </button>

            {/* Identity Badge */}
            <div className="flex items-center justify-center gap-1.5 text-[#FF5E36]">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="font-hand text-base font-bold text-[#0F1D24]">
                ✦ A LITTLE DETOUR INTO MY WORLD ✦
              </span>
              <span className="text-[#FF5E36] text-sm">♡</span>
            </div>

            {/* Animated Headline Reveal */}
            <div className="space-y-3">
              <h1
                className={`font-headline font-semibold text-3xl sm:text-4xl text-[#0F1D24] tracking-tight transition-all duration-700 ${
                  phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                I have a way with words.
              </h1>
              <p
                className={`font-body text-base text-[#243A47] leading-relaxed transition-all duration-700 ${
                  phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                }`}
              >
                And a few things to show for it.
              </p>
            </div>

            {/* Action Button: Have a look (Persimmon Spark 10% on button) */}
            <div
              className={`pt-2 transition-all duration-700 ${
                phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              <button
                onClick={handleSkip}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full persimmon-btn text-white text-xs sm:text-sm font-semibold font-body shadow-[0_4px_18px_rgba(255,94,54,0.4)] transition-all cursor-pointer"
              >
                <span>Have a look →</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>

            {/* Animated progress bar */}
            <motion.div className="relative h-[2px] rounded-full bg-[#F7F5F0] overflow-hidden mt-6">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#E6441A] via-[#FF5E36] to-[#FFA07A] shadow-[0_0_8px_#FF5E36]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.8, ease: 'linear', delay: 0.5 }}
              />
            </motion.div>

            {/* Skip hint */}
            <p className="text-[11px] font-mono text-[#7A766D]">
              Loading portfolio experience...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
