import React, { useState, useEffect } from 'react';

interface LetterTarget {
  id: number;
  char: string;
  word: string;
  page: 'left' | 'right';
  xPct: number; // percentage coordinate on the page for visual pencil circle
  yPct: number;
  label: string;
}

// 17 letters for "ABISOLA OLUWATOYIN"
// Coordinates precisely mapped across the double-page spread from the reference image
const TARGET_LETTERS: LetterTarget[] = [
  { id: 0, char: 'A', word: 'A', page: 'right', xPct: 22, yPct: 40, label: 'Giant Letter A (Page 105)' },
  { id: 1, char: 'B', word: 'Bon', page: 'left', xPct: 44, yPct: 21, label: '"Bon Jour" (Page 104)' },
  { id: 2, char: 'I', word: 'It', page: 'left', xPct: 20, yPct: 24, label: '"It is 12:10" (Page 104)' },
  { id: 3, char: 'S', word: 'Step', page: 'right', xPct: 69, yPct: 29, label: '"A Step Away" (Page 105)' },
  { id: 4, char: 'O', word: "O'", page: 'left', xPct: 28, yPct: 84, label: "Giant Letter O' (Page 104)" },
  { id: 5, char: 'L', word: 'lunch', page: 'left', xPct: 49, yPct: 26, label: '"lunch" (Page 104)' },
  { id: 6, char: 'A', word: 'A', page: 'right', xPct: 83, yPct: 62, label: 'Giant Letter A (Page 105)' },
  { id: 7, char: 'O', word: 'Norman', page: 'left', xPct: 41, yPct: 25, label: '"Norman" (Page 104)' },
  { id: 8, char: 'L', word: 'laborers', page: 'right', xPct: 70, yPct: 37, label: '"laborers" (Page 105)' },
  { id: 9, char: 'U', word: 'lunchtime', page: 'right', xPct: 35, yPct: 48, label: '"lunchtime" (Page 105)' },
  { id: 10, char: 'W', word: 'wondering', page: 'left', xPct: 45, yPct: 24, label: '"wondering" (Page 104)' },
  { id: 11, char: 'A', word: 'walk', page: 'right', xPct: 68, yPct: 34, label: '"walk" (Page 105)' },
  { id: 12, char: 'T', word: 'time', page: 'left', xPct: 39, yPct: 25, label: '"time" (Page 104)' },
  { id: 13, char: 'O', word: 'old', page: 'left', xPct: 34, yPct: 50, label: '"old age" (Page 104)' },
  { id: 14, char: 'Y', word: 'yesterday', page: 'left', xPct: 22, yPct: 34, label: '"yesterday" (Page 104)' },
  { id: 15, char: 'I', word: 'Mike', page: 'right', xPct: 40, yPct: 51, label: '"Mike" (Page 105)' },
  { id: 16, char: 'N', word: 'Now', page: 'right', xPct: 22, yPct: 47, label: '"Now" (Page 105)' },
];

