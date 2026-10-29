import React, { useState, useEffect } from 'react';

interface CabinetLoaderProps {
  onComplete: () => void;
}

export const CabinetLoader: React.FC<CabinetLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0); // 0: initial, 1: label sliding in, 2: stamped, 3: ready
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 300);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 2000);
    const t4 = setTimeout(() => {
      setIsDismissing(true);
      setTimeout(onComplete, 700);
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleOpen = () => {
    setIsDismissing(true);
    setTimeout(onComplete, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-between p-6 select-none transition-all duration-700 ${
        isDismissing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: '#2A0813', // Deep archival burgundy bookcloth
        color: '#FAF7F2',
      }}
    >
      {/* Top Folio Header */}
      <div className="w-full max-w-4xl flex items-center justify-between pb-4 border-b border-[#C89E53]/25 font-mono text-[11px] tracking-widest text-[#DFBF7B] uppercase">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C89E53] animate-pulse" />
          <span>THE WRITER'S CABINET // ARCHIVAL INDEX NO. 01</span>
        </div>
        <button
          onClick={handleOpen}
          className="text-white/60 hover:text-[#DFBF7B] transition-colors uppercase tracking-wider"
        >
          Skip Intro &rarr;
        </button>
      </div>

      {/* Center Archival Cabinet Drawer Plate (Contemporary Brass & Vellum) */}
      <div className="my-auto flex flex-col items-center">

        {/* Outer Drawer Front Panel with subtle bevel */}
        <div
          className="relative p-8 sm:p-14 rounded border flex flex-col items-center transition-all duration-700 shadow-2xl"
          style={{
            background: 'linear-gradient(145deg, #380F1C, #23060F)',
            borderColor: '#C89E53',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(223, 191, 123, 0.3)',
          }}
        >
          {/* 4 Corner Brass Rivet Screws */}
          <div className="brass-screw absolute top-3 left-3" />
          <div className="brass-screw absolute top-3 right-3" />
          <div className="brass-screw absolute bottom-3 left-3" />
          <div className="brass-screw absolute bottom-3 right-3" />

          {/* The Brass Label Holder Frame */}
          <div className="brass-label-holder p-3 sm:p-4 rounded-sm w-[290px] sm:w-[480px]">

            {/* The Archival Cream Vellum Label */}
            <div
              className={`p-6 sm:p-8 text-center transition-all duration-700 ${
                stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{
                background: '#FAF7F2',
                color: '#141113',
                boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              {/* Call Number Header */}
              <div className="font-mono text-[10px] tracking-widest uppercase text-neutral-500 pb-2 mb-3 border-b border-neutral-300 flex items-center justify-between">
                <span>CAT. NO. AO-2026</span>
                <span>DRAWER MASTER // CLASSIFIED</span>
              </div>

              {/* Author Headline */}
              <h1 className="font-display font-black text-2xl sm:text-4xl tracking-tight text-[#2A0813] leading-none mb-2">
                Abisola Oluwatoyin
              </h1>

              {/* Sub-label */}
              <p className="font-serif italic text-sm sm:text-base text-neutral-700 mb-3 font-normal">
                Writer &bull; Brand Strategist &bull; Corporate Communications
              </p>

              {/* Archive Verification Stamp */}
              <div
                className={`transition-all duration-500 ${
                  stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-125'
                }`}
              >
                <span className="dossier-stamp">
                  CABINET COLLECTION &bull; 2026
                </span>
              </div>
            </div>

          </div>

          {/* Brass Drawer Pull Handle Below Label Holder */}
          <div className="mt-6 flex flex-col items-center">
            <div className="brass-drawer-pull cursor-pointer hover:brightness-110 transition-all" onClick={handleOpen} />
            <div className="font-mono text-[9px] uppercase tracking-widest text-[#DFBF7B]/70 mt-2">
              PULL TO OPEN COLLECTION
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Dispatch Action Bar */}
      <div className="w-full max-w-xl text-center py-2 z-20">
        <button
          onClick={handleOpen}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-sm font-mono text-xs uppercase font-bold tracking-widest text-[#2A0813] bg-[#C89E53] hover:bg-[#DFBF7B] shadow-xl transition-all"
        >
          <span>Open The Writer's Cabinet &rarr;</span>
        </button>
        <div className="font-serif italic text-xs text-[#DFBF7B]/70 mt-2">
          Discovering campaigns, strategic dossiers &amp; literary essays
        </div>
      </div>
    </div>
  );
};
