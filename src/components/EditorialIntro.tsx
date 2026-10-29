import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface EditorialIntroProps {
  onComplete: () => void;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: ink bloom, 1: text reveal, 2: stamp, 3: exit
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 250);
    const t2 = setTimeout(() => setPhase(2), 850);
    const t3 = setTimeout(() => {
      setIsDismissing(true);
      setTimeout(onComplete, 550);
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-6 select-none transition-all duration-600 ${
        isDismissing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'rgba(250, 244, 236, 0.96)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Delicate floating background sparkles */}
      <div className="absolute top-1/4 left-1/4 text-[#E5B86B] text-2xl animate-sparkle">✦</div>
      <div className="absolute bottom-1/3 right-1/4 text-[#D995A9] text-xl animate-sparkle-delayed">✦</div>
      <div className="absolute top-1/3 right-1/3 text-[#E5B86B]/60 text-sm animate-sparkle">✧</div>

      {/* Center Editorial Stationery Card */}
      <div
        className="relative w-full max-w-lg p-8 sm:p-12 rounded-3xl bg-white border border-[#72213A]/15 shadow-2xl text-center space-y-5"
        style={{
          boxShadow: '0 25px 60px rgba(114, 33, 58, 0.12), 0 0 0 1px rgba(217, 149, 169, 0.25)',
        }}
      >
        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="absolute top-4 right-5 text-xs font-body font-medium text-[#72213A]/60 hover:text-[#72213A] transition-colors"
        >
          Skip &rarr;
        </button>

        {/* Girly & Professional Feather / Heart Icon */}
        <div className="flex items-center justify-center gap-1.5 text-[#D995A9]">
          <Sparkles className="w-4 h-4 text-[#E5B86B] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="font-hand text-base font-bold text-[#72213A]">
            words with intention &bull; stories with soul
          </span>
          <Heart className="w-3.5 h-3.5 fill-[#D995A9] text-[#D995A9]" />
        </div>

        {/* Animated Headline Reveal */}
        <div className="space-y-1">
          <div className="text-xs uppercase tracking-widest font-body text-[#38272D]/60 font-semibold">
            The Portfolio of
          </div>
          <h1
            className={`font-headline font-semibold text-3xl sm:text-4xl text-[#72213A] tracking-tight transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Abisola Oluwatoyin
          </h1>
        </div>

        {/* Subtitle Pill Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF4EC] border border-[#D995A9]/50 text-xs font-body font-semibold text-[#72213A] transition-all duration-700 ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5B86B]" />
          <span>Writer &bull; Marketing Comms &bull; Brand Storyteller</span>
        </div>

        {/* Handwritten signature quote flourish */}
        <div
          className={`pt-2 transition-all duration-700 ${
            phase >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="font-hand text-xl text-[#72213A]/85 italic">
            "bringing ideas to life through words, strategy &amp; storytelling ♡"
          </p>
        </div>
      </div>
    </div>
  );
};