export const ManuscriptLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Reveal letters rhythmically one by one across the open book
    const stepDuration = 240; // ~4 seconds total for 17 letters
    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev < TARGET_LETTERS.length) {
          setActiveStep(prev);
          return prev + 1;
        } else {
          clearInterval(timer);
          // Wait briefly after all 17 letters are gathered, then transition
          setTimeout(() => {
            setIsDismissing(true);
            setTimeout(onComplete, 700);
          }, 1400);
          return prev;
        }
      });
    }, stepDuration);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissing(true);
    setTimeout(onComplete, 300);
  };

  const currentTarget = activeStep !== null && activeStep < TARGET_LETTERS.length
    ? TARGET_LETTERS[activeStep]
    : null;

  return (
    <div
      className={`fixed inset-0 z-[300] flex flex-col items-center justify-between p-3 sm:p-6 overflow-hidden select-none transition-all duration-700 ${
        isDismissing ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: '#121213',
        color: '#F5F3EE',
      }}
    >
      {/* Top Masthead & Name Compilation Tray */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 pb-3 border-b border-white/10 z-20">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-red-500 uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>THE LIVING MANUSCRIPT // EXTRACTING THE CIPHER</span>
            <span className="text-white/40">[{String(revealedCount).padStart(2, '0')}/17]</span>
          </div>
          <div className="text-xs text-white/60 font-serif italic mt-0.5 hidden sm:block">
            {currentTarget
              ? `Circled: '${currentTarget.char}' from ${currentTarget.label}`
              : revealedCount >= 17
              ? 'Author identified: Abisola Oluwatoyin. Manuscript approved.'
              : 'Scanning text across open spread...'}
          </div>
        </div>

        {/* The Spelled Name Letters Plate Tray */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* "ABISOLA" */}
          <div className="flex items-center gap-1">
            {TARGET_LETTERS.slice(0, 7).map((target, idx) => {
              const isFound = idx < revealedCount;
              const isCurrent = idx === activeStep;
              return (
                <div
                  key={idx}
                  className={`w-6 h-8 sm:w-8 sm:h-10 border flex items-center justify-center font-display font-black text-sm sm:text-lg transition-all duration-200 ${
                    isCurrent
                      ? 'bg-red-600 border-red-500 text-white scale-110 shadow-lg shadow-red-900/50'
                      : isFound
                      ? 'bg-white/10 border-white/40 text-white'
                      : 'border-white/10 text-white/20'
                  }`}
                >
                  {isFound ? target.char : '_'}
                </div>
              );
            })}
          </div>

          {/* Spacer */}
          <span className="text-red-500 font-bold px-1">&bull;</span>

          {/* "OLUWATOYIN" */}
          <div className="flex items-center gap-1">
            {TARGET_LETTERS.slice(7, 17).map((target, idx) => {
              const globalIdx = idx + 7;
              const isFound = globalIdx < revealedCount;
              const isCurrent = globalIdx === activeStep;
              return (
                <div
                  key={globalIdx}
                  className={`w-6 h-8 sm:w-8 sm:h-10 border flex items-center justify-center font-display font-black text-sm sm:text-lg transition-all duration-200 ${
                    isCurrent
                      ? 'bg-red-600 border-red-500 text-white scale-110 shadow-lg shadow-red-900/50'
                      : isFound
                      ? 'bg-white/10 border-white/40 text-white'
                      : 'border-white/10 text-white/20'
                  }`}
                >
                  {isFound ? target.char : '_'}
                </div>
              );
            })}
          </div>
        </div>

        {/* Skip Action Button */}
        <button
          onClick={handleSkip}
          className="px-3 py-1.5 border border-white/20 hover:border-red-500 text-[11px] font-mono uppercase tracking-wider text-white/80 hover:text-white transition-all"
        >
          Skip Intro &rarr;
        </button>
      </div>

      {/* The Double-Page Book Spread (Modelled directly on the Luncheon Magazine Photo) */}
      <div className="relative my-auto w-full max-w-5xl aspect-[1.45/1] max-h-[76vh] flex items-stretch shadow-2xl overflow-hidden rounded-sm border border-neutral-800">

        {/* Left Book Spine Cloth Binding Accent (Red & Black ribbon edge like photo) */}
        <div className="w-4 sm:w-6 bg-gradient-to-r from-neutral-900 via-red-800 to-neutral-900 shrink-0 border-r border-red-950 flex flex-col justify-between py-4 items-center">
          <div className="w-1 h-8 bg-red-600/40 rounded-full" />
          <div className="w-1 h-8 bg-red-600/40 rounded-full" />
        </div>

        {/* Left Page: Verso (Page 104) */}
        <div
          className="relative flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-hidden"
          style={{
            background: '#FAF7F0',
            color: '#0A0A0A',
            boxShadow: 'inset -15px 0 25px rgba(0,0,0,0.06)',
          }}
        >
          {/* Top Section: Giant 'H' + Poem 1 */}
          <div className="relative">
            {/* Giant Display Letter H */}
            <div className="font-display font-black text-6xl sm:text-8xl leading-none text-black select-none">
              H
            </div>

            {/* Poem Title */}
            <div className="font-serif italic text-xs sm:text-sm font-bold mt-2 mb-3 text-neutral-800">
              Adieu to Norman, Bon Jour to Joan and Jean-Paul
            </div>

            {/* Poem Text with Embedded Red Pencil Markers */}
            <div className="font-serif text-[10px] sm:text-xs leading-relaxed text-neutral-700 max-w-sm space-y-2">
              <p>
                It is 12:10 in New York and I am wondering<br />
                if I will finish this in time to meet Norman for lunch<br />
                ah lunch! I think I am going crazy<br />
                what with my terrible hangover and the weekend coming up<br />
                at excitement-prone Kenneth Koch's
              </p>
              <p className="hidden sm:block">
                yesterday I looked up the rue Frémicourt on a map<br />
                and was happy to find it like a bird<br />
                flying over Paris et ses environs
              </p>
              <p className="hidden md:block">
                we are all happy and young and toothless<br />
                it is the same as old age<br />
                the only thing to do is simply continue
              </p>
            </div>
          </div>

          {/* Bottom Section: Giant 'O'' + Colophon 104 */}
          <div className="relative pt-4 flex items-end justify-between">
            {/* Giant Display Letters O' */}
            <div className="font-display font-black text-6xl sm:text-8xl leading-none text-black select-none">
              O'
            </div>

            {/* Folio 104 */}
            <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest text-right">
              <span>104</span>
              <div className="text-[8px] text-neutral-400 font-serif">Frank O'Hara &bull; Lunch Poems</div>
            </div>
          </div>

          {/* Render Active Red Pencil Circles for Page 104 */}
          {TARGET_LETTERS.map((item, idx) => {
            if (item.page !== 'left') return null;
            const isFound = idx < revealedCount;
            const isCurrent = idx === activeStep;
            if (!isFound) return null;

            return (
              <div
                key={idx}
                className={`absolute pointer-events-none transition-all duration-300 ${
                  isCurrent ? 'scale-125 z-30' : 'scale-100 z-20'
                }`}
                style={{
                  left: `${item.xPct}%`,
                  top: `${item.yPct}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Authentic Red Hand-Drawn Pencil Circle SVG */}
                <svg className="w-10 h-10 sm:w-14 sm:h-14 overflow-visible" viewBox="0 0 60 60">
                  <path
                    d="M12,28 C10,14 26,8 42,12 C56,16 56,38 44,48 C32,56 14,52 10,38 C8,28 18,18 30,16"
                    fill="none"
                    stroke="#CC1111"
                    strokeWidth={isCurrent ? '3' : '2'}
                    strokeLinecap="round"
                    strokeDasharray="200"
                    strokeDashoffset="0"
                    className="transition-all duration-500"
                  />
                </svg>

                {/* Letter Step Number Badge */}
                <span
                  className="absolute -top-2 -right-2 bg-red-600 text-white font-mono font-bold text-[8px] sm:text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow"
                >
                  {idx + 1}
                </span>

                {/* Target Letter Spotlight Tooltip */}
                {isCurrent && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-red-600 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                    '{item.char}' [{item.word}]
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Central Book Spine Crease & Shadow */}
        <div
          className="w-4 sm:w-8 shrink-0 relative z-10"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.18), rgba(0,0,0,0.03) 40%, rgba(0,0,0,0.03) 60%, rgba(0,0,0,0.18))',
            boxShadow: 'inset 0 0 10px rgba(0,0,0,0.25)',
          }}
        />

        {/* Right Page: Recto (Page 105) */}
        <div
          className="relative flex-1 p-6 sm:p-10 flex flex-col justify-between overflow-hidden"
          style={{
            background: '#FAF7F0',
            color: '#0A0A0A',
            boxShadow: 'inset 15px 0 25px rgba(0,0,0,0.06)',
          }}
        >
          {/* Upper Right: Giant 'R' + Poem 2 */}
          <div className="relative">
            <div className="flex justify-end">
              <div className="font-display font-black text-6xl sm:text-8xl leading-none text-black select-none">
                R
              </div>
            </div>

            <div className="font-serif italic text-xs sm:text-sm font-bold text-neutral-800 text-right mt-1 mb-2">
              A Step Away from Them
            </div>

            <div className="font-serif text-[10px] sm:text-xs leading-relaxed text-neutral-700 text-right max-w-sm ml-auto space-y-1">
              <p>
                It's my lunch hour, so I go for a walk<br />
                among the hum-colored cabs.<br />
                First, down the sidewalk where laborers feed<br />
                their dirty glistening torsos sandwiches
              </p>
            </div>
          </div>

          {/* Middle Right: Giant 'A' + Poem 3 */}
          <div className="relative my-auto">
            <div className="font-display font-black text-5xl sm:text-7xl leading-none text-black select-none">
              A
            </div>

            <div className="font-serif italic text-xs sm:text-sm font-bold text-neutral-800 mt-1 mb-1">
              Personal Poem
            </div>

            <div className="font-serif text-[10px] sm:text-xs leading-relaxed text-neutral-700 max-w-xs space-y-1">
              <p>
                Now when I walk around at lunchtime<br />
                I have only two charms in my pocket<br />
                an old Roman coin Mike Kanemitsu gave me...
              </p>
            </div>
          </div>

          {/* Lower Right: Giant 'A' + Poem 4 + Folio 105 */}
          <div className="relative pt-2 flex items-end justify-between">
            <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest text-left">
              <span>105</span>
              <div className="text-[8px] text-neutral-400 font-serif">Luncheon Magazine &bull; Issue No. 1</div>
            </div>

            <div className="text-right">
              <div className="font-display font-black text-5xl sm:text-7xl leading-none text-black select-none">
                A
              </div>
              <div className="font-serif italic text-[9px] sm:text-[10px] text-neutral-800">
                Poem [Lana Turner has collapsed!]
              </div>
            </div>
          </div>

          {/* Render Active Red Pencil Circles for Page 105 */}
          {TARGET_LETTERS.map((item, idx) => {
            if (item.page !== 'right') return null;
            const isFound = idx < revealedCount;
            const isCurrent = idx === activeStep;
            if (!isFound) return null;

            return (
              <div
                key={idx}
                className={`absolute pointer-events-none transition-all duration-300 ${
                  isCurrent ? 'scale-125 z-30' : 'scale-100 z-20'
                }`}
                style={{
                  left: `${item.xPct}%`,
                  top: `${item.yPct}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Authentic Red Hand-Drawn Pencil Circle SVG */}
                <svg className="w-10 h-10 sm:w-14 sm:h-14 overflow-visible" viewBox="0 0 60 60">
                  <path
                    d="M12,28 C10,14 26,8 42,12 C56,16 56,38 44,48 C32,56 14,52 10,38 C8,28 18,18 30,16"
                    fill="none"
                    stroke="#CC1111"
                    strokeWidth={isCurrent ? '3' : '2'}
                    strokeLinecap="round"
                    strokeDasharray="200"
                    strokeDashoffset="0"
                    className="transition-all duration-500"
                  />
                </svg>

                {/* Letter Step Number Badge */}
                <span
                  className="absolute -top-2 -right-2 bg-red-600 text-white font-mono font-bold text-[8px] sm:text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow"
                >
                  {idx + 1}
                </span>

                {/* Target Letter Spotlight Tooltip */}
                {isCurrent && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-red-600 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap">
                    '{item.char}' [{item.word}]
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Editorial Verdict Bar */}
      <div className="w-full max-w-4xl text-center py-2 z-20">
        {revealedCount >= 17 ? (
          <div className="animate-fadeIn space-y-2">
            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase font-bold tracking-widest shadow-xl transition-all"
            >
              <span>Cipher Complete: Enter Broadsheet Archive &rarr;</span>
            </button>
            <div className="text-[11px] font-serif italic text-white/60">
              Opening Abisola Oluwatoyin's Editorial Portfolio...
            </div>
          </div>
        ) : (
          <div className="font-mono text-[11px] text-white/50 tracking-wider">
            Circled letters from open publication spread 104–105 to assemble author cipher.
          </div>
        )}
      </div>
    </div>
  );
};
