import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';

interface EditorialIntroProps {
  onComplete: () => void;
}

export const EditorialIntro: React.FC<EditorialIntroProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: ink bloom, 1: text reveal, 2: stamp, 3: exit
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 1000);
    // Extended duration: 6500ms allows user to comfortably read the welcome note
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
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-6 select-none transition-all duration-700 ${
        isDismissing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'rgba(250, 244, 236, 0.97)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Delicate floating background sparkles */}
      <div className="absolute top-1/4 left-1/4 text-[#E5B86B] text-2xl animate-sparkle">✦</div>
      <div className="absolute bottom-1/3 right-1/4 text-[#D995A9] text-xl animate-sparkle-delayed">✦</div>
      <div className="absolute top-1/3 right-1/3 text-[#E5B86B]/60 text-sm animate-sparkle">✧</div>

      {/* Center Editorial Stationery Card */}
      <div
        className="relative w-full max-w-lg p-8 sm:p-12 rounded-3xl bg-white border border-[#72213A]/15 text-center space-y-6 overflow-hidden"
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
            ✦ A LITTLE DETOUR INTO MY WORLD ✦
          </span>
          <Heart className="w-3.5 h-3.5 fill-[#D995A9] text-[#D995A9]" />
        </div>

        {/* Animated Headline Reveal */}
        <div className="space-y-3">
          <h1
            className={`font-headline font-semibold text-3xl sm:text-4xl text-[#72213A] tracking-tight transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            I have a way with words.
          </h1>
          <p
            className={`font-body text-base text-[#38272D]/80 leading-relaxed transition-all duration-700 ${
              phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            And a few things to show for it.
          </p>
        </div>

        {/* Subtitle Pill Badge — hidden, new copy is cleaner without it */}

        {/* Action Button: Have a look */}
        <div
          className={`pt-2 transition-all duration-700 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <button
            onClick={handleSkip}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#72213A] text-white text-xs font-semibold font-body hover:bg-[#54172A] shadow-md hover:shadow-lg transition-all"
          >
            <span>Have a look →</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5B86B]" />
          </button>
        </div>

        {/* Delicate Bottom Reading Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FAF4EC]">
          <div
            className="h-full bg-gradient-to-r from-[#72213A] via-[#D995A9] to-[#E5B86B]"
            style={{
              animation: 'editorialProgress 6.5s linear forwards',
            }}
          />
        </div>
      </div>

      {/* Inline keyframe for progress bar */}
      <style>{`
        @keyframes editorialProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
